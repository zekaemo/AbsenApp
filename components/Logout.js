import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or token
    alert("Berhasil logout!");
    navigate("/");
  };

  return (
    <div className="logout-container">
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
