import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SIDEBAR_LINKS } from "../../constants";
import { ChevronDownIcon } from "../../constants";

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (name: string) => {
        setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const isParentActive = (path: string) => {
        return location.pathname.startsWith(path);
    };

    return (
        <aside className="w-64 flex-shrink-0 bg-white shadow-lg hidden lg:block">
            <div className="flex flex-col h-full">
                <div className="h-20 flex items-center justify-center border-b border-slate-200">
                     <div className="flex items-center space-x-3">
                        <div className="bg-emerald-500 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104l-1.422 2.844a2.25 2.25 0 01-1.99 1.26H3.75l2.48 1.804a2.25 2.25 0 01.764 2.522l-.948 2.926 2.48-1.804a2.25 2.25 0 012.232 0l2.48 1.804-.948-2.926a2.25 2.25 0 01.764-2.522l2.48-1.804h-2.588a2.25 2.25 0 01-1.99-1.26L9.75 3.104zM14.25 12l-1.422 2.844a2.25 2.25 0 01-1.99 1.26h-2.588l2.48 1.804a2.25 2.25 0 01.764 2.522l-.948 2.926 2.48-1.804a2.25 2.25 0 012.232 0l2.48 1.804-.948-2.926a2.25 2.25 0 01.764-2.522l2.48-1.804h-2.588a2.25 2.25 0 01-1.99-1.26L14.25 12z"></path></svg>
                        </div>
                        <span className="text-xl font-bold text-slate-800">Sistem Pakar</span>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-6">
                    <ul>
                        {SIDEBAR_LINKS.map((link) => (
                            <li key={link.name} className="mb-2">
                                {link.children ? (
                                    <>
                                        <button onClick={() => toggleMenu(link.name)} className={`w-full flex items-center justify-between space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isParentActive(link.path) ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>
                                            <div className="flex items-center space-x-3">
                                                {link.icon}
                                                <span className="font-medium">{link.name}</span>
                                            </div>
                                            <ChevronDownIcon className={`w-5 h-5 transition-transform ${openMenus[link.name] || isParentActive(link.path) ? 'rotate-180' : ''}`} />
                                        </button>
                                        {(openMenus[link.name] || isParentActive(link.path)) && (
                                            <ul className="pl-6 mt-2">
                                                {link.children.map(child => (
                                                    <li key={child.name} className="mb-1">
                                                        <Link to={child.path} className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${location.pathname === child.path ? 'text-emerald-600 font-semibold' : 'text-slate-500 hover:text-slate-800'}`}>
                                                            <span>{child.name}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link to={link.path} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${location.pathname === link.path ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>
                                        {link.icon}
                                        <span className="font-medium">{link.name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                 <div className="p-4 border-t border-slate-200">
                    <div className="bg-slate-100 rounded-lg p-4 text-center">
                        <h4 className="font-semibold text-slate-800">Butuh Bantuan?</h4>
                        <p className="text-sm text-slate-500 mt-1">Silakan cek dokumentasi kami</p>
                        <button className="mt-4 w-full bg-emerald-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors">Dokumentasi</button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
