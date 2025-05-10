import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchEvents = createAsyncThunk("events/fetch", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/api/events`);
    return response.data.events;
  } catch (error) {
    const msg = error.response?.data?.message || "Failed to fetch events";
    return rejectWithValue(msg);
  }
});

export const createEvent = createAsyncThunk("events/create", async (eventData, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem("token");
    const formData = new FormData();
    for (const key in eventData) {
      formData.append(key, eventData[key]);
    }
    const response = await axios.post(`${API_URL}/api/events`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.event;
  } catch (error) {
    const msg = error.response?.data?.message || "Failed to create event";
    return rejectWithValue(msg);
  }
});



const eventSlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetEventError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetEventError } = eventSlice.actions;
export default eventSlice.reducer;
