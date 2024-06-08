import { useState } from "react";

export default function AddNewTask() {
  const [newTaskValue, setNewTaskValue] = useState("");

  return (
    <div className="flex gap-10 p-4 px-10 bg-accent-900 rounded-lg border border-black justify-between items-center">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label htmlFor="" className="font-medium">
            Task Label
          </label>
          <input type="text" className="p-3 rounded-lg bg-white" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="font-medium">
            Task Priority
          </label>
          <select
            name=""
            id=""
            className="p-3 bg-white font-semibold rounded-lg"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>

      <button className="w-1/3 p-3 bg-primary-500 font-semibold text-text-950 rounded-lg">
        Add
      </button>
    </div>
  );
}
