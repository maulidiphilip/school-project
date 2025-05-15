const User = require("../../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register (public)
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    if (!userName || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const checkUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (checkUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email or username",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
      role: "user", // Default role
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};

// Login (public)
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(404).json({
        success: false,
        message: "User doesn't exist! Please register first",
      });
    }
    const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if (!checkPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password! Please try again",
      });
    }
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      process.env.CLIENT_SECRET_KEY,
      { expiresIn: "60m" }
    );
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      token,
      user: {
        id: checkUser._id,
        userName: checkUser.userName,
        email: checkUser.email,
        role: checkUser.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};

// Logout (public)
const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};

// Update Profile (authenticated users)
const updateProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const { userName, email, password } = req.body;
    if (!userName || !email) {
      return res.status(400).json({ success: false, message: "Username and email are required" });
    }
    const existingUser = await User.findOne({
      $or: [{ email }, { userName }],
      _id: { $ne: id },
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email or username already in use by another user",
      });
    }
    const updateData = { userName, email };
    if (password) {
      updateData.password = await bcrypt.hash(password, 12);
    }
    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ success: false, message: "Failed to update profile" });
  }
};

// Auth Middleware
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized user!" });
  }
  try {
    const decoded = jwt.verify(token, process.env.CLIENT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized user!" });
  }
};

module.exports = {
  registerUser,
  login,
  logoutUser,
  updateProfile,
  authMiddleware,
};