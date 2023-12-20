import { TableProps } from "../../interface/admin";

export default function Table(props: TableProps) {
  const { headerCol, orders } = props;
  return (
    <table className="table table-striped table-responsive table-hover align-middle mt-4">
      <thead className="bg-light">
        <tr>
          {headerCol.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders.map((item) => (
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
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td>{item.sold}</td>
            <td>
              <button className="btn btn-primary btn-sm">查看</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
