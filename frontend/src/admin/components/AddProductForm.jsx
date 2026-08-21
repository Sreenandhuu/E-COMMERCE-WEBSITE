// import { useState } from "react";
// import { createProduct } from "../../api/productApi";
// import AdminButton from "./AdminButton";

// export default function AddProductForm() {

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     percentage: "",
//     category: "",
//     stock: "",
//     description: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const productData = {
//         ...formData,
//         price: Number(formData.price),
//         percentage: Number(formData.percentage),
//         stock: Number(formData.stock),
//       };

//       const response = await createProduct(productData);

//       console.log("Product created:", response.data);

//       // Clear form after successful submission
//       setFormData({
//         name: "",
//         price: "",
//         percentage: "",
//         category: "",
//         stock: "",
//         description: "",
//         image: "",
//       });

//     } catch (error) {

//       console.log("Error creating product:", error);

//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white border border-gray-300 rounded-xl p-5"
//     >

//       <div className="grid grid-cols-2 gap-4">

//         {/* Product Name */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Product Name
//           </label>

//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter product name"
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
//           />
//         </div>


//         {/* Price */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Price
//           </label>

//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="Enter price"
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
//           />
//         </div>


//         {/* Percentage */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Discount Percentage
//           </label>

//           <input
//             type="number"
//             name="percentage"
//             value={formData.percentage}
//             onChange={handleChange}
//             placeholder="Enter discount percentage"
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
//           />
//         </div>


//         {/* Category */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Category
//           </label>

//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
//           >
//             <option value="">
//               Select category
//             </option>

//             <option value="Mobiles">
//               Mobiles
//             </option>

//             <option value="Electronics">
//               Electronics
//             </option>

//             <option value="Fashion">
//               Fashion
//             </option>

//             <option value="Home">
//               Home
//             </option>
//           </select>
//         </div>


//         {/* Stock */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Stock
//           </label>

//           <input
//             type="number"
//             name="stock"
//             value={formData.stock}
//             onChange={handleChange}
//             placeholder="Enter stock"
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
//           />
//         </div>

//       </div>


//       {/* Description */}
//       <div className="mt-4">

//         <label className="block text-sm font-semibold mb-1">
//           Description
//         </label>

//         <textarea
//           rows="4"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Enter product description"
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
//         />

//       </div>


//       {/* Image URL */}
//       <div className="mt-4">

//         <label className="block text-sm font-semibold mb-1">
//           Product Image URL
//         </label>

//         <input
//           type="text"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//           placeholder="Enter image URL"
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
//         />

//       </div>


//       {/* Submit */}
//       <div className="mt-5">

//         <AdminButton type="submit">
//           Add Product +
//         </AdminButton>

//       </div>

//     </form>
//   );
// }

import { useState } from "react";
import { createProduct } from "../../api/productApi";
import AdminButton from "./AdminButton";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    percentage: "",
    category: "",
    stock: "",
    description: "",
    image: null, // 1. Set default to null instead of an empty string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // 2. New handler specifically for local file selection
  const handleFileChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      image: e.target.files[0], // Store the File object from disk
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 3. Construct FormData object for multipart/form-data requests
      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", Number(formData.price));
      data.append("percentage", Number(formData.percentage));
      data.append("category", formData.category);
      data.append("stock", Number(formData.stock));
      data.append("description", formData.description);

      if (formData.image) {
        data.append("image", formData.image); // Append raw file object
      }

      // Pass the FormData instance to your API call
      const response = await createProduct(data);

      console.log("Product created:", response.data);

      // Clear form state
      setFormData({
        name: "",
        price: "",
        percentage: "",
        category: "",
        stock: "",
        description: "",
        image: null,
      });

      // Reset file input element manually
      e.target.reset();
    } catch (error) {
      console.log("Error creating product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 rounded-xl p-5"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
          />
        </div>

        {/* Percentage */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Discount Percentage
          </label>
          <input
            type="number"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            placeholder="Enter discount percentage"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
          >
            <option value="">Select category</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-semibold mb-1">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter stock"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <label className="block text-sm font-semibold mb-1">Description</label>
        <textarea
          rows="4"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
        />
      </div>

      {/* 4. Updated File Input for Local Image Selection */}
      <div className="mt-4">
        <label className="block text-sm font-semibold mb-1">
          Upload Product Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#9684ef]"
        />
      </div>

      {/* Submit */}
      <div className="mt-5">
        <AdminButton type="submit">Add Product +</AdminButton>
      </div>
    </form>
  );
}