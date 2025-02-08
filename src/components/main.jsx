import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./navbar.css";
import "./home.css";
import "./tasks.css";
import "./groups.css";
import "./leaderboard.css";
import "./profile.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
