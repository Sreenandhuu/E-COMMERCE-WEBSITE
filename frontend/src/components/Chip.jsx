
export default function Chip({ name }) {
  return (
    <>
    
     <button className="group inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#9684ef] hover:text-white hover:shadow-lg hover:shadow-[#9684ef]/30 active:scale-95">
  <span className="h-2 w-2 rounded-full bg-[#9684ef] transition-colors group-hover:bg-white"></span>
  {name}
</button>
    </>
  )
}
