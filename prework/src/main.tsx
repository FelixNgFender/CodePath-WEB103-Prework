import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "@picocss/pico/css/pico.min.css";
import "material-icons/iconfont/round.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
