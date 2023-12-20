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

  const orders = [
    {
      id: Math.random().toString(),
      imgUrl: '',
      name: "chair",
      category: "",
      price: 999,
      stock: 20,
      sold: 0,
    },
  ];

  return (
    <div>
      <Breadcrumb pageName="Orders" pageTitle="訂單管理" />
      <Overview data={orderOverview} />
      <Table headerCol={headerTitles} orders={orders} />
    </div>
  );
}
