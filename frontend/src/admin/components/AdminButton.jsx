export default function AdminButton({
  children,
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        px-4
        py-2
        rounded-lg
        bg-[#9684ef]
        text-white
        font-semibold
        text-sm
        hover:bg-[#806de0]
        transition
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}