import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; 

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, userData);
      console.log("Register response:", response.data);
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Registration failed";
      console.error("Register error:", errorMsg, error);
      return rejectWithValue({ message: errorMsg });
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
      const { token, user } = response.data;
      console.log("Login response:", { token, user });
      sessionStorage.setItem("token", token);
      return { token, user: { ...user, role: user.role || "user" } };
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Login failed";
      console.error("Login error:", errorMsg, error);
      sessionStorage.removeItem("token");
      return rejectWithValue({ message: errorMsg });
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {}, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      });
      sessionStorage.removeItem("token");
      console.log("Logout successful");
      return {};
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Logout failed";
      console.error("Logout error:", errorMsg, error);
      sessionStorage.removeItem("token");
      return rejectWithValue({ message: errorMsg });
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.log("checkAuth: No token found");
      return rejectWithValue({ message: "No token found" });
    }
    try {
      const response = await axios.get(`${API_URL}/api/auth/check-auth`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("checkAuth response:", response.data);
      return { token, user: response.data.user };
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Authentication failed";
      console.error("checkAuth error:", errorMsg, error);
      sessionStorage.removeItem("token");
      return rejectWithValue({ message: errorMsg });
    }
  }
);

const initialState = {
  user: null,
  token: sessionStorage.getItem("token") || null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = action.payload.message;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = action.payload.message;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;