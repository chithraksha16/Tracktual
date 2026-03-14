import { useEffect } from 'react'
import { useTask } from '../hooks/useTask'
import {CalendarArrowDown} from 'lucide-react'

const Home = () => {

  const {item,block,getAllTask}=useTask()

  useEffect(() => {
    
    getAllTask()
  }, [getAllTask])

  return (
    <div className='w-full'>
    <div className=" w-full flex flex-col justify-between p-2">
        <div className="w-full p-4 sm:p-6 space-y-2">
          
          <h1 className="sm:text-2xl text-xl font-ADLaMDisplay text-center">Track Your Daily Work</h1>
          <p className="sm:text-base text-sm font-mono text-center px-2">Keep track to stay focused and productive.</p>
        </div>


        {/* <p className=' sm:text-2xl text-lg font-bold'>Welcome back <span className='text-blue-400'>{user?.name}..!</span></p> */}
      
          

          <div className='w-full '>
            <div className='flex flex-col sm:p-10 p-7'>

              <div className='flex items-center gap-3'>
            <h1 className='sm:text-2xl text-lg '>Calendar Timeline</h1>
            <CalendarArrowDown size={18} className='stroke-2' />
              </div>
<div className=' mt-5 flex  gap-10'>
              {block?.map((blocks,idx)=>(
                
                  <div key={idx} className='w-full h-44 border rounded-lg bg-linear-to-br from-25% from-[#000] to-80% to-[#3B022B] flex justify-center items-center space-y-2'>
                  <h1 className='text-white sm:text-2xl text-xl '>{new Date(blocks.startDay).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })}</h1>
                  </div>
                  
                
              ))}
              </div>
            </div>

          </div>
        

        
        

        
      
    </div>
    
    </div>
  )
}

export default Home
