import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Redux/authSlice'
import taskSlice from '../Redux/trackSlice'

export const store=configureStore({
    reducer:{
auth:authSlice,
task:taskSlice
    }
})



export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch