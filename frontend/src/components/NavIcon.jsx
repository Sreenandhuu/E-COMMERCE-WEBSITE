
const NavIcon = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center gap-1  cursor-pointer hover:bg-[#4a3f81]">
      {icon}
      <span className="text-white text-sm">{label}</span>
    </button>
  );
};

export default NavIcon