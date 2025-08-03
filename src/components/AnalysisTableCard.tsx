
import React from 'react';
import { ANALYSIS_DATA } from "../../constants";
import type { AnalysisRecord } from "../../types";
import DashboardCard from './DashboardCard';

const AnalysisTableCard: React.FC = () => {

    const getStatusClass = (status: 'Selesai' | 'Diproses') => {
        return status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800';
    };

    return (
        <DashboardCard title="Analisis Terakhir" action={
            <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-800">Lihat Semua</button>
        }>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nama</th>
                            <th scope="col" className="px-6 py-3">Tanggal</th>
                            <th scope="col" className="px-6 py-3">Subjek</th>
                            <th scope="col" className="px-6 py-3">Rekomendasi</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ANALYSIS_DATA.slice(0, 10).map((record: AnalysisRecord) => (
                            <tr key={record.id} className="bg-white border-b hover:bg-slate-50">
                                <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                                    {record.name}
                                </th>
                                <td className="px-6 py-4">{record.date}</td>
                                <td className="px-6 py-4">{record.subject}</td>
                                <td className="px-6 py-4">{record.recommendation}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(record.status)}`}>
                                        {record.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardCard>
    );
};

export default AnalysisTableCard;
