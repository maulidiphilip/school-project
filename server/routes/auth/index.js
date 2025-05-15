const express = require("express");
const router = express.Router();
const { registerUser, login, logoutUser, updateProfile, authMiddleware } = require("../../controller/auth");

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", logoutUser);
router.put("/profile", authMiddleware, updateProfile);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = router;