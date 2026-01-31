import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../app/store"
import { useCallback } from "react"
import { setError, setLoading, setUser } from "../Redux/authSlice"
import { authAPI } from "../services/api"
import { setToken } from "../lib/auth"







export const useAuth=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const {user,loading,error}=useSelector((state:RootState)=>state.auth)



    const register=useCallback(
    async(data:{
        name:string,
        email:string,
        password:string
    })=>{
        dispatch(setLoading(true));
        try{
        const response= await authAPI.register(data)
        setToken(response.data.token)
        dispatch(setUser(response.data.user));
        return response.data
        }
        catch(err:any){
            const errMsg=err.response?.data?.message ||"Registration Failed";
            dispatch(setError(errMsg))
            throw err
        }
        finally{
            dispatch(setLoading(false))
        }
    },
[dispatch]
)


const login=useCallback(
    async(data:{email:string,password:string})=>{
        dispatch(setLoading(true))
        try{
            const response= await authAPI.login(data)
            setToken(response.data.token)
            dispatch(setUser(response.data.user))
        }
        catch(err:any){
            const errMsg=err.response?.data?.message ||"Login failed";
            dispatch(setError(errMsg))
            throw err
        }
        finally{
            dispatch(setLoading(false))
        }
    },[dispatch])


    const checkAuthenticated=useCallback(async()=>{
        dispatch(setLoading(true))
        try{
            const response= await authAPI.checkAuth()
            dispatch(setUser(response.data))
            return response.data
        }
        catch(err:any){
            const errMsg=err.response?.data?.message || "failed to fetch user";
            dispatch(setError(errMsg))
            throw err;
            
        }
        finally{
            dispatch(setLoading(false))

        }
    },[dispatch])



return {user,loading,error,register,login,checkAuthenticated}

}