import { useEffect } from 'react'
import { useTask } from '../hooks/useTask'
import { CalendarArrowDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { block, getAllTask } = useTask()
  const navigate = useNavigate()

  useEffect(() => {
    getAllTask()
  }, [])

  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
  }

  const handleParticularTask = (date: string) => {
    navigate(`/taskall/${date}`)
  }

  return (
    <div className='w-full'>
      <div className="w-full flex flex-col justify-between p-2">

        <div className="w-full p-4 sm:p-6 space-y-2">
          <h1 className="sm:text-2xl text-xl text-center">Track Your Daily Work</h1>
          <p className="text-center text-sm">Keep track to stay focused and productive.</p>
        </div>

        <div className='flex flex-col sm:p-10  p-2'>

          <div className='flex items-center gap-3'>
            <h1 className='text-lg sm:text-2xl'>Calendar Timeline</h1>
            <CalendarArrowDown size={18} />
          </div>

          <div className='mt-5 flex flex-wrap justify-center sm:justify-start gap-5'>

            {block?.map((blocks, idx) => (
              <button
                key={idx}
                onClick={() =>
                  handleParticularTask(
                    formatDate(new Date(blocks.endDay))
                  )
                }
              >
                <div className='w-32 h-20 border rounded-lg flex justify-center items-center bg-linear-to-r from-black to-[#3B022B] text-white'>
                  {new Date(blocks.startDay).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })}
                </div>
              </button>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home