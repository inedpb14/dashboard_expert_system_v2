
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="h-20 flex-shrink-0 bg-white shadow-sm z-10">
            <div className="flex items-center justify-between h-full px-6">
                <div className="flex items-center">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input
                            type="text"
                            placeholder="Cari..."
                            className="w-full max-w-xs pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-5">
                    <button className="relative text-slate-500 hover:text-slate-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="flex items-center space-x-3">
                        <span className="text-right">
                            <span className="block text-sm font-semibold text-slate-800">Admin Utama</span>
                            <span className="block text-xs text-slate-500">Administrator</span>
                        </span>
                        <img
                            src="https://i.pravatar.cc/150?u=admin"
                            alt="Admin profile"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
