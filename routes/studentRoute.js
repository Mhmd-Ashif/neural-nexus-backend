const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const Student = require("../modals/studentModal");
const Admin = require("../modals/adminModal");

// POST: Register a student
router.post("/register", studentController.registerStudent);

// PUT: Edit payment status of a student
router.put("/editPayment/:dno", studentController.editPaymentStatus);

router.get(
  "/getall",
  async function (req, res, next) {
    const token = req.headers.authorization;
    try {
      const result = await Admin.find({ password: token });
      if (result.length) {
        next();
      } else {
        throw new Error("no id found");
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  studentController.getAll
);

router.delete("/deleteStudent/:id", studentController.del);

module.exports = router;
