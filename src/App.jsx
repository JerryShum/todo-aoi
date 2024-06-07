import List from "./components/List";

export default function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <h1 className=" font-bold text-5xl">TODO LIST</h1>
      <div className="w-1/2">
        <List />
      </div>
    </div>
  );
}
