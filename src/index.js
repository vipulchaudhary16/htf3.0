import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserState from "./context/UserState";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserState>
);
