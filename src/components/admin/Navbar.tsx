import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../assets/components/admin/navbar.scss";
import {
  FaArrowLeft,
  FaChalkboardUser,
  FaList,
  FaWarehouse,
  FaAlignJustify
} from "react-icons/fa6";

export default function AdminNavbar() {
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(true);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navbarNav = navbarRef.current;

    if (navbarNav) { 

      const handleShow = () => setIsCollapsed(false);
      const handleHide = () => setIsCollapsed(true);

      navbarNav.addEventListener('show.bs.collapse', handleShow);
      navbarNav.addEventListener('hide.bs.collapse', handleHide);
    
      return () => {
        navbarNav.removeEventListener('show.bs.collapse', handleShow);
        navbarNav.removeEventListener('hide.bs.collapse', handleHide);
      };
    }
  }, []);
  
  // TODO: 改成 redux
  const navLinks = [
    {
      path: "/admin",
      name: "DashBoard",
      icon: <FaChalkboardUser className="me-2" />,
    },
    {
      path: "/admin/product",
      name: "商品列表",
      icon: <FaWarehouse className="me-2" />,
    },
    {
      path: "/admin/orders",
      name: "訂單列表",
      icon: <FaList className="me-2" />,
    },
  ];

  return (
    <aside className="main-sidebar px-0 col-12 col-md-3 col-lg-2">
      <div className="main-navbar">
        <nav className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light">
          <Link
            to="/admin"
            className="d-flex justify-content-center align-items-center w-100 m-0 navbar-brand"
          >
            <span className="d-inline-block d-md-inline ml-1">EcoMerch</span>
          </Link>
        
          <button
            className="navbar-toggler toggle-sidebar shadow-none border-0 border-start rounded-0 d-md-none"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            {isCollapsed ? <FaAlignJustify /> : <FaArrowLeft />}
          </button>
        </nav>
      </div>
      <div className="nav-wrapper collapse navbar-collapse d-md-block" id="navbarNav" ref={ navbarRef }>
        <ul className="flex-column nav">
          {navLinks.map((link, index) => {
            return (
              <li
                className={`nav-item ${
                  location.pathname === link.path ? "active" : ""
                }`}
                key={index}
              >
                <Link className="nav-link text-center" to={link.path}>
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
