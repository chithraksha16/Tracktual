import { useEffect } from 'react'
import { useTask } from '../hooks/useTask'
import {CalendarArrowDown} from 'lucide-react'
import { useParams } from 'react-router-dom'
const Home = () => {
  const pathParams=useParams()

  const {block,getAllTask,getParticularDate}=useTask()

  useEffect(() => {
    
    getAllTask()
  }, [getAllTask])


  const handleParticularTask=async(date:string)=>{
    try{
        await getParticularDate(date)
    }
    catch(err:any){
    console.error("Failed to load particular task",err)
    }

  }

  return (
    <div className='w-full'>
    <div className=" w-full flex flex-col justify-between p-2">
        <div className="w-full p-4 sm:p-6 space-y-2">
          
          <h1 className="sm:text-2xl text-xl font-ADLaMDisplay text-center">Track Your Daily Work</h1>
          <p className="sm:text-base md:text-sm text-[12px] font-mono text-center px-2">Keep track to stay focused and productive.</p>
        </div>


        
          

          <div className='w-full '>
            <div className='flex flex-col sm:p-8 p-2'>

              <div className='flex items-center gap-3'>
            <h1 className='sm:text-2xl text-lg '>Calendar Timeline</h1>
            <CalendarArrowDown size={18} className='stroke-2' />
              </div>
              <div className='sm:px-5   mt-5 flex  justify-center sm:justify-normal  gap-5 sm:gap-10 flex-wrap'>
              {block?.map((blocks,idx)=>(
                <button key={idx} className='cursor-auto' type='submit' onClick={()=>handleParticularTask(new Date(blocks.endDay).toLocaleDateString("en-IN",{
                  day: "numeric",
                  month: "numeric",
                  year: "numeric"
                }))}>
                  <div  className='sm:w-40 sm:h-24 md:w-32 md:h-20 w-32 h-20  border rounded-lg bg-linear-to-br from-25% from-[#000] to-80% to-[#3B022B] flex justify-center items-center space-y-2 '>
                  
                  <h1 className='text-white sm:text-xl text-lg '>{new Date(blocks.startDay).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                })}
                </h1>
                  </div>
                  </button>
                  
                  
              ))}
              </div>
            </div>

          </div>
        

        
        

        
      
    </div>
    
    </div>
  )
}

export default Home
