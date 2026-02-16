import { TextAlignStart,X} from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { VscGraph } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const {user,logout}=useAuth()
  const handleOpen=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className="w-full ">
    <div className="">
    <div className=" flex justify-between items-center w-full px-10 py-2 bg-gradient-to-r to-blue-700">
      <h1>Tracktual</h1>
      {user?(
      <div className="sm:flex justify-between space-x-6 hidden ">
        <Link to='/' className='flex gap-2 items-center'><IoHomeOutline size={15}/>Home </Link>
        <Link to='track' className='flex gap-2 items-center'><VscGraph size={15}/>Track</Link>
        <div>
          <button onClick={logout} className='flex gap-2 items-center'><MdLogout size={15}/>Logout</button>
        </div>
      </div>
      ):("")
}
    {user?(
      <div className='flex sm:hidden justify-between' onClick={handleOpen}>
        {isOpen ? <X />: <TextAlignStart /> }
      </div>
      ):("")}
    </div>

    {user?(
    <div className='absolute  z-50 flex  ' >
      <div className='flex flex-col'>
      {isOpen && (
        <div className=' relative inset-0 z-50 sm:hidden flex flex-col justify-end'>
        <div className='flex text-base flex-col gap-10 px-15 py-10 bg-gradient-to-tr from-blue-900 to-70% to-gray-900 w-full h-screen'>
        <Link to='/' className='flex gap-2 items-center'><IoHomeOutline size={15}/>Home</Link> 
        <Link to='/track' className='flex gap-2 items-center'><VscGraph size={15}/>Track</Link>
        <div>
          <button onClick={logout} className='flex gap-2 items-center'><MdLogout size={15}/>Logout</button>
        </div>
        </div>
        </div>
    ) }
    </div>
    </div>
    ):("")}
    </div>
    </div>
    </>
  )
}

export default Navbar
