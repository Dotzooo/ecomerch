import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';

import Breadcrumb from '../../components/admin/Breadcrumb';

import '../../assets/components/admin/dashboard.scss';

export default function AdminDashboard() {
  const data = [
    { date: new Date('2020-01-01'), value: 30 },
    { date: new Date('2020-02-01'), value: 50 },
    { date: new Date('2020-03-01'), value: 80 },
    { date: new Date('2020-04-01'), value: 40 },
    { date: new Date('2020-05-01'), value: 60 },
    { date: new Date('2020-06-01'), value: 30 }
  ];
  
  return (
    <div className="dashboard">
      <Breadcrumb pageName='Dashboard' pageTitle='Blog Overview' />
      <LineChart data={data} />
      <BarChart />
    </div>
  );
}
