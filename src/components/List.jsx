import Task from "./Task";

export default function List({ taskObjectArray, handleDeleteTask }) {
  return (
    <div className="bg-accent-900 rounded-xl flex flex-col gap-5 p-10 w-full max-h-[500px] overflow-y-scroll">
      {taskObjectArray.map((task) => (
        <Task
          taskLabel={task.taskLabel}
          taskPriority={task.taskPriority}
          taskDate={task.taskDate}
          handleDeleteTask={handleDeleteTask}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}
