
import React from 'react';
import DashboardCard from './DashboardCard';

const AdminCard: React.FC = () => {
    return (
        <DashboardCard className="bg-emerald-500 text-white flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold">Selamat Datang, Admin!</h2>
                <p className="mt-2 text-xl font-bold text-stone-700">
                    Ini adalah pusat kendali Sistem Pakar Anda. Anda dapat memulai analisis baru atau mengelola basis aturan dari sini.
                </p>
            </div>
            <div className="mt-6 flex space-x-4">
                <button className="bg-white text-emerald-600 font-semibold py-2 px-5 rounded-lg hover:bg-emerald-50 transition-colors">
                    Mulai Analisis Baru
                </button>
                <button className="bg-emerald-400/50 text-white font-semibold py-2 px-5 rounded-lg hover:bg-emerald-400/80 transition-colors">
                    Kelola Aturan
                </button>
            </div>
        </DashboardCard>
    );
};

export default AdminCard;
