import { useEffect } from "react"
import { useTask } from "../hooks/useTask"


const ParticularTask = () => {
  const {pDate,getParticularDate}=useTask()
  console.log(pDate)
  
  return (
    <div className="w-full bg-black flex justify-center">
      <div className=' mt-10 w-full max-w-3xl h-18 border flex justify-center items-center bg-linear-to-r from-black to-[#3B022B] rounded-lg'>
        <h1 className="text-2xl">{pDate.map((pdate)=>pdate.endDay)}</h1>
      </div>
    </div>
  )
}

export default ParticularTask
