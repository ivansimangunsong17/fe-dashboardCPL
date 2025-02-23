import React from "react";

const DashboardUniv = () => {
    const dataProdi = [
        { id: 1, nama: "Teknik Informatika", kode: "TI", jumlahMataKuliah: 12, admin: "Dr. Budi Santoso" },
        { id: 2, nama: "Sistem Informasi", kode: "SI", jumlahMataKuliah: 10, admin: "Dr. Siti Aminah" },
        { id: 3, nama: "Ilmu Komputer", kode: "IK", jumlahMataKuliah: 14, admin: "Prof. Daniel" },
    ];

    const dataAkunProdi = [
        { id: 1, nama: "Dr. Budi Santoso", role: "Admin Prodi", email: "budi@unila.ac.id" },
        { id: 2, nama: "Dr. Siti Aminah", role: "Kaprodi", email: "siti@unila.ac.id" },
        { id: 3, nama: "Prof. Daniel", role: "Dosen", email: "daniel@unila.ac.id" },
    ];

    const hasilPerhitungan = [
        { id: 1, prodi: "Teknik Informatika", nilaiCPL: 85, nilaiCPMK: 90, status: "Selesai" },
        { id: 2, prodi: "Sistem Informasi", nilaiCPL: 80, nilaiCPMK: 88, status: "Selesai" },
        { id: 3, prodi: "Ilmu Komputer", nilaiCPL: 88, nilaiCPMK: 92, status: "Proses" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Universitas</h1>

            {/* Grid Container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card Program Studi */}
                {dataProdi.map((prodi) => (
                    <div key={prodi.id} className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">{prodi.nama}</h3>
                        <p className="text-gray-500">Kode: {prodi.kode}</p>
                        <p className="text-gray-500">Jumlah Mata Kuliah: {prodi.jumlahMataKuliah}</p>
                        <p className="mt-2 text-sm text-gray-600">Admin: <span className="font-medium">{prodi.admin}</span></p>
                    </div>
                ))}
            </div>

            {/* Data Akun Admin Program Studi */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Data Akun Admin Program Studi</h2>
                <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden shadow">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-700">Nama</th>
                            <th className="px-4 py-2 text-left text-gray-700">Role</th>
                            <th className="px-4 py-2 text-left text-gray-700">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAkunProdi.map((akun) => (
                            <tr key={akun.id} className="border-t hover:bg-gray-100 transition">
                                <td className="px-4 py-2">{akun.nama}</td>
                                <td className="px-4 py-2">{akun.role}</td>
                                <td className="px-4 py-2">{akun.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Hasil Perhitungan */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Hasil Perhitungan Capaian Pembelajaran Lulusan</h2>
                <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden shadow">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-700">Program Studi</th>
                            <th className="px-4 py-2 text-left text-gray-700">Nilai CPL</th>
                            <th className="px-4 py-2 text-left text-gray-700">Nilai CPMK</th>
                            <th className="px-4 py-2 text-left text-gray-700">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hasilPerhitungan.map((hasil) => (
                            <tr key={hasil.id} className="border-t hover:bg-gray-100 transition">
                                <td className="px-4 py-2">{hasil.prodi}</td>
                                <td className="px-4 py-2">{hasil.nilaiCPL}</td>
                                <td className="px-4 py-2">{hasil.nilaiCPMK}</td>
                                <td className="px-4 py-2">
                                    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${hasil.status === "Selesai" ? "bg-green-500" : "bg-yellow-500"
                                        }`}>
                                        {hasil.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardUniv;
