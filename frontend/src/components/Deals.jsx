import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import Dealscard from "./Dealscard";

export default function Deals() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await getProducts();

        console.log("Backend products:", response.data.products);

        setProducts(response.data.products);

      } catch (error) {

        console.log("Error fetching products:", error);

      }

    };

    fetchProducts();

  }, []);

  return (
    <div className="flex flex-wrap">

      {products.map((product) => (

        <Dealscard
          key={product._id}
          
          image={product.image}
          name={product.name}
          percentage={product.percentage}
          price={product.price}
          description={product.description}
          rating={product.rating}
        />

      ))}

    </div>
  );
}