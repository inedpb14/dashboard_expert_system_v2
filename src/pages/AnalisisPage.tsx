import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardCard from '../components/DashboardCard';
import PageHeader from '../components/PageHeader';
import {
  ANALYSIS_DATA,
  PIE_CHART_DATA as defaultPieData,
} from "../../constants";
import type { AnalysisRecord } from "../../types";

const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
            {payload.map((entry: any, index: number) => (
                <li key={`item-${index}`} className="flex items-center text-sm text-slate-600">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                    {entry.value} ({entry.payload.value})
                </li>
            ))}
        </ul>
    );
};


const AnalisisPage: React.FC = () => {
    const [filterKelas, setFilterKelas] = useState<number | null>(null);

    const filteredData = useMemo(() => {
        if (!filterKelas) return ANALYSIS_DATA;
        return ANALYSIS_DATA.filter(item => item.kelas === filterKelas);
    }, [filterKelas]);

    const { pieChartData, mostRecommended } = useMemo(() => {
        const recommendationCounts = filteredData.reduce((acc, record) => {
            acc[record.recommendation] = (acc[record.recommendation] || 0) + 1;
            return acc;
        }, {} as { [key: string]: number });

        const pieData = Object.entries(recommendationCounts).map(([name, value]) => {
            const defaultEntry = defaultPieData.find(d => d.name.includes(name.split('-')[0]));
            return {
                name,
                value,
                color: defaultEntry ? defaultEntry.color : '#cccccc'
            };
        });

        const topRecommendation = Object.entries(recommendationCounts).sort(([, a], [, b]) => Number(b) - Number(a))[0];
        
        return {
            pieChartData: pieData.length > 0 ? pieData : [],
            mostRecommended: topRecommendation ? { name: topRecommendation[0], count: topRecommendation[1] } : { name: 'N/A', count: 0 }
        };
    }, [filteredData]);

    const getStatusClass = (status: 'Selesai' | 'Diproses') => {
        return status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800';
    };
    
    return (
        <div className="container mx-auto">
            <PageHeader title="Analisis" />
            
            <div className="mb-6 flex items-center space-x-4">
                 <span className="font-semibold text-slate-700">Filter Kelas:</span>
                 <button onClick={() => setFilterKelas(null)} className={`px-4 py-2 rounded-lg text-sm font-medium ${!filterKelas ? 'bg-emerald-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}>Semua</button>
                 <button onClick={() => setFilterKelas(5)} className={`px-4 py-2 rounded-lg text-sm font-medium ${filterKelas === 5 ? 'bg-emerald-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}>Kelas 5</button>
                 <button onClick={() => setFilterKelas(6)} className={`px-4 py-2 rounded-lg text-sm font-medium ${filterKelas === 6 ? 'bg-emerald-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}>Kelas 6</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <DashboardCard title="Distribusi Rekomendasi" className="lg:col-span-2">
                     <div style={{ width: '100%', height: 300 }}>
                        {pieChartData.length > 0 ? (
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={pieChartData} cx="50%" cy="50%" labelLine={false} outerRadius={80} innerRadius={60} fill="#8884d8" dataKey="value" paddingAngle={5}>
                                        {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                    </Pie>
                                    <Tooltip contentStyle={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}/>
                                    <Legend content={<CustomLegend />} />
                                </PieChart>
                            </ResponsiveContainer>
                         ) : (
                            <div className="flex items-center justify-center h-full text-slate-500">Tidak ada data untuk ditampilkan.</div>
                         )}
                    </div>
                </DashboardCard>
                <DashboardCard className="flex flex-col items-center justify-center text-center">
                    <p className="text-slate-500 font-medium">Model Paling Direkomendasikan</p>
                    <p className="text-2xl font-bold text-emerald-600 mt-2">{mostRecommended.name}</p>
                    <p className="text-4xl font-bold text-slate-800 mt-4">{mostRecommended.count}</p>
                    <p className="text-slate-500 text-sm">Konsultasi</p>
                </DashboardCard>
            </div>

            <DashboardCard title="Daftar Siswa">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nama</th>
                                <th scope="col" className="px-6 py-3">Kelas</th>
                                <th scope="col" className="px-6 py-3">Tanggal</th>
                                <th scope="col" className="px-6 py-3">Subjek</th>
                                <th scope="col" className="px-6 py-3">Rekomendasi</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((record: AnalysisRecord) => (
                                <tr key={record.id} className="bg-white border-b hover:bg-slate-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{record.name}</th>
                                    <td className="px-6 py-4">{record.kelas}</td>
                                    <td className="px-6 py-4">{record.date}</td>
                                    <td className="px-6 py-4">{record.subject}</td>
                                    <td className="px-6 py-4">{record.recommendation}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(record.status)}`}>{record.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>

        </div>
    );
};

export default AnalisisPage;
