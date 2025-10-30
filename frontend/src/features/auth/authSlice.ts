import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
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

  const auth=createSlice({
    name:"auth",
    initialState,
    reducers:{
        

    }
  })