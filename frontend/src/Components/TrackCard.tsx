import { IoMdTime } from "react-icons/io";
import { LuTags } from "react-icons/lu";
import { useState } from "react"
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowLongRight } from "react-icons/hi2";

type TrackCardProps = {
  text: string
  wordLimit?: number
}

const TrackCard = ({ text, wordLimit = 6 }: TrackCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const displayText = isExpanded
    ? text
    : truncateWords(text, wordLimit)

  return (
    <div className="flex">
      <div
        className={`relative
          backdrop-blur-xl bg-radial-[at_50%_-10%] from-[#1b0b23] from-19% to-black to-65%
          border-1 border-[#2E1339]
          rounded-2xl
          shadow-2xl
          p-6 w-md sm:w-sm max-w-md text-white ${isExpanded ? `h-auto`:`h-44`}`}
      >
        <div className="flex justify-end space-y-3">
        <div className="text-white flex "><PiStarFourFill className="drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]" size={16}/> <PiStarFourFill className="mt-3 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]" size={9}/></div>
        </div>
        <h1 className="sm:text-lg text-md font-Inter font-semibold tracking-wide ">
        <span>Frontend State Management</span>
        </h1>

      <div className={isExpanded ? ``:'flex items-center'}>
        <p className="text-white/70 font-medium text-sm font-Inter mt-2  ">
          {displayText}
        

        {text.split(" ").length > wordLimit && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className=" text-sm text-blue-600 hover:underline font-medium"
          >
            {isExpanded ? " read less" : " read more"}
          </button>
        )}
        </p>
        </div>

        <div className="flex mt-3  gap-10">
          <h3 className="text-md flex font-Inter items-center gap-1.5"><IoMdTime size={20}/> <span>1hr 30min</span></h3>
          <h3 className="text-md flex font-Inter  items-center gap-1.5"><LuTags size={20}/> <span>#coding</span></h3>
        </div>
        <div className=" flex justify-end">
          <button className=" font-extralight flex  items-center gap-2 drop-shadow-[0_3px_4px_rgba(255,255,255,0.2)]"><HiArrowLongRight/> <span className="text-xs">Delete</span></button>
        </div>
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
