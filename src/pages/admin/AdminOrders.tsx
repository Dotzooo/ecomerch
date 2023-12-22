import Breadcrumb from "../../components/admin/Breadcrumb";
import Overview from "../../components/admin/Overview";
import Table from "../../components/admin/Table";

import {
  FaRegFaceKissWinkHeart,
  FaRegFaceGrinHearts,
  FaRegFaceSadCry,
  FaRegFaceSmile,
} from "react-icons/fa6";

export default function AdminOrder() {
  const orderOverview = [
    {
      title: "新訂單",
      nums: "10000",
      className: "purple",
      icon: <FaRegFaceKissWinkHeart />,
    },
    {
      title: "已完成訂單",
      nums: "5320",
      className: "green",
      icon: <FaRegFaceGrinHearts />,
    },
    {
      title: "已取消訂單",
      nums: "446",
      className: "orange",
      icon: <FaRegFaceSadCry />,
    },
    {
      title: "達成率",
      nums: "42.34%",
      className: "yellow",
      icon: <FaRegFaceSmile />,
    },
  ];

  const headerTitles: string[] = [
    "訂單編號",
    "購買人",
    "訂單金額",
    "貨運狀態",
    "操作",
  ];

  const fake_orders = [
    { id: "ROF-4371", name: "John Johnson", price: 7964, status: "Shipped" },
    {
      id: "KZZ-4053",
      name: "William Williams",
      price: 2549,
      status: "Delivered",
    },
    { id: "TAO-1277", name: "Mary Davis", price: 6137, status: "Cancelled" },
    {
      id: "XEM-5824",
      name: "Linda Garcia",
      price: 16827,
      status: "Cancelled",
    },
    {
      id: "GPF-8550",
      name: "William Miller",
      price: 30321,
      status: "Delivered",
    },
    {
      id: "XJZ-8254",
      name: "Jennifer Davis",
      price: 46777,
      status: "Shipped",
    },
    { id: "ULZ-0135", name: "John Wilson", price: 15335, status: "Preparing" },
    { id: "GOH-5026", name: "John Garcia", price: 35395, status: "Shipped" },
    { id: "NGW-8937", name: "Robert Smith", price: 39541, status: "Shipped" },
    {
      id: "JNV-4205",
      name: "Jennifer Rodriguez",
      price: 14322,
      status: "Delivered",
    },
  ];

  return (
    <div>
      <Breadcrumb pageName="Orders" pageTitle="訂單管理" />
      <Overview data={orderOverview} />
      <Table
        title="訂單列表"
        headerCol={headerTitles}
        tableData={fake_orders}
      />
    </div>
  );
}
