// import { getProducts } from "../../api/productApi";
import { FaStar } from "react-icons/fa";


export default function Dealscard({
  image,
  name,
  percentage,
  price,
 description,
  rating,


  
}) {
  return (
    <div className="w-[221px] m-3 rounded-sm bg-[#f5f3f3] p-[10px]">

    
      <img
        src={image}
        alt={`image ${name}`}
        className="h-[180px] w-full rounded-md bg-slate-100 object-cover"
      />

     
      <h1 className="mt-2 font-semibold">
        {name}
      </h1>

  <p className="mt-1 inline-block rounded px-2 py-1 text-sm ">
        {description}
      </p>

        {/* <p className="text-sm text-gray-400 line-through">
          ${description}
        </p>
      */}
      <p className="mt-1 inline-block rounded bg-blue-400 px-2 py-1 text-sm text-white">
        -{percentage}%
      </p>


      <div className="mt-2 flex items-center gap-2">
        <p className="font-bold">
          ${price}
        </p>

      </div>

    
      <div className="mt-2 flex items-center gap-1">
        <FaStar className="text-yellow-400" />
        <span>{rating}</span>
      </div>

    </div>
  );
}