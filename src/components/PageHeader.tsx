import React from 'react';

interface PageHeaderProps {
    title: string;
    buttonText?: string;
    buttonIcon?: React.ReactNode;
    onButtonClick?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, buttonText, buttonIcon, onButtonClick }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-800 mb-4 md:mb-0">{title}</h1>
            {buttonText && onButtonClick && (
                 <button 
                    onClick={onButtonClick} 
                    className="flex items-center justify-center bg-emerald-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm"
                >
                    {buttonIcon}
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default PageHeader;
