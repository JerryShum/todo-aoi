import Button from "./components/AddTaskButton";
import List from "./components/List";
import Sort from "./components/Sort";
import AddNewTask from "./components/AddNewTask";
import { useState } from "react";

export default function App() {
  const [addTaskView, setAddTaskView] = useState(false);
  function handleAddTask() {
    setAddTaskView(() => !addTaskView);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <h1 className=" font-bold text-5xl">TODO LIST</h1>
      <div className="w-1/2 flex flex-col gap-5">
        <div className="flex justify-between">
          <Button addTaskView={addTaskView} handleAddTask={handleAddTask}>
            Add Task
          </Button>
          <Sort />
        </div>
        {addTaskView && <AddNewTask />}
        <List />
      </div>
    </div>
  );
}
