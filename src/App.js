import { Routes, Route, useLocation } from 'react-router-dom';

import FrontHeader from './components/front/Header';
import Home from './pages/Home';
import Product from './pages/Product';

import AdminNavbar from './components/admin/Navbar';
import Admin from './pages/admin/Admin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProduct from './pages/admin/AdminProduct';
import AdminOrders from './pages/admin/AdminOrders';

import './assets/all.scss';

function App() {
  const location = useLocation();

  // 檢查是否後台路由
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="container-fluid">
      <div className="row">
        {/* 根據路徑渲染對應的 header */}
        {isAdminRoute ? <AdminNavbar /> : <FrontHeader />}

        <Routes>
          {/* 前台路由 */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>

          {/* 後台路由 */}
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminDashboard />}></Route>
            <Route path="product" element={<AdminProduct />}></Route>
            <Route path="orders" element={<AdminOrders />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
