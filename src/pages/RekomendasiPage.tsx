import React, { useState, useMemo } from 'react';
import DashboardCard from '../components/DashboardCard';
import PageHeader from '../components/PageHeader';
import Modal from '../components/Modal';
import { REKOMENDASI_DATA } from "../../constants";
import type { Rekomendasi } from "../../types";
import { PencilIcon, TrashIcon, PlusIcon } from "../../constants";

const RekomendasiPage: React.FC = () => {
    const [items, setItems] = useState<Rekomendasi[]>(REKOMENDASI_DATA);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<Rekomendasi | null>(null);

    const filteredItems = useMemo(() => {
        return items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.kode.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, items]);

    const handleOpenModal = (item: Rekomendasi | null = null) => {
        setCurrentItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentItem(null);
    };

    const handleSave = (itemData: Omit<Rekomendasi, 'id'>) => {
        if (currentItem) {
            setItems(items.map(i => i.id === currentItem.id ? { ...i, ...itemData } : i));
        } else {
            const newItem: Rekomendasi = { id: Date.now().toString(), ...itemData };
            setItems([...items, newItem]);
        }
        handleCloseModal();
    };
    
    const handleDelete = (id: string) => {
        if(window.confirm('Apakah Anda yakin ingin menghapus item ini?')) {
            setItems(items.filter(i => i.id !== id));
        }
    };

    return (
        <div className="container mx-auto">
            <PageHeader title="Kelola Rekomendasi" onButtonClick={() => handleOpenModal()} buttonIcon={<PlusIcon className="w-5 h-5 mr-2"/>} buttonText="Tambah Baru" />
            
            <DashboardCard>
                <div className="mb-4">
                     <input
                        type="text"
                        placeholder="Cari berdasarkan nama atau kode..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/3 pl-4 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Kode</th>
                                <th scope="col" className="px-6 py-3">Nama Rekomendasi</th>
                                <th scope="col" className="px-6 py-3">Deskripsi</th>
                                <th scope="col" className="px-6 py-3 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map((item) => (
                                <tr key={item.id} className="bg-white border-b hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{item.kode}</td>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.description}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => handleOpenModal(item)} className="p-2 text-slate-500 hover:text-emerald-600"><PencilIcon className="w-5 h-5" /></button>
                                        <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-500 hover:text-red-600"><TrashIcon className="w-5 h-5" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
            
            {isModalOpen && (
                <Modal title={currentItem ? 'Edit Rekomendasi' : 'Tambah Rekomendasi'} onClose={handleCloseModal}>
                    <RekomendasiForm currentItem={currentItem} onSave={handleSave} onClose={handleCloseModal} />
                </Modal>
            )}
        </div>
    );
};

// Form Component for Modal
const RekomendasiForm: React.FC<{currentItem: Rekomendasi | null, onSave: (data: any) => void, onClose: () => void}> = ({ currentItem, onSave, onClose }) => {
    const [kode, setKode] = useState(currentItem?.kode || '');
    const [name, setName] = useState(currentItem?.name || '');
    const [description, setDescription] = useState(currentItem?.description || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ kode, name, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="kode" className="block text-sm font-medium text-slate-700 mb-1">Kode</label>
                <input type="text" id="kode" value={kode} onChange={e => setKode(e.target.value)} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
            </div>
             <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Rekomendasi</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
            </div>
             <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Deskripsi</label>
                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
            </div>
            <div className="flex justify-end space-x-3">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300">Batal</button>
                <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Simpan</button>
            </div>
        </form>
    );
};

export default RekomendasiPage;
