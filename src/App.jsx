import Button from "./components/Button";
import List from "./components/List";
import Sort from "./components/Sort";

export default function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <h1 className=" font-bold text-5xl">TODO LIST</h1>
      <div className="w-1/2 flex flex-col gap-5">
        <div className="flex justify-between">
          <Button>Add Task</Button>
          <Sort />
        </div>
        <List />
      </div>
    </div>
  );
}
