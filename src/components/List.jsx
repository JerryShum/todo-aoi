import Task from "./Task";

export default function List() {
  return (
    <div className="bg-accent-900 rounded-xl flex flex-col gap-5 p-10 w-full">
      <Task />
      <Task />
      <Task />
    </div>
  );
}
