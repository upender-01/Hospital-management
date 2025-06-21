const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const mongoose = require("mongoose");
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Appointment = require("./models/user");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,
   useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000 
 })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Twilio + Nodemailer setup
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome To Backend");
});

// Appointment booking
app.post("/appointments", async (req, res) => {
  try {
    const { name, phonenumber, disease_name } = req.body;

    if (!name || !phonenumber || !disease_name) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const newAppointment = new Appointment({
      name,
      phonenumber,
      disease_name
    });
    await newAppointment.save();
    console.log("✅ Appointment saved");
    console.log(newAppointment);// 

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booked",
      text: `New appointment booked:\nName: ${name}\nPhone: ${phonenumber}\nDisease: ${disease_name}`
    });
    console.log("📧 Email sent to admin");

    // SMS to admin
    await twilioClient.messages.create({
      body: `New appointment: ${name}, Phone: ${phonenumber}, Disease: ${disease_name}`,
      from: process.env.TWILIO_PHONE,
      to: process.env.ADMIN_PHONE
    });
    console.log("📲 SMS sent to admin");

    // SMS to user
    await twilioClient.messages.create({
      body: `Hi ${name}, your appointment for ${disease_name} has been booked successfully. Thank you!`,
      from: process.env.TWILIO_PHONE,
      to: `+91${phonenumber}`
    });
    console.log("📲 SMS sent to user");

    res.status(201).json({ message: "Appointment booked, admin notified, user confirmation sent" });

  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});
// payment 
app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'upi'],  // add 'upi' if enabled
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Donation',
            },
            unit_amount: 50000, // ₹500.00 in paise
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://yourdomain.com/success',
      cancel_url: 'https://yourdomain.com/cancel',
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
