import React from "react";
import { Link } from "react-router-dom";
import "./styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <nav>
        <Link to="/absensi-masuk">Absensi Masuk</Link>
        <Link to="/absensi-keluar">Absensi Keluar</Link>
        <Link to="/riwayat-absensi">Riwayat Absensi</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
