import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { Provider } from "react-alert";
import AlertTemplate from "./components/AlertTemplate";

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  position: "top center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

root.render(
  <React.StrictMode>
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  </React.StrictMode>
);
