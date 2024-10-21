const adminService = require("../services/adminService");

// POST: Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { mobileNumber, password } = req.body;

    const response = await adminService.loginAdmin(mobileNumber, password);

    return res.status(200).json({
      message: "login",
      admin: response.admin,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

// POST: Register a new admin (Optional for testing purposes)
const registerAdmin = async (req, res) => {
  try {
    const adminData = req.body;
    const newAdmin = await adminService.registerAdmin(adminData);
    return res.status(201).json({
      message: "created",
      admin: newAdmin,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error registering admin",
      error: error.message,
    });
  }
};

module.exports = {
  loginAdmin,
  registerAdmin, // Optional, can be removed in production
};
