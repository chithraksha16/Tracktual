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
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-se-[40px] rounded-lg
          shadow-2xl
          p-6 w-md sm:w-sm max-w-md text-white ${isExpanded ? `h-auto`:`h-36`}`}
      >
        <h1 className="sm:text-xl text-lg font-semibold">
          Frontend State Management
        </h1>

      <div className={isExpanded ? ``:'flex items-center'}>
        <p className="text-white/70 mt-2 ">
          {displayText}
        

        {text.split(" ").length > wordLimit && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className=" text-sm text-blue-600 hover:underline font-medium"
          >
            {isExpanded ? "less" : "more"}
          </button>
        )}
        </p>
        </div>

        <div className="flex mt-2 px-2 gap-5">
          <h3 className="text-lg">Duration: 1hr 30min</h3>
          <h3 className="text-lg">#coding</h3>
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
