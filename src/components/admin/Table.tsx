import { useState, FormEvent } from "react";
import { TableProps } from "../../interface/admin";
import PaginationComponent from "./Pagination";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Modal from "react-bootstrap/Modal";

import "../../assets/components/admin/table.scss";

export default function Table({ title, headerCol, tableData }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogData, setDialogData] = useState([]);
  console.log(dialogData);
  const itemsPerPage = 5;
  const totalPages = tableData ? Math.ceil(tableData.length / itemsPerPage) : 0;
  const [validated, setValidated] = useState(false);

  const handleCloseDialog = () => setShowDialog(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShowDialog = (item: any) => {
    setShowDialog(true);
    setDialogData(item);
  };

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
            <Button
              variant="primary"
              size="sm"
              className="me-2"
              onClick={() => handleShowDialog(item)}
            >
              編輯
            </Button>
            <Button variant="danger" size="sm" onClick={handleShowDialog}>
              刪除
            </Button>
          </td>
        </tr>
      ));
  };

  const handleSubmit = (event: FormEvent) => {
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
          <tbody>{renderTableBody()}</tbody>
        </table>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Modal show={showDialog} onHide={handleCloseDialog} centered>
        <Modal.Header closeButton>
          <Modal.Title>訂單編號 ： ROF-4371</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                訂購人
              </Form.Label>
              <Col sm="9">
                <Form.Control plaintext defaultValue="John Johnson" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                訂單金額
              </Form.Label>
              <Col sm="9">
                <Form.Control plaintext type="text" defaultValue="7964" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                運送地址
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  required
                  type="text"
                  defaultValue="台灣省桃園市大溪區和一路20號"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                運送狀態
              </Form.Label>
              <Col sm="9">
                <Form.Select aria-label="Default select example" value="2">
                  <option>---</option>
                  <option value="1">備貨中</option>
                  <option value="2">運送中</option>
                  <option value="3">已完成</option>
                  <option value="3">已取消訂單</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDialog}>
            取消
          </Button>
          <Button variant="primary" onClick={handleCloseDialog}>
            儲存
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
