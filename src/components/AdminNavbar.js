import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <aside className="main-sidebar px-0 col-12 col-md-3 col-lg-2">
      <div className="nav-wrapper">
        <ul className="flex-column nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/admin">
              <span>EcoMerch</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/product">
              <span>產品列表</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
