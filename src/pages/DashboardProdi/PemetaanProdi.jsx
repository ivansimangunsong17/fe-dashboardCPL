import React from "react";

const PemetaanProdi = () => {
    // Data CPL
    const dataCPL = [
        { id: 1, kode: "CPL-1", deskripsi: "Menguasai dasar pemrograman dan algoritma" },
        { id: 2, kode: "CPL-2", deskripsi: "Mampu merancang sistem berbasis web" },
        { id: 3, kode: "CPL-3", deskripsi: "Memiliki kemampuan analisis data" },
    ];

    // Data CPMK yang terkait dengan CPL
    const dataCPMK = [
        { id: 1, kode: "CPMK-1", deskripsi: "Memahami konsep dasar pemrograman", cplId: 1 },
        { id: 2, kode: "CPMK-2", deskripsi: "Mengimplementasikan algoritma dalam kode", cplId: 1 },
        { id: 3, kode: "CPMK-3", deskripsi: "Membuat aplikasi berbasis web", cplId: 2 },
        { id: 4, kode: "CPMK-4", deskripsi: "Menganalisis dataset menggunakan statistik", cplId: 3 },
    ];

    // Data Mata Kuliah yang terkait dengan CPMK
    const dataMataKuliah = [
        { id: 1, nama: "Pemrograman Dasar", cpmkId: 1 },
        { id: 2, nama: "Struktur Data", cpmkId: 2 },
        { id: 3, nama: "Pemrograman Web", cpmkId: 3 },
        { id: 4, nama: "Analisis Data", cpmkId: 4 },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6">Pemetaan CPL, CPMK, dan Mata Kuliah</h1>

                {/* Tabel CPL */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Daftar Capaian Pembelajaran Lulusan (CPL)</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3 border border-gray-300 text-left">No</th>
                                <th className="p-3 border border-gray-300 text-left">Kode CPL</th>
                                <th className="p-3 border border-gray-300 text-left">Deskripsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataCPL.map((cpl, index) => (
                                <tr key={cpl.id} className="border border-gray-300">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3 font-semibold">{cpl.kode}</td>
                                    <td className="p-3">{cpl.deskripsi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Tabel CPMK */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Daftar Capaian Pembelajaran Mata Kuliah (CPMK)</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3 border border-gray-300 text-left">No</th>
                                <th className="p-3 border border-gray-300 text-left">Kode CPMK</th>
                                <th className="p-3 border border-gray-300 text-left">Deskripsi</th>
                                <th className="p-3 border border-gray-300 text-left">CPL Terkait</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataCPMK.map((cpmk, index) => {
                                const cpl = dataCPL.find((c) => c.id === cpmk.cplId);
                                return (
                                    <tr key={cpmk.id} className="border border-gray-300">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3 font-semibold">{cpmk.kode}</td>
                                        <td className="p-3">{cpmk.deskripsi}</td>
                                        <td className="p-3">{cpl ? cpl.kode : "-"}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Tabel Mata Kuliah */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Pemetaan CPMK terhadap Mata Kuliah</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3 border border-gray-300 text-left">No</th>
                                <th className="p-3 border border-gray-300 text-left">Mata Kuliah</th>
                                <th className="p-3 border border-gray-300 text-left">CPMK Terkait</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataMataKuliah.map((mk, index) => {
                                const cpmk = dataCPMK.find((c) => c.id === mk.cpmkId);
                                return (
                                    <tr key={mk.id} className="border border-gray-300">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3 font-semibold">{mk.nama}</td>
                                        <td className="p-3">{cpmk ? cpmk.kode : "-"}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PemetaanProdi;
