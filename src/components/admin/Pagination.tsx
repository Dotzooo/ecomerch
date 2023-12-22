import Pagination from "react-bootstrap/Pagination";
import { PaginationProps } from "../../interface/admin";
import '../../assets/components/admin/pagination.scss';
export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <Pagination className="px-4 py-3 m-0">
      {[...Array(totalPages).keys()].map((page) => (
        <Pagination.Item
          key={page + 1}
          active={page + 1 === currentPage}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

