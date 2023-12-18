import { Outlet } from 'react-router-dom';
import AdminHeader from '../../components/admin/Header';

import '../../assets/components/admin/index.scss';

export default function Admin() {
  return (
    <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
      <AdminHeader />
      <div className="main-content px-4 container-fluid">
        <Outlet />
      </div>
    </main>
  );
}
