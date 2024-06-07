export default function IconButton({ children }) {
  return (
    <button className="bg-accent-600 rounded-xl p-2  hover:bg-accent-500 duration-300">
      {children}
    </button>
  );
}
