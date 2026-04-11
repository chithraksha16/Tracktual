import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useTask } from "../hooks/useTask"

const ParticularTask = () => {

  const { date } = useParams()
  const { pDate, getParticularDate } = useTask()

  useEffect(() => {
    if (date) {
      getParticularDate(date)
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
      <div className="w-full max-w-2xl p-4 border rounded-lg bg-black text-white">

        <h1 className="text-xl sm:text-2xl text-center mb-4">
          Tasks for {date && formatDisplayDate(date)}
        </h1>

        {pDate?.length === 0 ? (
          <p className="text-center">No tasks found</p>
        ) : (
          pDate?.map((task, idx) => (
            <div key={idx} className="border-b py-2">
              {task.endDay}
            </div>
          ))
        )}

      </div>
    </div>
  )
}

export default ParticularTask