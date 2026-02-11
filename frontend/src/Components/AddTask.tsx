const AddTask = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm border w-full p-10 rounded-lg">
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
        className="border w-full rounded px-2"
        name="" id=""></textarea>     
        </div>
      <div className="flex flex-col space-y-1 ">
        <label htmlFor="">Duartion:</label>
        <input
        className="border w-full rounded p-2"
        type="number" placeholder="..." />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="">Tag:</label>
        <input
        className="border w-full rounded p-2"
        type="text" />
      </div>
      </div>
      <div className="flex justify-center mt-3 p-2">
        <button>ADD</button>
      </div>

      </div>
      </div>
    </>
  )
}

export default AddTask
