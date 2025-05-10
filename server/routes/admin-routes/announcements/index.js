const express = require("express");
const { createAnnouncement, getAnnouncements, updateAnnouncement, deleteAnnouncement } = require("../../../controller/admin/announcements/index.js");
const upload = require("../../../middleware/upload.js");
const { authMiddleware } = require("../../../controller/auth");
const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createAnnouncement);
router.get("/", getAnnouncements);
router.put("/:id", authMiddleware, upload.single("image"), updateAnnouncement);
router.delete("/:id", authMiddleware, deleteAnnouncement);

module.exports = router;