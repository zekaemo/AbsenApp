CREATE DATABASE absensi_db;
USE absensi_db;

CREATE TABLE absensi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    waktu_masuk DATETIME DEFAULT NULL,
    waktu_keluar DATETIME DEFAULT NULL,
    status VARCHAR(20) DEFAULT NULL
);

