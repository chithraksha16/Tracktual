import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
const Login = () => {
  interface formVaribale{
    email:string,
    password:string
  }

  const [formData,setFormData]=useState<formVaribale>({
    email:"",
    password:""
  })


  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormData(prev=>({
      ...prev,
    [name]:value
    }))

  }


  const {login}=useAuth();
  const handleSubmit=async(e:React.FormEvent):Promise<void>=>{
    e.preventDefault();
     try{
      await login(formData);
      setFormData({
        email:"",
        password:""
      })
      }
      catch(err:any){
        console.error(err.response?.data)
      }

  }

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className='max-w-xs w-full border p-5 rounded-lg'>
      <form onSubmit={handleSubmit}>
      <div className="space-y-2">
      <div className="text-center p-3 ">
        <h1 className="text-lg font-medium">Welcome Back</h1>
        <p className="text-xs">Login to continue your journey with Tracktual.</p>
      </div>
      <div className="flex flex-col px-4  gap-2">
        <label htmlFor="email1">Email:</label>
        <input
        onChange={handleChange}
        value={formData.email}
        className="w-full border border-gray-500 rounded placeholder:px-2 text-md px-2"  type="email" name="email" id="email1" placeholder="ex:jhon@gmail.com" required />
      </div>
      <div className="flex flex-col px-4  gap-2">
        <label htmlFor="password1">Password:</label>
        <input
        onChange={handleChange}
        value={formData.password}
        className="w-full border border-gray-500 rounded placeholder:px-2 px-2" type="password" name="password" id="password1" placeholder="**********" required/>
      </div>
      <div className="flex justify-center w-full px-4 py-3">
        <button className=" w-full py-0.5 bg-blue-600 rounded">Login</button>
      </div>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Login
