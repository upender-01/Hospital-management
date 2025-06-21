# 🏥 Hospital Webpage — Full Stack Application

A full-stack hospital management system consisting of:

- **Frontend:** React.js (Vite)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB Atlas (via Mongoose)  
- **Notifications:** Nodemailer (email) + Twilio (SMS)

---

## 📌 Overview

This application is designed for the **Bhera Society** hospital.  

- The **frontend** presents information about the Bhera Society, its contributors, and allows patients to book appointments.  
- The **backend** securely stores user data, sends confirmation emails and SMS notifications, and handles payment through Stripe.

---

## 📂 Project Structure

hospital-management/
├── backend/ # Node.js + Express backend
│ ├── models/ # Mongoose schemas
│ ├── payment/ # Stripe payment logic
│ ├── .env # Environment variables (not committed)
│ ├── index.js # App entry point
│ ├── package.json
│ └── README.md # Backend-specific README
│
├── myreact-app/ # React frontend (Vite)
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── README.md # Frontend-specific README
│
└── README.md # Main README (you're here)

yaml
Copy
Edit

---

## 🚀 How to Set Up

### 1️⃣ Clone the repository
```bash
git clone https://github.com/upender-01/hospital-management.git
cd hospital-management
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
✅ Run in development

bash
Copy
Edit
npm run dev
✅ Run in production

bash
Copy
Edit
npm start
Required env variables in .env:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE=your_twilio_phone_number
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_gmail_app_password
ADMIN_EMAIL=admin_receiver@gmail.com
ADMIN_PHONE=+91xxxxxxxxxx
STRIPE_SECRET_KEY=your_stripe_secret
3️⃣ Frontend Setup
bash
Copy
Edit
cd ../myreact-app
npm install
npm run dev
➡ App runs at http://localhost:5173/

⚙️ Tech Stack
Part	Tech
Frontend	React.js (Vite), Tailwind CSS
Backend	Node.js, Express.js, Mongoose
DB	MongoDB Atlas
Notifications	Nodemailer, Twilio
Payment	Stripe
Tools	dotenv, cors, nodemon, body-parser

📊 MongoDB Setup
👉 Hosted on MongoDB Atlas
👉 Use Mongoose to connect

Sample MONGO_URI

bash
Copy
Edit
MONGO_URI=mongodb+srv://upender:<password>@bherasociety.xs1yu4e.mongodb.net/hospital?retryWrites=true&w=majority&appName=Bherasociety
➡ Replace <password> with your actual password.

💡 Manage data via MongoDB Atlas UI or Compass.

📬 Twilio + Nodemailer Setup
✅ Twilio

Create an account, get your SID, Auth Token, and phone number.

Send SMS to admin + user on appointment booking.

✅ Nodemailer

Use Gmail App Password (with 2FA enabled).

Sends email notifications to admin.

🧠 API Endpoints
Method	Route	Description
GET	/	Health check
POST	/appointments	Book appointment
POST	/create-checkout-session	Initiate payment

(Add more as you build features)

🎯 Future Improvements
✅ Add JWT authentication
✅ Input validation (e.g. Joi)
✅ Better error handling middleware
✅ Unit + integration tests (Jest + Supertest)
✅ Rate limiting, security headers

👨‍💻 Author
👤 Bhukya Upender
🎓 B.Tech, Electronics and Communication Engineering
🎓 IIT BHU Varanasi

💻 Passionate about web development, C++, and full-stack projects.
🎮 Hobbies: gaming, reading books, listening to music.

⚠️ Notes
Do not commit your .env file. Add it to .gitignore.

Use strong passwords + secure your cloud services.

📌 Deployment
✅ Frontend: Netlify / Vercel / Firebase Hosting
✅ Backend: Render / Railway / Cyclic / VPS

🔗 Useful Links
MongoDB Atlas

Twilio

Nodemailer

Stripe