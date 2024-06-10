import { useState } from "react";

export default function Sort({ taskObjectArray, setTaskObjectArray }) {
    const [sortValue, setSortValue] = useState("sortBy");

    function sortArray(targetValue) {
        if (targetValue === "alphabetically") {
            const sortedArrayAlpha = [...taskObjectArray].sort((a, b) =>
                a.taskLabel.localeCompare(b.taskLabel, undefined, {
                    sensitivity: "base",
                })
            );
            setTaskObjectArray(sortedArrayAlpha);
        } else if (targetValue === "date") {
            const sortedArrayDate = [...taskObjectArray].sort((a, b) =>
                a.taskDate.localeCompare(b.taskDate, undefined, {
                    sensitivity: "base",
                })
            );
            setTaskObjectArray(sortedArrayDate);
        } else if (targetValue === "priority") {
            const prioMap = {
                Low: 1,
                Medium: 2,
                High: 3,
            };

            const sortedArrayPriority = [...taskObjectArray].sort(
                (a, b) =>
                    prioMap[b.taskPriority] - prioMap[a.taskPriority] ||
                    a.taskLabel.localeCompare(b.taskLabel, undefined, {
                        sensitivity: "base",
                    })
            );

            setTaskObjectArray(sortedArrayPriority);
        } else return;
    }

    function handleSortChange(e) {
        setSortValue(e.target.value);
        sortArray(e.target.value);
    }

    return (
        <select
            onChange={handleSortChange}
            value={sortValue}
            className="p-3 rounded-lg bg-accent-900 font-semibold"
        >
            <option value={"alphabetically"}>Alphabetically</option>
            <option value={"date"}>Date Made</option>
            <option value={"priority"}>Priority</option>
        </select>
    );
}
