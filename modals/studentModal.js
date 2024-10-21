const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  dno: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
