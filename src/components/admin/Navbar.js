import { Link, useLocation } from 'react-router-dom';

import '../../assets/components/admin/navbar.scss';
import { FaArrowLeft, FaChalkboardUser, FaList, FaWarehouse } from 'react-icons/fa6';

export default function AdminNavbar() {
  const location = useLocation();

  // TODO: 改成 redux
  const navLinks = [
    {
      path: '/admin',
      name: 'DashBoard',
      icon: <FaChalkboardUser className="me-2" />,
    },
    {
      path: '/admin/product',
      name: '產品列表',
      icon: <FaWarehouse className="me-2" />,
    },
    {
      path: '/admin/orders',
      name: '訂單列表',
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
          <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
            <FaArrowLeft />
          </a>
        </nav>
      </div>
      <div className="nav-wrapper">
        <ul className="flex-column nav">
          {navLinks.map((link, index) => {
            return (
              <li
                className={`nav-item ${
                  location.pathname === link.path ? 'active' : ''
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
