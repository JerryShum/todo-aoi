export default function IconButton({ children }) {
  return (
    <button className="bg-primary-500 rounded-xl p-2  hover:bg-primary-400 duration-300 text-2xl">
      {children}
    </button>
  );
}
