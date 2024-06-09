import { useState } from "react";
import IconButton from "./IconButton";

export default function Task({
  taskLabel,
  taskPriority,
  taskDate,
  taskID,
  handleDeleteTask,
}) {
  const [checked, setIsChecked] = useState(false);
  const currentTask = {
    taskLabel: taskLabel,
    taskPriority: taskPriority,
    taskDate: taskDate,
  };

  return (
    <div className="flex bg-text-950 rounded-lg p-3 items-center justify-between">
      <div className="flex items-center justify-center gap-5">
        <input type="checkbox" name="taskCheck" id="" className="h-5 w-5" />
        <div>
          <label htmlFor="taskCheck" className="font-semibold text-xl">
            {taskLabel}
          </label>
          <p>{taskDate}</p>
        </div>
        <div className=" border-l px-2">
          <h3 className=" font-bold text-xl text-accent-400 ">Priority:</h3>
          <p className="font-semibold">{taskPriority}</p>
        </div>
      </div>

      <div className="flex gap-5">
        <IconButton
          currentTask={currentTask}
          handleDeleteTask={handleDeleteTask}
        >
          ✖
        </IconButton>
      </div>
    </div>
  );
}
