import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { HashRouter } from "react-router-dom";
import { IconContext } from "react-icons";

const root = document.getElementById("root");
if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <IconContext.Provider value={{ size: "20px", color: "#000" }}>
      <React.StrictMode>
        <HashRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </HashRouter>
      </React.StrictMode>
    </IconContext.Provider>
  );
} else {
  console.error("Failed to find the root element");
}
