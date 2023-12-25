import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Breadcrumb from "../../components/admin/Breadcrumb";
import Table from "../../components/admin/Table";

export default function AdminProduct() {
  const headerTitles: string[] = [
    "圖片",
    "商品編號",
    "商品名稱",
    "售價",
    "庫存",
    "已售出",
    "操作",
  ];

  const fake_orders = [
    {
      id: "ROF-4371",
      imgUrl:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "chair",
      price: 7964,
      stock: 2394,
      sold: 687
    },
    {
      id: "KZZ-4053",
      imgUrl:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Home office comfy chair",
      price: 2549,
      stock: 2394,
      sold: 687
    },
    {
      id: "TAO-1277",
      imgUrl:
        "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Yellow chair",
      price: 6137,
      stock: 2394,
      sold: 687
    },
    {
      id: "XEM-5824",
      imgUrl:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Article Couch",
      price: 16827,
      stock: 2394,
      sold: 687
    },
    {
      id: "GPF-8550",
      imgUrl: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Interior",
      price: 30321,
      stock: 2394,
      sold: 687
    },
    {
      id: "XJZ-8254",
      imgUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Brown Wooden",
      price: 46777,
      stock: 2394,
      sold: 687
    },
    {
      id: "ULZ-0135",
      imgUrl: "https://images.unsplash.com/photo-1552324190-9e86fa095c4a?q=80&w=2377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Round Brown Wilson",
      price: 15335,
      stock: 2394,
      sold: 687
    },
    {
      id: "GOH-5026",
      imgUrl: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Garcia Soft",
      price: 35395,
      stock: 2394,
      sold: 687
    },
    {
      id: "NGW-8937",
      imgUrl: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Article Smith Couch",
      price: 39541,
      stock: 2394,
      sold: 687
    },
    {
      id: "JNV-4205",
      imgUrl: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=2887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Article Smith Couch Rodriguez",
      price: 14322,
      stock: 2394,
      sold: 687
    },
  ];
  
  return (
    <div>
      <Breadcrumb pageName="Products" pageTitle="商品管理" />
      <Tabs defaultActiveKey="allProduct" id="product-tab" className="mb-3">
        <Tab eventKey="allProduct" title="全部">
          <Table
            title="總商品數: 52680"
            headerCol={headerTitles}
            tableData={fake_orders}
          />
        </Tab>
        <Tab eventKey="selling" title="上架中">
          <Table
            title="上架中商品: 30680"
            headerCol={headerTitles}
            tableData={fake_orders}
          />
        </Tab>
        <Tab eventKey="unSelling" title="未上架">
          <Table
            title="未上架商品: 14000"
            headerCol={headerTitles}
            tableData={fake_orders}
          />
        </Tab>
        <Tab eventKey="soldOut" title="已售完">
          <Table
            title="已售完商品: 8000"
            headerCol={headerTitles}
            tableData={fake_orders}
          />
        </Tab>
      </Tabs>
    </div>
  );
}
