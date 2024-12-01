import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/RiwayatAbsensi.css";

function RiwayatAbsensi() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/riwayat-absensi");
        setRecords(response.data);
      } catch (error) {
        console.error(error);
        alert("Gagal memuat riwayat absensi.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="riwayat-absensi-container">
      <h1>Riwayat Absensi</h1>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            {record.username} - {record.date} - {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RiwayatAbsensi;
