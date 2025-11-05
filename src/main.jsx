import React from "react";
import ReactDOM from "react-dom/client";
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import "normalize.css/normalize.css";
import "./assets/styles/styles.scss";
import "./assets/scrollReveal";
import App from "./components/App";

const jsx = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsx);
