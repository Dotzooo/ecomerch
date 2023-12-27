// axios.ts

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
});

// 定義身份驗證令牌的類型
type AuthToken = string | null;

// 請求攔截器，用於添加身份驗證令牌
instance.interceptors.request.use((config) => {
  const authToken: AuthToken = localStorage.getItem("authToken");
  if (authToken) {
    config.headers.Authorization = `${authToken}`;
  }
  return config;
});

// 響應攔截器，用於全局錯誤處理
instance.interceptors.response.use(
  (response) => {
    const authToken = response.data.token;
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    }

    return response;
  },
  (error) => {
    // 錯誤處理，例如處理網絡錯誤或API響應錯誤
    // 在此處添加全局錯誤處理邏輯
    return Promise.reject(error);
  }
);

export default instance;
