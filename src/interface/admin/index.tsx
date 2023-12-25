
export interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

export interface Orders {
  id: string;
  name: string;
  category?: string;
  price?: number;
  stock?: number;
  sold?: number;
  status?: string;
  imgUrl?: string;
}

export interface TableHeader {
  headerCol: string[];
}

export interface TableProps {
  title: string;
  headerCol?: string[];
  tableData?: Orders[];
}

// 分頁
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
