import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/announcements`);
      return response.data.announcements;
    } catch (error) {
      const msg = error.response?.data?.message || "Failed to fetch announcements";
      return rejectWithValue(msg);
    }
  }
);

export const createAnnouncement = createAsyncThunk(
  "announcements/create",
  async (announcementData, { rejectWithValue }) => {
    try {
      const token = sessionStorage.getItem("token");
      const formData = new FormData();
      for (const key in announcementData) {
        formData.append(key, announcementData[key]);
      }
      const response = await axios.post(`${API_URL}/api/announcements`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.announcement;
    } catch (error) {
      const msg = error.response?.data?.message || "Failed to create announcement";
      return rejectWithValue(msg);
    }
  }
);

export const updateAnnouncement = createAsyncThunk(
  "announcements/update",
  async (announcementData, { rejectWithValue }) => {
    try {
      const token = sessionStorage.getItem("token");
      const formData = new FormData();
      for (const key in announcementData) {
        formData.append(key, announcementData[key]);
      }
      const response = await axios.put(
        `${API_URL}/api/announcements/${announcementData.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.announcement;
    } catch (error) {
      const msg = error.response?.data?.message || "Failed to update announcement";
      return rejectWithValue(msg);
    }
  }
);

export const deleteAnnouncement = createAsyncThunk(
  "announcements/delete",
  async (id, { rejectWithValue }) => {
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`${API_URL}/api/announcements/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id;
    } catch (error) {
      const msg = error.response?.data?.message || "Failed to delete announcement";
      return rejectWithValue(msg);
    }
  }
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetAnnouncementError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createAnnouncement.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(createAnnouncement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAnnouncement.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateAnnouncement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteAnnouncement.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteAnnouncement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAnnouncementError } = announcementSlice.actions;
export default announcementSlice.reducer;