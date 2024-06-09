import AddTaskButton from "./components/AddTaskButton";
import List from "./components/List";
import Sort from "./components/Sort";
import AddNewTask from "./components/AddNewTask";
import { useState } from "react";

export default function App() {
  const [taskObjectArray, setTaskObjectArray] = useState([]);
  const [addTaskView, setAddTaskView] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  const [taskPriority, setTaskPriority] = useState("1");

  function handleToggleTask() {
    setAddTaskView(() => !addTaskView);
  }

  function handleTaskInput(value) {
    setNewTaskValue(value);
  }

  function handlePriorityValue(value) {
    setTaskPriority(value);
  }

  function handleAddTaskObject(object) {
    if (newTaskValue === "") return;

    setTaskObjectArray((taskObjectArray) => [...taskObjectArray, object]);
    console.log(taskObjectArray);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10 overflow-hidden">
      <h1 className=" font-bold text-5xl">TODO LIST</h1>
      <div className="w-1/2 flex flex-col gap-5">
        <div
          className={
            "flex " +
            (taskObjectArray.length == 0 ? "justify-center" : "justify-between")
          }
        >
          <AddTaskButton
            addTaskView={addTaskView}
            handleToggleTask={handleToggleTask}
          />

          {taskObjectArray.length != 0 && <Sort />}
        </div>
        {addTaskView && (
          <AddNewTask
            taskValue={newTaskValue}
            handleTaskInput={handleTaskInput}
            taskPriority={taskPriority}
            handlePriorityValue={handlePriorityValue}
            handleAddTaskObject={handleAddTaskObject}
          />
        )}

        {taskObjectArray.length == 0 ? (
          <div className=" w-full items-center text-center ">
            Start adding some tasks!
          </div>
        ) : (
          <List taskObjectArray={taskObjectArray} />
        )}
      </div>
    </div>
  );
}
