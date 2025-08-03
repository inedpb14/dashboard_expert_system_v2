
import React from 'react';
import { INFO_CARDS_DATA } from "../../constants";

const InfoCard: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-md flex items-center space-x-4">
            <div className={`p-3 rounded-full ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-slate-500">{title}</p>
                <p className="text-2xl font-bold text-slate-800">{value}</p>
            </div>
        </div>
    );
};


const InfoCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {INFO_CARDS_DATA.map((card) => (
        <InfoCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default InfoCards;
