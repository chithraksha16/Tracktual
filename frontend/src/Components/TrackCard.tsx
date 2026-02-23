import { IoMdTime } from "react-icons/io";
import { LuTags } from "react-icons/lu";
import { useState } from "react"


type TrackCardProps = {
  text: string
  wordLimit?: number
}

const TrackCard = ({ text, wordLimit = 5 }: TrackCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const displayText = isExpanded
    ? text
    : truncateWords(text, wordLimit)

  return (
    <div className="flex">
      <div
        className={`relative
          backdrop-blur-xl bg-radial-[at_50%_-10%] from-[#2E1339] from-19% to-black to-65%
          border-1 border-[#2E1339]
          rounded-lg
          shadow-2xl
          p-6 w-md sm:w-sm max-w-md text-white ${isExpanded ? `h-auto`:`h-44`}`}
      >
        <h1 className="sm:text-xl text-lg font-semibold ">
        <span>Frontend State Management</span>
        </h1>

      <div className={isExpanded ? ``:'flex items-center'}>
        <p className="text-white/70 mt-2  ">
          {displayText}
        

        {text.split(" ").length > wordLimit && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className=" text-sm text-blue-600 hover:underline font-medium"
          >
            {isExpanded ? "read less" : "read more"}
          </button>
        )}
        </p>
        </div>

        <div className="flex mt-2 px-2 gap-5">
          <h3 className="text-lg flex items-center gap-1.5"><IoMdTime size={20}/> <span>1hr 30min</span></h3>
          <h3 className="text-lg flex items-center gap-1.5"><LuTags size={20}/> <span>#coding</span></h3>
        </div>
        {/* <div className="mt-1">
          <button className="px-4 py-1 bg-red-800 text-white rounded">Delete</button>
        </div> */}
      </div>
    </div>
  )
}

const truncateWords = (text: string, wordLimit: number) => {
  const words = text.split(" ")
  return words.length <= wordLimit
    ? text
    : words.slice(0, wordLimit).join(" ") + "…"
}

export default TrackCard
