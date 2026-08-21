export default function Sidebar() {
  return (
    <aside className="w-[210px] min-h-screen bg-[#BDDBF4] border-r border-gray-400">

      
      <div className="h-[100px] flex items-center justify-center border-b border-gray-400">
        <h1 className="font-bold text-xl">
          SREE
        </h1>
      </div>

      
      <nav>

        <button className="w-full px-5 py-5 text-left font-semibold border-b border-gray-400 hover:bg-[#9fc7e5]">
          Dashboard
        </button>

        <button className="w-full px-5 py-5 text-left border-b border-gray-400 hover:bg-[#9fc7e5]">
          Recent Orders
        </button>

        <button className="w-full px-5 py-5 text-left border-b border-gray-400 hover:bg-[#9fc7e5]">
          Add Products
        </button>

        <button className="w-full px-5 py-5 text-left border-b border-gray-400 hover:bg-[#9fc7e5]">
          Modify / Delete
        </button>

      </nav>

    </aside>
  );
}