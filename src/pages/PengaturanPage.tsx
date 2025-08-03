import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import DashboardCard from '../components/DashboardCard';
import { CURRENT_USER, PencilIcon } from "../../constants";

const PengaturanPage: React.FC = () => {
    const [user, setUser] = useState(CURRENT_USER);
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically make an API call to save the user data
        console.log('Saving user data:', user);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setUser(CURRENT_USER);
        setIsEditing(false);
    };

    return (
        <div className="container mx-auto">
            <PageHeader title="Pengaturan Akun" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left side: Profile Information */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                    <DashboardCard title="Informasi Profil" action={
                        !isEditing && (
                            <button onClick={() => setIsEditing(true)} className="flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
                                <PencilIcon className="w-4 h-4 mr-1" />
                                Edit Profil
                            </button>
                        )
                    }>
                        <form onSubmit={handleSave}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                    <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white disabled:bg-slate-100 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">Jabatan</label>
                                    <input type="text" name="role" id="role" value={user.role} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white disabled:bg-slate-100 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                </div>
                                 <div className="col-span-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white disabled:bg-slate-100 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon</label>
                                    <input type="tel" name="phone" id="phone" value={user.phone} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white disabled:bg-slate-100 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                </div>
                                <div className="md:col-span-2">
                                     <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Alamat</label>
                                     <input type="text" name="address" id="address" value={user.address} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white disabled:bg-slate-100 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                </div>
                                <div className="md:col-span-2">
                                     <label htmlFor="bio" className="block text-sm font-medium text-slate-700 mb-1">Bio Singkat</label>
                                     <textarea name="bio" id="bio" rows={4} value={user.bio} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white disabled:bg-slate-100 disabled:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"></textarea>
                                </div>
                            </div>
                             {isEditing && (
                                <div className="flex justify-end space-x-3 mt-6">
                                    <button type="button" onClick={handleCancel} className="px-5 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors font-semibold">Batal</button>
                                    <button type="submit" className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold">Simpan Perubahan</button>
                                </div>
                            )}
                        </form>
                    </DashboardCard>
                </div>

                {/* Right side: Profile Card and Security */}
                <div className="lg:col-span-1 order-1 lg:order-2">
                    <DashboardCard>
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <img src={user.avatarUrl} alt="User Avatar" className="w-24 h-24 rounded-full object-cover ring-4 ring-emerald-200" />
                                <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition-colors" aria-label="Ganti foto profil">
                                    <PencilIcon className="w-4 h-4 text-slate-600" />
                                </button>
                            </div>
                            <h2 className="text-xl font-bold text-slate-800">{user.name}</h2>
                            <p className="text-sm text-slate-500">{user.role}</p>
                        </div>
                        <hr className="my-6 border-slate-200" />
                        <div>
                             <h4 className="text-lg font-bold text-slate-800 mb-4">Keamanan Akun</h4>
                             <form>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="currentPassword" aria-label="Password Lama" className="block text-sm font-medium text-slate-700 mb-1">Password Lama</label>
                                        <input type="password" name="currentPassword" id="currentPassword" placeholder="••••••••" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                    </div>
                                    <div>
                                        <label htmlFor="newPassword" aria-label="Password Baru" className="block text-sm font-medium text-slate-700 mb-1">Password Baru</label>
                                        <input type="password" name="newPassword" id="newPassword" placeholder="••••••••" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword" aria-label="Konfirmasi Password Baru" className="block text-sm font-medium text-slate-700 mb-1">Konfirmasi Password</label>
                                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"/>
                                    </div>
                                </div>
                                <button type="submit" className="mt-6 w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">Ubah Password</button>
                             </form>
                        </div>
                    </DashboardCard>
                </div>
            </div>
        </div>
    );
};

export default PengaturanPage;
