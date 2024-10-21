const Admin = require("../modals/adminModal");
const bcrypt = require("bcryptjs");

// Register a new admin (For testing, you might want to create an admin manually or with this function)
async function registerAdmin(adminData) {
  try {
    const { mobileNumber, password } = adminData;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({ mobileNumber, password: hashedPassword });
    return await admin.save();
  } catch (error) {
    throw new Error(error.message);
  }
}

// Login admin and check credentials
async function loginAdmin(mobileNumber, password) {
  try {
    const admin = await Admin.findOne({ mobileNumber });

    if (!admin) {
      throw new Error("Admin not found");
    }

    // Compare the given password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return { message: "Login successful", admin };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  registerAdmin,
  loginAdmin,
};
