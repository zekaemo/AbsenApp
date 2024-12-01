import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AbsensiMasuk from "./components/AbsensiMasuk";
import AbsensiKeluar from "./components/AbsensiKeluar";
import RiwayatAbsensi from "./components/RiwayatAbsensi";
import './App.css'; // Impor file App.css

function App() {
  // State untuk mengelola tampilan komponen
  const [currentPage, setCurrentPage] = useState('login'); // default ke halaman login

  // Fungsi untuk menangani navigasi antar komponen
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  let pageContent;
  switch (currentPage) {
    case 'dashboard':
      pageContent = <Dashboard navigateTo={navigateTo} />;
      break;
    case 'absensi-masuk':
      pageContent = <AbsensiMasuk navigateTo={navigateTo} />;
      break;
    case 'absensi-keluar':
      pageContent = <AbsensiKeluar navigateTo={navigateTo} />;
      break;
    case 'riwayat-absensi':
      pageContent = <RiwayatAbsensi navigateTo={navigateTo} />;
      break;
    case 'login':
    default:
      pageContent = <Login navigateTo={navigateTo} />;
      break;
  }

  return (
    <div className="App">
      {pageContent}
    </div>
  );
}

export default App;
