// server.js
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // sesuaikan dengan username MySQL Anda
  password: "", // sesuaikan dengan password MySQL Anda
  database: "absensi_db"
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error("Gagal koneksi ke database:", err);
    return;
  }
  console.log("Terhubung ke database MySQL.");
});

// API untuk absensi masuk
app.post("/api/absen-masuk", (req, res) => {
  const { username } = req.body;
  const query = "INSERT INTO absensi (username, date, status) VALUES (?, NOW(), 'Masuk')";
  
  db.query(query, [username], (err, result) => {
    if (err) {
      console.error("Gagal absen masuk:", err);
      return res.status(500).send({ message: "Gagal melakukan absensi masuk." });
    }
    res.status(200).send({ message: "Absensi masuk berhasil!" });
  });
});

// API untuk absensi keluar
app.post("/api/absen-keluar", (req, res) => {
  const { username } = req.body;
  const query = "INSERT INTO absensi (username, date, status) VALUES (?, NOW(), 'Keluar')";
  
  db.query(query, [username], (err, result) => {
    if (err) {
      console.error("Gagal absen keluar:", err);
      return res.status(500).send({ message: "Gagal melakukan absensi keluar." });
    }
    res.status(200).send({ message: "Absensi keluar berhasil!" });
  });
});

// API untuk melihat riwayat absensi
app.get("/api/riwayat-absensi", (req, res) => {
  const query = "SELECT * FROM absensi ORDER BY date DESC";
  
  db.query(query, (err, results) => {
    if (err) {
      console.error("Gagal mengambil riwayat absensi:", err);
      return res.status(500).send({ message: "Gagal mengambil riwayat absensi." });
    }
    res.status(200).send(results);
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
