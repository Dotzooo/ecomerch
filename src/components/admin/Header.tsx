import http from '../../api/index'
import { useDispatch } from "react-redux";

import { IoMdSearch } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";

import "../../assets/components/admin/header.scss";
import { setLoggedOut } from "../../slice/admin/loginSlice";


export default function AdminHeader() {
  const dispatch = useDispatch();
  
  const logout = async () => {
    try {

      const res = await http.post("/v2/logout");
      console.log(res);

      dispatch(setLoggedOut());
    } catch (err) {
      console.log(err);
    }
  };

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
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle border-0 bg-transparent"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsFillPersonFill />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                  style={{ left: "-6.5rem", top: "3rem" }}
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <div className="dropdown-item" onClick={logout}>
                      LOG OUT
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
