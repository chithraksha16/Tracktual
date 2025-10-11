import { TextAlignStart,X} from 'lucide-react'
import { useState } from 'react'
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  
  const handleOpen=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className="w-full ">
    <div className="">
    <div className=" flex justify-between items-center w-full px-10 py-2 bg-gradient-to-r to-blue-700">
      <h1>Tracktual</h1>
      <div className="sm:flex justify-between space-x-6 hidden ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Track</a>
      </div>
      <div className='flex sm:hidden justify-between' onClick={handleOpen}>
        {isOpen ? <X />: <TextAlignStart /> }
      </div>
    </div>
    <div className='absolute z-50 ' >
      /*todo sidebar and responsive */
      <div className='flex flex-col'>
      {isOpen && (
        <div className='sm:hidden flex flex-col justify-end'>
        <div className='flex text-base flex-col px-4'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Track</a>
        </div>
        </div>
    ) }
    </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
