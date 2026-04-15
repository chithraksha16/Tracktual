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
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-2xl p-4 border rounded-lg bg-linear-to-r from-black to-[#3B022B] text-white flex justify-center items-center">

        <h1 className="text-xl sm:text-2xl ">
          Tasks for {date && formatDisplayDate(date)}
        </h1>
      </div>
      {pDate.map((pdates,idx)=>(
        <div key={idx}>
        {pdates.entries.map((entries,idx)=>(
          <div key={idx}>
          <h1>{entries.title}</h1>
          </div>
        ))}
        </div>
      ))}
    </div>
  )
}

export default ParticularTask