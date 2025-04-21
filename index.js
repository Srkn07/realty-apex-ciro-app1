
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RankingPage from "./RankingPage";
import AdminPanel from "./AdminPanel";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<RankingPage />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
);
