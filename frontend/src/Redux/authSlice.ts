import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



interface User{
  _id:string,
  name:string,
  email:string
}

interface AuthState{
  user:User | null,
  loading:boolean
  error:string | null
}

const initialState:AuthState={
    user:null,
    loading:true,
    error:null
}


const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
    setLoading:(state,action:PayloadAction<boolean>)=>{
      state.loading=action.payload
    },
    setError:(state,action:PayloadAction<string>)=>{
      state.error=action.payload
    },
    setUser:(state,action:PayloadAction<User>)=>{
      state.user=action.payload
    },
    clearUser:(state)=>{
      state.user=null,
      state.error=null
    },  
    clearError:(state)=>{
      state.error=null
    }
  }
})


export const {
  setLoading,
  setError,
  setUser,
  clearError,
  clearUser
}=authSlice.actions;

export default authSlice.reducer;