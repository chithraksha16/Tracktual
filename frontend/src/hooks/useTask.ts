import { useDispatch, useSelector } from "react-redux"
import  {type AppDispatch, type RootState } from "../app/store"
import { useCallback } from "react"
import { setError, setLoading,addTask, setTask,deleteTask } from "../Redux/trackSlice"
import { taskAPI } from "../services/api"







export const useTask=()=>{
    const dispatch=useDispatch<AppDispatch>()
    const {item,loading,error,block}=useSelector((state:RootState)=>state.task)



    const addTaskItem=useCallback(
        async(data:{title:string,
        description:string,
        duration:number,
        tag:string})=>{
            dispatch(setLoading(true))
            try{
                const response= await taskAPI.postTask(data)
                dispatch(addTask(response.data))
                return response.data
            }
            catch(err:any){
                const errMsg=err.response?.data?.message || "Failed to add task"
                dispatch(setError(errMsg))
                throw err
            }
            finally{
                dispatch(setLoading(false))
            }
            },
            [dispatch]
        )

    const deleteTaskItem=useCallback(async(id:string)=>{
        dispatch(setLoading(true))
        try{
            await taskAPI.deleteTask(id)
            dispatch(deleteTask(id))
        }
        catch(err:any){
            const errorMsg =
            err.response?.data?.message || 'Failed to delete task';
        dispatch(setError(errorMsg));
        }
    },[dispatch])


    const getDayTasks=useCallback(async()=>{
        dispatch(setLoading(true))
        try{
            const response=await taskAPI.getDayTask()
            dispatch(setTask(response.data.task))
            return response.data.task
        }
        catch(err:any){
            const errMsg=err.response?.data?.message || "Fetching task Failed"
            dispatch(setError(errMsg))
            throw err

        }
    },[dispatch])


    return {item,loading,error,block,addTaskItem,deleteTaskItem,getDayTasks}

}