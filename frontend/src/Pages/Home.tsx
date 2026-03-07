import { useEffect } from 'react'
import { useTask } from '../hooks/useTask'
import {CalendarArrowDown} from 'lucide-react'

const Home = () => {

  const {item,getDayTasks}=useTask()

  useEffect(() => {
    getDayTasks()
  }, [getDayTasks])

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

              {item?.map((items)=>(
              
                  <div key={items._id} className='max-w-md h-44 border rounded-lg bg-linear-to-br from-25% from-[#000] to-80% to-[#3B022B]'>
                  <h1>{items.title}</h1>
                  </div>
                
              ))}
            </div>

          </div>
        

        
        

        
      
    </div>
    
    </div>
  )
}

export default Home
