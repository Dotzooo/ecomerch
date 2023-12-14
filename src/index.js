import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { HashRouter } from "react-router-dom";
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IconContext.Provider value={{ size: 20, color: "#000" }}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </IconContext.Provider>
);
