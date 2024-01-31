import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";

import FrontHeader from "./components/front/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";

import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminNavbar from "./components/admin/Navbar";
import Admin from "./pages/admin/Admin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminOrders from "./pages/admin/AdminOrders";

import "./assets/all.scss";

function App() {
  const location = useLocation();

  const isLoggin = useSelector((state: RootState) => {
    return state.login.isLoggedIn
  })
  console.log(isLoggin)

  // 檢查是否後台路由
  const isAdminRoute = location.pathname.startsWith("/admin");

  // 根据是否为后台路由和是否已登录决定是否显示 AdminNavbar
  const showAdminNavbar = isAdminRoute && isLoggin;
  
  return (
    // <div>
      <div>
        {/* 根據路徑渲染對應的 header */}
        {!isAdminRoute ? (
          <FrontHeader />
        ) : showAdminNavbar ? (
          <AdminNavbar />
        ) : null}

        <Routes>
          {/* 前台路由 */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>

          {/* 後台路由 */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<ProtectedRoute isLoggedIn={isLoggin} />}>
            <Route path="/admin" element={<Admin />}>
              <Route index element={<AdminDashboard />}></Route>
              <Route path="product" element={<AdminProduct />}></Route>
              <Route path="orders" element={<AdminOrders />}></Route>
            </Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
