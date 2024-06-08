import { useState } from "react";

export default function Sort() {
  const [sortValue, setSortValue] = useState("sortBy");

  function handleSortChange(e) {
    setSortValue(e.target.value);
  }

  return (
    <select
      value={sortValue}
      onChange={handleSortChange}
      className="p-3 rounded-lg bg-accent-900 font-semibold"
    >
      <option value={"name"}>Alphabetically</option>
      <option>Date Made</option>
      <option>Priority</option>
    </select>
  );
}
