import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useTask } from "../hooks/useTask"

const ParticularTask = () => {

  const { date } = useParams()
  const { pDate, getParticularDate, } = useTask()

  useEffect(() => {
    if (date) {
      getParticularDate(date)
      console.log(pDate)
    }
  }, [date])

  const formatDisplayDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <>
    <div>
      <div className="flex justify-center">
      <div className="w-full max-w-2xl p-4 border rounded-lg bg-linear-to-r from-black to-[#3B022B] text-white flex justify-center items-center mt-10">
        <h1 className="text-xl sm:text-2xl ">
          Tasks for {date && formatDisplayDate(date)}
        </h1>
      </div>
      </div>


      <div className="flex  gap-5 mt-15">
        {pDate.map((pdates)=>pdates.entries.map((entries,idx)=>(
          <div key={idx} className="max-w-xs w-full h-48 px-10 border rounded-lg space-y-3 ">
            <h1 className="pt-4 text-md sm:text-2xl font-mono ">{entries.title}</h1>
            <p className="w-full sm:text-md text-sm ">{entries.description}</p>
            <div className="flex gap-10">
              <h3 className="text-xl"><span>{entries.hours}hr {entries.minutes}min</span></h3>
              <h3 className="text-xl"><span>#{entries.tag}</span></h3>
            </div>
            <div className="flex justify-end py-2">
              <button>delete</button>
            </div>
          </div>
        )))}

      </div>


    </div>
    </>
  )
}

export default ParticularTask