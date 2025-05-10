const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // e.g., "science-fair"
  title: { type: String, required: true },
  date: { type: String, required: true }, // e.g., "October 15th"
  description: { type: String, required: true },
  details: { type: String, required: true },
  image: { type: String }, // Cloudinary URL
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Announcement", announcementSchema);