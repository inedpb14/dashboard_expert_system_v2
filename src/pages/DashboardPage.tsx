import React from 'react';
import AdminCard from '../components/AdminCard';
import DateCard from '../components/DateCard';
import InfoCards from '../components/InfoCards';
import PieChartCard from '../components/PieChartCard';
import AnalysisTableCard from '../components/AnalysisTableCard';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 lg:col-span-2">
          <AdminCard />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <DateCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <InfoCards />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 h-full">
            <PieChartCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <AnalysisTableCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
