import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index.js";
import eventReducer from "./admin-slice/events-slice/index.js";
import announcementReducer from "./admin-slice/announcementSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
    announcements: announcementReducer
  },
});