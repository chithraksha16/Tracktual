import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useTask } from "../hooks/useTask"
import { FaArrowRightLong } from "react-icons/fa6";
import { MdAvTimer } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";

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
  
  const checkHashtag: (str: string) => string = (str) => {
  if (!str) return "";
  return str.startsWith("#") ? str : `#${str}`;
};
  

  const capitalizeFirst=(str:string)=>{
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
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


      <div className="flex flex-wrap sm:justify-start justify-center  sm:px-20 px-2 gap-5 mt-15">
        {pDate.map((pdates)=>pdates.entries.map((entries,idx)=>(
          <div key={idx} className="sm:w-sm  w-full h-48 px-10 border rounded-3xl space-y-3 ">
            <h1 className="pt-4 text-lg sm:text-2xl font-mono ">{capitalizeFirst(entries.title)}</h1>
            <p className="w-full sm:text-md text-sm ">{capitalizeFirst(entries.description)}</p>
            <div className="flex gap-10 ml-[-2]">
              <h3 className="text-xl flex justify-center items-center gap-2"><MdAvTimer size={23} /><span className="flex">{entries.hours}hr {"  "} {entries.minutes} min</span></h3>
              <h3 className="text-xl flex justify-center items-center gap-2"><IoPricetagsOutline /><span>{checkHashtag(entries.tag)}</span></h3>
            </div>
            <div className="flex justify-end items-end  mt-8">
              <div className="flex justify-center items-center gap-2">
              <button>Delete </button>
              <span className="mt-1 text-[#bbb5b5]"><FaArrowRightLong size={15} /></span>
              </div>
            </div>
          </div>
        )))}

      </div>


    </div>
    </>
  )
}

export default ParticularTask