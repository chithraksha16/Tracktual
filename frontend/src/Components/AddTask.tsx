const AddTask = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm border w-full p-10 rounded-lg bg-radial-[at_90%_10%] from-20% from-gray-900 to-black">
      <h1 className="text-center text-xl p-3">Add Task</h1>
      <div className="space-y-3">
      <div className="flex flex-col space-y-1">
        <label htmlFor="">Title:</label>
        <input
        className="border w-full rounded p-2"
        type="text" placeholder="Eg:Coding" />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="">Description:</label>
        <textarea
        rows={4}
        className="border w-full rounded px-2"
        name="" id=""></textarea>     
        </div>
        <div className="flex gap-2">
      <div className="flex flex-col space-y-1 ">
        <label htmlFor="">Hours:</label>
        <div className="flex items-center gap-1">
        <input
        min={0}
        max={23}
        inputMode="numeric"
        className="border w-full rounded p-2 no-spinner"
        type="number" placeholder="00" />
        <p className="text-lg font-mono">hr</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1 ">
        <label htmlFor="">Minutes:</label>
        <div className="flex items-center gap-1">
        <input
        min={0}
        max={59}
        inputMode="numeric"
        className="border w-full rounded p-2 no-spinner"
        type="number" placeholder="00" />
        <p className="text-lg font-mono">min</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="">Tag:</label>
        <input
        className="border w-full rounded p-2"
        type="text" />
      </div>
      </div>
      
      </div>
      <div className="flex justify-center mt-3 p-2">
        <button className="w-full py-1.5 border rounded bg-linear-to-r from-gray-950 to-cyan-950  hover:bg-linear-to-r hover:from-cyan-950 hover:to-gray-950">ADD</button>
      </div>

      </div>
      </div>
    </>
  )
}

export default AddTask
