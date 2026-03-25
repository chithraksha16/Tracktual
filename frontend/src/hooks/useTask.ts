import { useDispatch, useSelector } from "react-redux"
import  {type AppDispatch, type RootState } from "../app/store"
import { useCallback } from "react"
import { setError, setLoading,addTask, setTask,setDay,deleteTask, setParticularDate } from "../Redux/trackSlice"
import { taskAPI } from "../services/api"







export const useTask=()=>{
    const dispatch=useDispatch<AppDispatch>()
    const {item,loading,error,block}=useSelector((state:RootState)=>state.task)



    const addTaskItem=useCallback(
        async(data:{title:string,
        description:string,
        hours:number,
        minutes:number,
        tag:string})=>{
            dispatch(setLoading(true))
            try{
                const response= await taskAPI.postTask({...data, hours: Number(data.hours),
  minutes: Number(data.minutes)})
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
        finally{
            dispatch(setLoading(false))
        }
    },[dispatch])


    const getDayTasks=useCallback(async()=>{
        dispatch(setLoading(true))
        try{
            const response=await taskAPI.getDayTask()
            console.log("API response:", response.data)
            // dispatch(setTask(response.data.day.entries))
            // return response.data.day.entries
        }
        catch(err:any){
            const errMsg=err.response?.data?.message || "Fetching task Failed"
            dispatch(setError(errMsg))
            throw err
        }
        finally{
            dispatch(setLoading(false))
        }
    },[dispatch])


    const getAllTask=useCallback(async()=>{
        dispatch(setLoading(true))
        try{
            const response=await taskAPI.getAllTask()
            console.log(response.data)
            dispatch(setDay(response.data))
            dispatch(setTask(response.data))
            return response.data
        }
        catch(err:any){
            const errMsg=err.response?.data?.message || "Failed to fetch task"
            dispatch(setError(errMsg))
        }
        finally{
            dispatch(setLoading(false))
        }

    },
    [dispatch]
)

const getParticularDate=useCallback(async()=>{
    dispatch(setLoading(true))
    try{
        const response= await taskAPI.getParticularDate()
        console.log(response.data)
        dispatch(setParticularDate(response.data))
        return response.data
    }
    catch(err:any){
        const errMsg=err.response?.data?.message || "Failed fetch Particular Task"
        dispatch(setError(errMsg))
    }
    finally{
        dispatch(setLoading(false))
    }

},[dispatch])


    return {item,loading,error,block,addTaskItem,deleteTaskItem,getDayTasks,getAllTask,getParticularDate}

}