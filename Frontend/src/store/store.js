import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index.js";
import announcementReducer from "./admin-slice/announcementSlice.js";
import userReducer from "./admin-slice/userMgtSlice/index.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    announcements: announcementReducer
  },
});