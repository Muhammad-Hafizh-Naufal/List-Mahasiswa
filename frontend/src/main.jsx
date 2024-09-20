import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; /* Memanggil komponen App yang berisikan route */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> {/* Memanggil komponen App yang berisikan route */}
  </StrictMode>
);
