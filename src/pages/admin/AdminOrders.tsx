import Breadcrumb from "../../components/admin/Breadcrumb";
import Overview from "../../components/admin/Overview";
import { FaRegFaceKissWinkHeart, FaRegFaceGrinHearts, FaRegFaceSadCry, FaRegFaceSmile } from "react-icons/fa6";

export default function AdminOrder() {
  const orderOverview = [
    {
      title: "New Order",
      nums: "10000",
      className: 'purple',
      icon: <FaRegFaceKissWinkHeart />
    },
    {
      title: "Completed Orders",
      nums: "5K+",
      className: 'green',
      icon: <FaRegFaceGrinHearts />
    },
    {
      title: "Cancelled Order",
      nums: "446",
      className: 'orange',
      icon: <FaRegFaceSadCry />
    },
    {
      title: "Positive Rating",
      nums: "1.5K",
      className: 'yellow',
      icon: <FaRegFaceSmile />
    },
  ];

  return (
    <div>
      <Breadcrumb pageName="Orders" pageTitle="訂單管理" />
      後台訂單列表管理頁面
      <Overview data={orderOverview} />
    </div>
  );
}
