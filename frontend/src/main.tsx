import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
