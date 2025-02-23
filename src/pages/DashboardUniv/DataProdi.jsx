import React, { useState } from "react";

const DataProdi = () => {
    // Contoh data program studi
    const [dataProdi, setDataProdi] = useState([
        { id: 1, nama: "Teknik Informatika", kode: "TI", jumlahMataKuliah: 12 },
        { id: 2, nama: "Sistem Informasi", kode: "SI", jumlahMataKuliah: 10 },
        { id: 3, nama: "Ilmu Komputer", kode: "IK", jumlahMataKuliah: 14 },
    ]);

    // Fungsi untuk menghapus data prodi
    const handleDelete = (id) => {
        setDataProdi(dataProdi.filter((prodi) => prodi.id !== id));
    };

    // Fungsi untuk menambah data prodi (misalnya dengan menambahkan dummy data)
    const handleAdd = () => {
        const newProdi = { id: dataProdi.length + 1, nama: "New Prodi", kode: "NP", jumlahMataKuliah: 5 };
        setDataProdi([...dataProdi, newProdi]);
    };

    // Fungsi untuk edit data prodi (hanya untuk contoh edit sederhana)
    const handleEdit = (id) => {
        const newProdi = { ...dataProdi.find((prodi) => prodi.id === id), nama: "Updated Prodi" };
        setDataProdi(dataProdi.map((prodi) => (prodi.id === id ? newProdi : prodi)));
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6 ">
            {/* Header Section */}
            <header className="flex  justify-end  mb-6">

                <button
                    onClick={handleAdd}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                    Tambah Prodi
                </button>
            </header>

            {/* Tabel Data Program Studi */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-700">No</th>
                            <th className="px-4 py-2 text-left text-gray-700">Nama Program Studi</th>
                            <th className="px-4 py-2 text-left text-gray-700">Kode Prodi</th>
                            <th className="px-4 py-2 text-left text-gray-700">Jumlah Mata Kuliah</th>
                            <th className="px-4 py-2 text-left text-gray-700">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataProdi.map((prodi, index) => (
                            <tr key={prodi.id} className="border-t">
                                <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                                <td className="px-4 py-2 text-gray-700">{prodi.nama}</td>
                                <td className="px-4 py-2 text-gray-700">{prodi.kode}</td>
                                <td className="px-4 py-2 text-gray-700">{prodi.jumlahMataKuliah}</td>
                                <td className="px-4 py-2 text-gray-700 flex gap-2">
                                    <button
                                        onClick={() => handleEdit(prodi.id)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(prodi.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataProdi;
