
import React from 'react';

interface DashboardCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className = '', action }) => {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-md h-full ${className}`}>
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          {action}
        </div>
      )}
      {children}
    </div>
  );
};

export default DashboardCard;
