import Sidebar from "./components/Sidebar";
import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">

      
      <Sidebar />

      
      <div className="flex-1">

        <AdminHeader />

        <main className="p-6">
          {children}
        </main>

      </div>



      

    </div>
  );
}