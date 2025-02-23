"use client";
import React, { useState } from "react";
import Modal from "../../../components/Modal";

const ProdiPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); // 'edit', 'tambah', 'hapus'
    const [selectedProdi, setSelectedProdi] = useState(null);
    const [formData, setFormData] = useState({ nama: "", kode: "" });

    // Data Dummy Prodi
    const [prodiList, setProdiList] = useState([
        { id: 1, nama: "Teknik Informatika", kode: "TI01" },
        { id: 2, nama: "Sistem Informasi", kode: "SI02" },
    ]);

    // Handle modal terbuka
    const openModal = (type, prodi = null) => {
        setModalType(type);
        setSelectedProdi(prodi);
        if (type === "edit" && prodi) {
            setFormData({ nama: prodi.nama, kode: prodi.kode });
        } else {
            setFormData({ nama: "", kode: "" });
        }
        setModalOpen(true);
    };

    // Handle input form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Menghentikan default form submission behavior
        if (modalType === "tambah") {
            const newProdi = { id: Date.now(), ...formData };
            setProdiList([...prodiList, newProdi]);
        } else if (modalType === "edit" && selectedProdi) {
            setProdiList(prodiList.map((p) =>
                p.id === selectedProdi.id ? { ...p, ...formData } : p
            ));
        }
        setModalOpen(false);
    };

    // Handle hapus data
    const handleDelete = () => {
        setProdiList(prodiList.filter((p) => p.id !== selectedProdi.id));
        setModalOpen(false);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Daftar Program Studi</h1>

            {/* Tombol Tambah */}
            <button
                onClick={() => openModal("tambah")}
                className="mb-4 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-200 shadow-md"
            >
                + Tambah Prodi
            </button>

            {/* Tabel Data Prodi */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="border p-3">No</th>
                            <th className="border p-3">Nama Prodi</th>
                            <th className="border p-3">Kode</th>
                            <th className="border p-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodiList.map((prodi, index) => (
                            <tr key={prodi.id} className="hover:bg-gray-50 transition">
                                <td className="border p-3 text-center">{index + 1}</td>
                                <td className="border p-3">{prodi.nama}</td>
                                <td className="border p-3">{prodi.kode}</td>
                                <td className="border p-3 flex justify-center gap-3">
                                    <button
                                        onClick={() => openModal("edit", prodi)}
                                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => openModal("hapus", prodi)}
                                        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal untuk Tambah/Edit */}
            <Modal
                isOpen={modalOpen && (modalType === "tambah" || modalType === "edit")}
                onClose={() => setModalOpen(false)}
                title={modalType === "tambah" ? "Tambah Prodi" : "Edit Prodi"}
                onSubmit={handleSubmit}
                modalType={modalType} // Menambahkan prop modalType
            >
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Nama Prodi</label>
                        <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Kode Prodi</label>
                        <input
                            type="text"
                            name="kode"
                            value={formData.kode}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                </div>
            </Modal>

            {/* Modal Konfirmasi Hapus */}
            <Modal
                isOpen={modalOpen && modalType === "hapus"}
                onClose={() => setModalOpen(false)}
                title="Konfirmasi Hapus"
                onSubmit={handleDelete}
                modalType="hapus" // Menambahkan prop modalType
            >
                <p className="text-gray-700">
                    Apakah yakin ingin menghapus <strong>{selectedProdi?.nama}</strong>?
                </p>
            </Modal>
        </div>
    );
};

export default ProdiPage;
