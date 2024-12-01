import React, { useState } from "react";
import axios from "axios";
import "./styles/AbsensiMasuk.css";

function AbsensiMasuk() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/absen-masuk", { username });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal melakukan absensi masuk.");
    }
  };

  return (
    <div className="absensi-masuk-container">
      <h1>Absensi Masuk</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Absen Masuk</button>
      </form>
    </div>
  );
}

export default AbsensiMasuk;