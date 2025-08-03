
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PIE_CHART_DATA } from '../../constants';
import DashboardCard from './DashboardCard';
import type { PieChartData } from "../../types";

const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
            {payload.map((entry: any, index: number) => (
                <li key={`item-${index}`} className="flex items-center text-sm text-slate-600">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};


const PieChartCard: React.FC = () => {
    return (
        <DashboardCard title="Rekomendasi Model Pembelajaran">
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={PIE_CHART_DATA}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            innerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                            paddingAngle={5}
                        >
                            {PIE_CHART_DATA.map((entry: PieChartData, index: number) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '0.5rem',
                            }}
                        />
                        <Legend content={<CustomLegend />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </DashboardCard>
    );
};

export default PieChartCard;
