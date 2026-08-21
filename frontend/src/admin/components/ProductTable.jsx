// import ProductRow from "./ProductRow";

// export default function ProductTable({
//   products,
//   onEdit,
//   onDelete,
// }) {
//   return (
//     <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">

//       {/* Header */}
//       <div className="grid grid-cols-[60px_1fr_100px_100px_100px] gap-4 p-3 bg-gray-50 text-xs font-semibold">
//         <div>Image</div>
//         <div>Product</div>
//         <div>Price</div>
//         <div>Modify</div>
//         <div>Delete</div>
//       </div>

//       {/* Products */}
//       {products.map((product) => (
//         <ProductRow
//           key={product._id}
//           product={product}
//           onEdit={onEdit}
//           onDelete={onDelete}
//         />
//       ))}

//     </div>
//   );
// }
// import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";

export default function ProductManagement() {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Product Management
      </h1>

      {/* <AddProductForm /> */}

      <ProductList />

    </div>
  );
}