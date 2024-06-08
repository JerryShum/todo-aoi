import Task from "./Task";

export default function List({ taskObjectArray }) {
  return (
    <div className="bg-accent-900 rounded-xl flex flex-col gap-5 p-10 w-full ">
      {taskObjectArray.map((task) => (
        <Task
          taskLabel={task.taskLabel}
          taskPriority={task.taskPriority}
          taskDate={task.taskDate}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}
