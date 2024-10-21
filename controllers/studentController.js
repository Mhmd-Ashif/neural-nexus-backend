const studentService = require("../services/studentService");

// POST: Register a new student
const registerStudent = async (req, res) => {
  try {
    const studentData = req.body;
    const newStudent = await studentService.registerStudent(studentData);
    return res.status(201).json({
      message: "Student registered successfully!",
      student: newStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error registering student",
      error: error.message,
    });
  }
};

// PUT: Edit payment status of a student
const editPaymentStatus = async (req, res) => {
  console.log(req.params.dno);
  try {
    const { dno } = req.params;

    const updatedStudent = await studentService.editPaymentStatus(dno);
    return res.status(200).json({
      message: "Payment status updated successfully!",
      student: updatedStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating payment status",
      error: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const result = await studentService.getAllStudents();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const del = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await studentService.deleteStudent(id);
    return res.status(200).json({
      message: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerStudent,
  editPaymentStatus,
  getAll,
  del,
};
