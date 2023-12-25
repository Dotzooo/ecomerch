/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef } from "react";
import axios from "axios";

import "../../assets/components/admin/login.scss";
import { FaUser, FaLock, FaCheck } from "react-icons/fa6";

export default function AdminLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, setIsPending] = useState(false);
  const [isGranted, setIsGranted] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data, [name]: value });
    console.log("data:", data);
  };

  const signIn = async () => {
    try {
      axios.defaults.baseURL = 'https://ec-course-api.hexschool.io';

      const res = await axios.post('/v2/admin/signin', data);
      console.log("success", res);
      // axios.defaults.headers.common['Authorization'] = res?.token
    } catch (error) {
      console.error(error);
    }

    // if (formRef.current && formRef.current.checkValidity()) {
    //   setIsPending(true);
    //   setTimeout(() => {
    //     setIsPending(false);
    //     setIsGranted(true);
    //   }, 1500);
    // }
  };

  return (
    <div className="login">
      <div className="login-header">
        <h2 className="login-title">SIGN IN</h2>
      </div>

      <div className="login-body">
        {/* <form id="form" ref={formRef}> */}
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
        {/* </form> */}

        <div className="submit-container clearfix">
          <div
            id="submit"
            role="button"
            className={`btn btn-irenic float-right ${
              isPending ? "pending" : ""
            } ${isGranted ? "granted" : ""}`}
            tabIndex={1}
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
  );
}
