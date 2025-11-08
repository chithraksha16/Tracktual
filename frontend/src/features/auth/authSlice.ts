import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL="http://localhost:5001/api"

 interface User{
        name:string;
        email:string;
        password:string;
 }
interface authState{
    user:User | null,
    token:string | null;
    loading:boolean,
    error:string | null,
}
const initialState:authState={
        user:null,
        token:localStorage.getItem("token") || null,
        loading:false,
        error:null

}

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    newUser: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(API_URL, newUser);

      // Example response: { token: "...", user: { name, email } }
      localStorage.setItem("token", res.data.token);

      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("https://example.com/api/login", credentials);

      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  }
);

  const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
      logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    },
    extraReducers: (builder) => {
    // Handle signup
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signupUser.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      ).addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });


       // Handle login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });


    }
  })

  export const { logout } = authSlice.actions;
export default authSlice.reducer;