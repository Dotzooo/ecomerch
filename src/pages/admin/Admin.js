import { Outlet } from "react-router-dom";
// import AdminNavbar from "../components/AdminNavbar";

export default function Admin() {
    return (
        <div className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
            <div className="main-content-container px-4 container-fluid">
                <Outlet />
            </div>
        </div>
    )
}