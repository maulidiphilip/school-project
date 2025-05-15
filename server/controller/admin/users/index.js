const User = require("../../../model/User");
const bcrypt = require("bcryptjs");

// Get all users (admin only)
const getUsers = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admins can access this resource" });
    }
    const users = await User.find().select("-password");
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};

// Get single user by ID (admin only)
const getUserById = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admins can access this resource" });
    }
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch user" });
  }
};

// Create user (admin only)
const createUser = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admins can create users" });
    }
    const { userName, email, password, role: userRole } = req.body;
    if (!userName || !email || !password || !userRole) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email or username already exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
      role: userRole,
    });
    await newUser.save();
    const userResponse = { ...newUser._doc };
    delete userResponse.password;
    res.status(201).json({ success: true, user: userResponse });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).json({ success: false, message: "Failed to create user" });
  }
};

// Update user (admin only)
const updateUser = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admins can update users" });
    }
    const { userName, email, password, role: userRole } = req.body;
    if (!userName || !email || !userRole) {
      return res.status(400).json({ success: false, message: "Username, email, and role are required" });
    }
    const existingUser = await User.findOne({
      $or: [{ email }, { userName }],
      _id: { $ne: req.params.id },
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email or username already in use by another user",
      });
    }
    const updateData = { userName, email, role: userRole };
    if (password) {
      updateData.password = await bcrypt.hash(password, 12);
    }
    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
};

// Delete user (admin only)
const deleteUser = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admins can delete users" });
    }
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};