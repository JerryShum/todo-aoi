export default function Button({ children }) {
  return (
    <button className=" bg-primary-500 hover:bg-primary-400 duration-300 text-text-950 w-1/5 p-3 rounded-lg font-semibold">
      {children}
    </button>
  );
}
