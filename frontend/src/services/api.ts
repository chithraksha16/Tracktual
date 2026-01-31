import axios from "axios";
import { getToken, removeToken } from "../lib/auth";


const API_URL='http://localhost:5001/api';

const api=axios.create({
    baseURL:API_URL,
    withCredentials:true
})



api.interceptors.request.use((config)=>{
    const token=getToken();
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
},
(error)=>Promise.reject(error)
);


api.interceptors.response.use(
    (response)=> response,
    (error)=>{
        if(error.response?.status === '401'){
            removeToken()
            window.location.href='/login'
        }
        return Promise.reject(error)
    }
);


export const authAPI={
register:(data:{
    name:string,
    email:string,
    password:string
})=>api.post('/auth/signup',data),
login:(data:{
    email:string,
    password:string
})=>api.post('/auth/login',data),
checkAuth:()=>api.get('/auth/checkAuth')
}




export default api;