const mongoose = require("mongoose");

// MongoDB connection

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phonenumber: { type: String, required: true },
  disease_name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// User model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
