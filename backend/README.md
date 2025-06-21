# 🏥 Hospital Webpage — Backend

A **Node.js + Express.js API** that powers the Hospital Webpage (Bhera Society).  
It handles:
- Storing appointment data in MongoDB
- Sending email and SMS notifications
- Managing payments (Stripe)

---

## ⚙️ Tech Stack
| Tool | Purpose |
|-------|---------|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| Mongoose | MongoDB ODM |
| MongoDB Atlas | Database |
| Nodemailer | Email notifications |
| Twilio | SMS notifications |
| Stripe | Payments |
| dotenv | Environment variables |
| cors | Cross-origin support |
| body-parser | Parse request body |
| nodemon | Auto-restart server (dev)

---

## 📦 Installation

```bash
# Inside /backend
npm install
🔑 .env Example
ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://upender:rednepu@bherasociety.xs1yu4e.mongodb.net/hospital?retryWrites=true&w=majority&appName=Bherasociety

# Twilio
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE=your_twilio_phone_number

# Nodemailer
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_gmail_app_password
ADMIN_EMAIL=admin_receiver@gmail.com
ADMIN_PHONE=+91xxxxxxxxxx

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
✅ Add .env to .gitignore

🚀 Running the Server
bash
Copy
Edit
# Development
npm run dev

# Production
npm start
🛠 MongoDB Atlas Setup
1️⃣ Create free cluster
2️⃣ Create DB user (username + strong password)
3️⃣ Whitelist IPs
4️⃣ Copy connection string to .env

📬 Notifications Setup
✅ Twilio

Create account, get SID/Auth Token/Phone

✅ Nodemailer

Enable Gmail 2FA + create App Password

🧠 API Endpoints
Method	Route	Description
GET	/	Health check
POST	/appointments	Book appointment
POST	/create-checkout-session	Stripe checkout

🎯 Future Enhancements
JWT authentication

Input validation (Joi)

Centralized error handler

Rate limiter

👨‍💻 Author
👤 Bhukya Upender
🎓 B.Tech ECE @ IIT BHU Varanasi
💻 Passionate about full-stack development
🎮 Hobbies: Gaming | Reading | Music