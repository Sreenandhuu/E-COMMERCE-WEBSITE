
import { ShoppingCart, Heart, User,ListOrdered,Search } from "lucide-react";
import NavIcon from "./NavIcon";
const Nav = () => {
  return (
    <nav className="w-full  ">

      <div className="h-[75px]  flex items-center justify-between px-12 bg-[#080B5C]">
        
      <div >
        <h2 className="text-[35px] font-bold font-sans text-white ">
          SREE
        </h2>
      </div>
      <div >
        <button className="text-[12px] font-bold font-sans text-white ">
           Update <br />
 location
        </button>
      </div>



      {/* Search */}
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Type to textSearch for products, brands and more..."
          className="w-[400px] h-10 px-3 text-[#1d4667] bg-[#BDDBF4] border-r-0 rounded-l-[20px] outline-none placeholder:text-[#6a7f90]"
        />

        <button className="w-[40px] h-10  bg-[#BDDBF4]   text-[#0b4d84] rounded-r-[20px] hover:bg-[#5092c8] hover:text-[#010c15]  transition">
          <Search />
        </button>
      </div>
      <div>
        <div className=" flex  items-center gap-6 text-white">
            <NavIcon
            icon={<User size={24} strokeWidth={2} />}
            label="Sign In"
            />
            <NavIcon
            icon={<Heart size={24} strokeWidth={2} />}
            label="Wishlist"
            />
            <NavIcon
            icon={<ListOrdered size={24} strokeWidth={2} />}
            label="Orders"
            />
            <NavIcon
            icon={<ShoppingCart size={24} strokeWidth={2} />}
            label="Cart"
            />
         
         
           

        </div>
      </div>
      
      </div>
            <div className="h-[35px]  flex items-center justify-between px-12 bg-[#BDDBF4]">
                

                </div>

    </nav>
  );
};

export default Nav;