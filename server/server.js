const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth/index.js");
const announcementRoute = require("./routes/admin-routes/announcements/index.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((error) => console.log(error));

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    credentials: true,
  })
);

// for authentication
app.use("/api/auth", authRoute);
// for announcements
app.use("/api/announcements", announcementRoute);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));