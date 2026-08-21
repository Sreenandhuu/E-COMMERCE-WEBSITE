export default function ProductRow({
  product,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid grid-cols-[60px_1fr_100px_100px_100px] items-center gap-4 p-3 border-b border-gray-200">

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-12 h-12 object-cover rounded"
      />
      

      {/* Name */}
      <div>
        <p className="font-semibold text-sm">
          {product.name}
        </p>

        <p className="text-xs text-gray-500">
          {product.category}
        </p>
      </div>

      {/* Price */}
      <p className="font-semibold">
        ₹{product.price}
      </p>

      {/* Edit */}
      <button
        onClick={() => onEdit(product)}
        className="text-blue-600 text-sm font-semibold hover:underline"
      >
        Modify
      </button>

      {/* Delete */}
      <button
        onClick={() => onDelete(product._id)}
        className="text-red-500 text-sm font-semibold hover:underline"
      >
        Delete
      </button>

    </div>
  );
}