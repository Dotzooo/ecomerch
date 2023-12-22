import { useState } from "react";
import { TableProps } from "../../interface/admin";
import PaginationComponent from "./Pagination";
import "../../assets/components/admin/table.scss";

export default function Table({ title, headerCol, tableData }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = tableData ? Math.ceil(tableData.length / itemsPerPage) : 0;

  const statusBtn = (status: string) => {
    let className;
    switch (status) {
      case "Preparing":
        className = "preparing";
        break;
      case "Shipped":
        className = "shipping";
        break;
      case "Delivered":
        className = "completed";
        break;
      case "Cancelled":
        className = "cancelled";
        break;
    }
    return (
      <td>
        <button className={`status-btn  ${className}`}>{status}</button>
      </td>
    );
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderTableBody = () => {
    if (!tableData || tableData.length === 0) {
      return (
        <tr>
          <td colSpan={headerCol?.length}>沒有資料</td>
        </tr>
      );
    }

    return tableData
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map((item) => (
        <tr key={item.id}>
          {item.imgUrl && (
            <td>
              <img
                src={item.imgUrl}
                style={{ height: "100px", width: "100px" }}
                alt={item.name}
              />
            </td>
          )}
          <td>{item.id}</td>
          <td>{item.name}</td>
          {item.category && <td>{item.category}</td>}
          {item.price && (
            <td>
              {new Intl.NumberFormat("en-US", {
                style: "decimal",
                maximumFractionDigits: 2,
              }).format(item.price)}
            </td>
          )}
          {item.status && statusBtn(item.status)}
          {item.stock && <td>{item.stock}</td>}
          {item.sold && <td>{item.sold}</td>}
          <td>
            <button className="btn btn-sm">查看</button>
          </td>
        </tr>
      ));
  };

  return (
    <div className="mt-4 card card-small">
      <div className="border-bottom card-header px-4 py-3">
        <h6 className="fs-4 m-0">{title}</h6>
      </div>
      <div className="pb-3 card-body">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              {headerCol?.map((col, index) => (
                <th key={index} scope="col" className="border-0">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {renderTableBody()}
          </tbody>
        </table>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
