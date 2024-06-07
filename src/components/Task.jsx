import { useState } from "react";
import IconButton from "./IconButton";

export default function Task() {
  const [checked, setIsChecked] = useState(false);
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const formattedDate = currentDate.toLocaleDateString();

  console.log(formattedDate);

  return (
    <div className="flex gap-2 bg-text-950 rounded-lg p-3 items-center justify-between">
      <div className="flex items-center justify-center gap-5">
        <input type="checkbox" name="taskCheck" id="" className="h-5 w-5" />
        <div>
          <label htmlFor="taskCheck" className="font-semibold text-xl">
            Task
          </label>
          <p>
            {currentTime} | {formattedDate}
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <IconButton>🤑</IconButton>
      </div>
    </div>
  );
}
