import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

export default function Admin() {
    return (
        <div className="row">
            <div className="col-4">
                <AdminNavbar />
            </div>
            <div className="col-8">
                <Outlet />
            </div>
        </div>
    )
}