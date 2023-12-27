import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../../assets/components/admin/login.scss";
import { FaUser, FaLock, FaCheck } from "react-icons/fa6";
import { setLoggedIn } from "../../slice/admin/loginSlice";

export default function AdminLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [isPending, setIsPending] = useState(false);
  const [isGranted, setIsGranted] = useState(false);
  // const formRef = useRef<HTMLFormElement>(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data, [name]: value });
  };

  const signIn = async () => {
    setIsPending(true);
    try {
      axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

      const res = await axios.post("/v2/admin/signin", data);

      if (res) {
        axios.defaults.headers.common["Authorization"] = res.data.token;
        dispatch(setLoggedIn(true));
        navigate("/admin");
      }

      setIsPending(false);
      setIsGranted(true);
    } catch (error) {
      setIsPending(false);
      setIsGranted(false);
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="login-header">
          <h2 className="login-title">SIGN IN</h2>
        </div>

        <div className="login-body">
          <label className="form-input">
            <FaUser className="form-input_icon" />
            <input
              name="username"
              type="text"
              autoFocus={true}
              onChange={handleChange}
              required
            />
            <span className="label">Username</span>
            <span className="underline"></span>
          </label>

          <label className="form-input">
            <FaLock className="form-input_icon" />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <span className="label">Password</span>
            <div className="underline"></div>
          </label>

          <div className="submit-container d-flex justify-content-end">
            <div
              id="submit"
              className={`btn btn-irenic ${
                isPending ? "pending" : ""
              } ${isGranted ? "granted" : ""}`}
              onClick={signIn}
            >
              <span>SIGN IN</span>
            </div>
            <div className="login-pending">
              <div className="spinner">
                <span className="dot1"></span>
                <span className="dot2"></span>
              </div>

              <div className="login-granted-content">
                <FaCheck className="icon" color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
