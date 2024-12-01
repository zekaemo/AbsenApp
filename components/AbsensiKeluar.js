import React, { useState } from "react";
import axios from "axios";
import "./styles/AbsensiKeluar.css";

function AbsensiKeluar() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/absen-keluar", { username });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal melakukan absensi keluar.");
    }
  };

  return (
    <div className="absensi-keluar-container">
      <h1>Absensi Keluar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Absen Keluar</button>
      </form>
    </div>
  );
}

export default AbsensiKeluar;
