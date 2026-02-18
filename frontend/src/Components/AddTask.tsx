import { useState } from "react";
import { useTask } from "../hooks/useTask";

interface Formvariable {
  title: string;
  description: string;
  hours: number;
  minutes: number;
  tag: string;
}

const AddTask = () => {
  const [formData, setFormData] = useState<Formvariable>({
    title: "",
    description: "",
    hours: 0,
    minutes: 0,
    tag: ""
  });

  const { addTaskItem } = useTask();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]:
        name === "hours" || name === "minutes"
          ? Number(value)
          : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addTaskItem(formData);
      setFormData({
        title:"",
        description:"",
        hours:0,
        minutes:0,
        tag:""
      })
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm border w-full p-10 rounded-lg bg-radial-[at_90%_10%] from-20% from-gray-900 to-black">
        <h1 className="text-center text-xl p-3">Add Task</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          
          {/* Title */}
          <div className="flex flex-col space-y-1">
            <label>Title:</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border w-full rounded p-2"
              type="text"
              placeholder="Eg: Coding"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-1">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="border w-full rounded px-2"
            />
          </div>

          {/* Hours & Minutes */}
          <div className="flex gap-2">

            <div className="flex flex-col space-y-1">
              <label>Hours:</label>
              <div className="flex items-center gap-1">
                <input
                  name="hours"
                  type="number"
                  min={0}
                  max={23}
                  value={formData.hours}
                  onChange={handleChange}
                  className="border w-full rounded p-2 no-spinner"
                  placeholder="00"
                />
                <p className="text-lg font-mono">hr</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label>Minutes:</label>
              <div className="flex items-center gap-1">
                <input
                  name="minutes"
                  type="number"
                  min={0}
                  max={59}
                  value={formData.minutes}
                  onChange={handleChange}
                  className="border w-full rounded p-2 no-spinner"
                  placeholder="00"
                />
                <p className="text-lg font-mono">min</p>
              </div>
            </div>

            {/* Tag */}
            <div className="flex flex-col space-y-1">
              <label>Tag:</label>
              <input
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                className="border w-full rounded p-2"
                type="text"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="w-full py-1.5 border rounded bg-gradient-to-r from-gray-950 to-cyan-950 hover:from-cyan-950 hover:to-gray-950"
            >
              ADD
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTask;
