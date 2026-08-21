import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductRow from "./ProductRow";

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await getProducts();

        console.log("Products:", response.data);

        setProducts(response.data.products);

      } catch (error) {

        console.log("Error:", error);

      }

    };

    fetchProducts();

  }, []);

  const handleEdit = (product) => {
    console.log("Edit product:", product);
  };

  const handleDelete = (id) => {
    console.log("Delete product:", id);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl mt-6 overflow-hidden">

      {/* Table Header */}

      <div className="grid grid-cols-[60px_1fr_100px_100px_100px] items-center gap-4 p-3 bg-gray-50 font-semibold text-sm">

        <div>Image</div>

        <div>Product</div>

        <div>Price</div>

        <div>Modify</div>

        <div>Delete</div>

      </div>


      {/* Product Rows */}

      {products.map((product) => (

        <ProductRow
          key={product._id}
          product={product}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      ))}

    </div>
  );
}