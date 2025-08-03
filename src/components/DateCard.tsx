
import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';

const DateCard: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const day = currentDate.toLocaleDateString('id-ID', { weekday: 'long' });
  const date = currentDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <DashboardCard className="flex flex-col items-center justify-center text-center bg-white">
        <div className="text-slate-500 text-sm font-medium">{day}</div>
        <div className="text-4xl font-bold text-slate-800 mt-2">{currentDate.getDate()}</div>
        <div className="text-slate-600 font-medium mt-1">{currentDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</div>
    </DashboardCard>
  );
};

export default DateCard;
