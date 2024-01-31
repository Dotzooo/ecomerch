import { Link } from "react-router-dom";

export default function FrontHeader() {
  return (
    <div className="postion-relative d-flex justify-content-between p-4">
      <div>
        <Link className="me-4" to="/">About</Link>
        <Link to="/">Product</Link>
      </div>
      <div>
        <Link to="/">
          <span>E</span>
          <span>COMERCH</span>
        </Link>
      </div>
      <div>
        <Link className="me-4" to="/">About</Link>
        <Link to="/">Services</Link>
      </div>
    </div>
  );
}
