
import './App.css'
import Loginpage from './pages/Loginpage'
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./admin/pages/AdminDashboard";
function App() {

  return (
  //   <>
  //  <Loginpage/>
  //   </>
  <Routes>

      <Route
      path="/login"
      element={<Loginpage/>}
      />

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

    </Routes>
  )
}

export default App