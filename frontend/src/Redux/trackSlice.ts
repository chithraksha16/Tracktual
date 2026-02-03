import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface Task{
    _id:string,
    title:string,
    description:string,
    duration:number,
    tag:string
}

interface Day{
    startDay:string,
    endDay:string,
    entries:Task[]
}

interface TaskState{
    item:Task[],
    block:Day[],
    loading:boolean,
    error:string | null
}


const initialState:TaskState={
    item:[],
    block:[],
    loading:false,
    error:null
}

const trackSlice=createSlice({
    name:"track",
    initialState,
    reducers:{
        setLoading:(state,action:PayloadAction<boolean>)=>{
            state.loading=action.payload;
        },
        setError:(state,action:PayloadAction<string>)=>{
            state.error=action.payload;
        },
        setTask:(state,action:PayloadAction<{data:Task[]}>)=>{
            state.item=action.payload.data;
            state.loading=false;
            state.error=null;
        },
        setDay:(state,action:PayloadAction<Day>)=>{
            state.block.push(action.payload);
        },
        addTask:(state,action:PayloadAction<Task>)=>{
            state.item.unshift(action.payload)
        },
        deleteTask:(state,action:PayloadAction<string>)=>{
            state.item=state.item.filter((t)=>t._id !== action.payload)
        },
        clearError:(state)=>{
            state.error=null;
        }

//    setDay: (state, action: PayloadAction<Day>) => {
//   const index = state.block.findIndex(
//     day => day.startDay === action.payload.startDay
//   )

//   if (index !== -1) {
//     // update existing day
//     state.block[index] = action.payload
//   } else {
//     // first task of that day
//     state.block.push(action.payload)
//   }
// }

    }  
})


export const {
    setLoading,
    setError,
    setTask,
    setDay,
    addTask,
    deleteTask,
    clearError}=trackSlice.actions

export default trackSlice.reducer