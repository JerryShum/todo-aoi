export default function IconButton({
  currentTask,
  handleDeleteTask,
  children,
}) {
  return (
    <button
      className="bg-primary-500 hover:bg-primary-400 text-text-950 duration-300 h-7 w-7 rounded-lg "
      onClick={handleDeleteTask(currentTask)}
    >
      {children}
    </button>
  );
}
