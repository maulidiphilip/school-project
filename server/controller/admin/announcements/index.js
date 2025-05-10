const Announcements = require("../../../model/admin/Announcements/index.js");

const createAnnouncement = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admin can create announcements" });
    }
    const { id, title, date, description, details } = req.body;
    const image = req.file?.path;
    if (!id || !title || !date || !description || !details) {
      return res.status(400).json({ success: false, message: "All fields except image are required" });
    }
    const announcement = new Announcements({ id, title, date, description, details, image });
    await announcement.save();
    res.status(201).json({ success: true, announcement });
  } catch (error) {
    console.error("Create announcement error:", error);
    res.status(500).json({ success: false, message: "Failed to create announcement" });
  }
};

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcements.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, announcements });
  } catch (error) {
    console.error("Get announcements error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch announcements" });
  }
};

const updateAnnouncement = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admin can update announcements" });
    }
    const { id, title, date, description, details } = req.body;
    const image = req.file?.path;
    if (!id || !title || !date || !description || !details) {
      return res.status(400).json({ success: false, message: "All fields except image are required" });
    }
    const announcement = await Announcements.findOneAndUpdate(
      { id: req.params.id },
      { id, title, date, description, details, image },
      { new: true }
    );
    if (!announcement) {
      return res.status(404).json({ success: false, message: "Announcement not found" });
    }
    res.status(200).json({ success: true, announcement });
  } catch (error) {
    console.error("Update announcement error:", error);
    res.status(500).json({ success: false, message: "Failed to update announcement" });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Only admin can delete announcements" });
    }
    const announcement = await Announcements.findOneAndDelete({ id: req.params.id });
    if (!announcement) {
      return res.status(404).json({ success: false, message: "Announcement not found" });
    }
    res.status(200).json({ success: true, message: "Announcement deleted" });
  } catch (error) {
    console.error("Delete announcement error:", error);
    res.status(500).json({ success: false, message: "Failed to delete announcement" });
  }
};

module.exports = { createAnnouncement, getAnnouncements, updateAnnouncement, deleteAnnouncement };