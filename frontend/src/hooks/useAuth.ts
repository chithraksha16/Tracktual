import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, type RootState } from "../app/store"







const useAuth=()=>{
    const dispatch=useDispatch<AppDispatch>
    const {user,loading,error}=useSelector((state:RootState)=>state.authSlice)
}