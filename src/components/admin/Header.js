import { IoMdSearch } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";

import "../../assets/components/admin/header.scss";

export default function AdminHeader() {
  return (
    <div className="main-navbar bg-white sticky-top">
      <div className="p-0 container-fluid">
        <nav className="align-items-stretch flex-md-nowrap p-0 navbar navbar-light border-start">
          <form className="search-bar w-100 d-none d-md-flex">
            <div className="input-group ms-3">
              <div className="d-flex input-group-prepend">
                <span className="input-group-text">
                  <IoMdSearch />
                </span>
              </div>
              <input
                placeholder="Search for something..."
                className="navbar-search form-control shadow-none"
              />
            </div>
          </form>
          <div className="notifications d-flex justify-content-center align-items-center border-start">
            <button
              type="button"
              className="position-relative border-0 bg-transparent"
            >
              <TbBellRinging />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
              </span>
            </button>
          </div>
          <div className="admin-profile d-flex justify-content-center align-items-center border-start">
            <div className="nav-item dropdown">
              <button
                id="navbarDropdown"
                className="dropdown-toggle border-0 bg-transparent"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsFillPersonFill />
              </button>
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sliders-h fa-fw"></i> Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cog fa-fw"></i> Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
