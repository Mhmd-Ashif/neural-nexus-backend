const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// POST: Admin Login
router.post("/login", adminController.loginAdmin);

// POST: Register Admin (Optional for testing)
router.post("/register", adminController.registerAdmin);



module.exports = router;
