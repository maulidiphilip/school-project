const express = require("express");
const router = express.Router();
const {registerUser, login, logoutUser, authMiddleware} = require('../../controller/auth/index.js');

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});
module.exports = router;
