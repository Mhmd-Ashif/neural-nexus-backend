const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^[0-9]{10}$/, "Please enter a valid mobile number"], // 10-digit validation
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
