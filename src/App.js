import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from './pages/Product';
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProduct from "./pages/AdminProduct";

import "./assets/all.scss";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <header>
          EcoMerch
        </header>
        <main>
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/admin" element={<Admin />}>
              <Route index element={ <AdminDashboard /> }></Route>
              <Route path="product" element={ <AdminProduct /> }></Route>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
