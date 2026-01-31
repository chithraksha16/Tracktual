import {  useState } from "react"
import {useAuth} from '../hooks/useAuth'



const Signup = () => {

interface formVaribale{
  name:string,
  email:string,
  password:string
}

const [formState,setFormState]=useState<formVaribale>({
  name:"",
  email:"",
  password:""
})

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const {name,value}=e.target;
  setFormState(prev=>({
    ...prev,
    [name]:value
  }))

}

  const {register}=useAuth();


  const handleSubmit=async(e:React.FormEvent):Promise<void>=>{
      e.preventDefault();
      try{
      await register(formState)
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
        <h1 className="text-lg font-medium">Create a account</h1>
        <p className="text-xs">Sign up to start your journey with Tracktual.</p>
      </div>
      <div className="flex flex-col px-4 gap-2">
        <label htmlFor="name1">Name:</label>
        <input
        onChange={handleChange}
        value={formState.name}
        className="w-full border border-gray-500 rounded placeholder:px-2 px-2" type="text" name="name" id="name1" placeholder="Jhon Doe"  />
      </div>
      <div className="flex flex-col px-4  gap-2">
        <label htmlFor="email1">Email:</label>
        <input
        onChange={handleChange}
        value={formState.email}
        className="w-full border border-gray-500 rounded placeholder:px-2 px-2"  type="email" name="email" id="email1" placeholder="ex:jhondoe@gmail.com"  />
      </div>
      <div className="flex flex-col px-4  gap-2">
        <label htmlFor="password1">Password:</label>
        <input
        onChange={handleChange}
        value={formState.password}
        className="w-full border border-gray-500 rounded placeholder:px-2 px-2" type="password" name="password" id="password1" placeholder="*************" />
      </div>
      <div className="flex justify-center py-3 w-full px-4">
        <button className="w-full py-0.5 bg-blue-600 rounded">Signup</button>
      </div>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Signup
