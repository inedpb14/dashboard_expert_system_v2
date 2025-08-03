import React, { useState, useMemo } from 'react';
import DashboardCard from '../components/DashboardCard';
import PageHeader from '../components/PageHeader';
import { ANALYSIS_DATA } from "../../constants";
import type { AnalysisRecord } from "../../types";

const RiwayatPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        return ANALYSIS_DATA.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const getStatusClass = (status: 'Selesai' | 'Diproses') => {
        return status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800';
    };

    return (
        <div className="container mx-auto">
            <PageHeader title="Riwayat Konsultasi" />
            
            <DashboardCard>
                <div className="mb-4">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input
                            type="text"
                            placeholder="Cari berdasarkan nama siswa..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-1/3 pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Nama</th>
                                <th scope="col" className="px-6 py-3">Kelas</th>
                                <th scope="col" className="px-6 py-3">Tanggal</th>
                                <th scope="col" className="px-6 py-3">Subjek</th>
                                <th scope="col" className="px-6 py-3">Rekomendasi</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? filteredData.map((record: AnalysisRecord) => (
                                <tr key={record.id} className="bg-white border-b hover:bg-slate-50">
                                    <td className="px-6 py-4">{record.id}</td>
                                    <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{record.name}</th>
                                    <td className="px-6 py-4">{record.kelas}</td>
                                    <td className="px-6 py-4">{record.date}</td>
                                    <td className="px-6 py-4">{record.subject}</td>
                                    <td className="px-6 py-4">{record.recommendation}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(record.status)}`}>{record.status}</span>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={7} className="text-center py-10 text-slate-500">Tidak ada data ditemukan.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
        </div>
    );
};

export default RiwayatPage;
