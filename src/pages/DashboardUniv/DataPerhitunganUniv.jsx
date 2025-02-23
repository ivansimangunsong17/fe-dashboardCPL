import React, { useState } from "react";

const DataPerhitunganUniv = () => {
    // Data dummy untuk hasil perhitungan berdasarkan program studi
    const hasilPerhitungan = [
        {
            id: 1,
            prodi: "Teknik Informatika",
            mataKuliah: "Algoritma",
            capaian: 80,
        },
        {
            id: 2,
            prodi: "Teknik Informatika",
            mataKuliah: "Basis Data",
            capaian: 75,
        },
        {
            id: 3,
            prodi: "Sistem Informasi",
            mataKuliah: "Jaringan Komputer",
            capaian: 85,
        },
        {
            id: 4,
            prodi: "Sistem Informasi",
            mataKuliah: "Keamanan Sistem",
            capaian: 78,
        },
        {
            id: 5,
            prodi: "Ilmu Komputer",
            mataKuliah: "Matematika Komputer",
            capaian: 90,
        },
        {
            id: 6,
            prodi: "Ilmu Komputer",
            mataKuliah: "Struktur Data",
            capaian: 88,
        },
    ];

    const [selectedItem, setSelectedItem] = useState(null);

    const handleRowClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <header className="flex justify-end mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">📊 Hasil Perhitungan</h1>
            </header>

            {/* Tabel Hasil Perhitungan */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-700">No</th>
                            <th className="px-4 py-2 text-left text-gray-700">Program Studi</th>
                            <th className="px-4 py-2 text-left text-gray-700">Mata Kuliah</th>
                            <th className="px-4 py-2 text-left text-gray-700">Capaian (%)</th>
                            <th className="px-4 py-2 text-left text-gray-700">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hasilPerhitungan.map((item, index) => (
                            <tr
                                key={item.id}
                                className="border-t cursor-pointer hover:bg-gray-100"
                                onClick={() => handleRowClick(item)}
                            >
                                <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                                <td className="px-4 py-2 text-gray-700">{item.prodi}</td>
                                <td className="px-4 py-2 text-gray-700">{item.mataKuliah}</td>
                                <td className="px-4 py-2 text-gray-700">{item.capaian}%</td>
                                <td className="px-4 py-2 text-blue-500">Lihat Detail</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tampilkan Detail Hasil Perhitungan jika item dipilih */}
            {selectedItem && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Detail Hasil Perhitungan
                    </h2>
                    <p className="text-lg text-gray-700">
                        <strong>Program Studi:</strong> {selectedItem.prodi}
                    </p>
                    <p className="text-lg text-gray-700">
                        <strong>Mata Kuliah:</strong> {selectedItem.mataKuliah}
                    </p>
                    <p className="text-lg text-gray-700">
                        <strong>Capaian (%):</strong> {selectedItem.capaian}%
                    </p>
                </div>
            )}
        </div>
    );
};

export default DataPerhitunganUniv;
