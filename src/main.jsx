import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css/normalize.css";
import "./assets/styles/styles.scss";
import "./assets/scrollReveal";
import App from "./components/App";


console.log("here")
const jsx = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsx);
