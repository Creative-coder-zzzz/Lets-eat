import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import AuthLogin from "./components/pages/auth/Login";
import AuthRegister from "./components/pages/auth/Register";
import { Navigate } from "react-router-dom";
import NotFound from "./components/pages/not-found/not-found";
import UnAuth from "./components/pages/not-found/un-auth";
import AdminLayout from "./components/pages/admin/Layout";
import AdminDashboard from "./components/pages/admin/Dashboard";
import AdminProducts from "./components/pages/admin/Products";
import AdminOrders from "./components/pages/admin/Orders";
import AdminFeatures from "./components/pages/admin/Features";
import ShoppingHome from "./components/pages/shop/ShoppingHome";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/*Auth routes  */}
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="unauth-page" element={<UnAuth />} />
        <Route path="/" element={<ShoppingHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
