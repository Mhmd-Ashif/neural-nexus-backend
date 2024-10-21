const Student = require("../modals/studentModal");

// Register a new student
async function registerStudent(studentData) {
  try {
    const student = new Student(studentData);
    return await student.save();
  } catch (error) {
    throw new Error(error.message);
  }
}

// get all student list

// Edit payment status of a student
async function editPaymentStatus(dno) {
  try {
    const student = await Student.findOneAndUpdate(
      { dno: dno },
      { paymentStatus: true }
    );
    if (!student) {
      throw new Error(`Student with DNO: ${dno} not found`);
    }
    return student;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllStudents() {
  return Student.find();
}

async function deleteStudent(id) {
  return Student.findByIdAndDelete(id);
}

module.exports = {
  registerStudent,
  editPaymentStatus,
  getAllStudents,
  deleteStudent,
};
