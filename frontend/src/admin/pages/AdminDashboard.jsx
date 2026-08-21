import AdminLayout from "../AdminLayout";
import SectionHeader from "../components/SectionHeader";
import AddProductForm from "../components/AddProductForm";
import ProductTable from "../components/ProductTable";

export default function AdminDashboard() {

  const products = [];

  const handleEdit = (product) => {
    console.log("Edit:", product);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  return (
    <AdminLayout>

      <h2 className="text-2xl font-bold mb-6">
        Product Management
      </h2>

      {/* Add */}
      <div className="mb-8">

        <SectionHeader
          title="Add Products"
          subtitle="Create a new product"
        />

        <AddProductForm />

      </div>


      {/* Modify / Delete */}
      <div>

        <SectionHeader
          title="Modify or Delete"
          subtitle="Select a product to modify or delete"
        />

        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>

    </AdminLayout>
  );
}