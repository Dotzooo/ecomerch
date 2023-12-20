export interface Orders {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  imgUrl: string;
}

export interface TableHeader {
  headerCol: string []
}

export interface TableProps {
  headerCol: string[];
  orders: Orders[];
}