import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./src/components/Sidebar";
import Header from "./src/components/Header";
import DashboardPage from "./src/pages/DashboardPage";
import AnalisisPage from "./src/pages/AnalisisPage";
import RiwayatPage from "./src/pages/RiwayatPage";
import KarakteristikPage from "./src/pages/KarakteristikPage";
import AturanPage from "./src/pages/AturanPage";
import RekomendasiPage from "./src/pages/RekomendasiPage";
import PengaturanPage from "./src/pages/PengaturanPage";

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/analisis" element={<AnalisisPage />} />
            <Route path="/riwayat" element={<RiwayatPage />} />
            <Route
              path="/basis-aturan/karakteristik"
              element={<KarakteristikPage />}
            />
            <Route path="/basis-aturan/aturan" element={<AturanPage />} />
            <Route
              path="/basis-aturan/rekomendasi"
              element={<RekomendasiPage />}
            />
            <Route path="/pengaturan" element={<PengaturanPage />} />
            {/* Add a fallback for other pages */}
            <Route
              path="*"
              element={
                <div className="text-center p-10">Halaman tidak ditemukan.</div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
