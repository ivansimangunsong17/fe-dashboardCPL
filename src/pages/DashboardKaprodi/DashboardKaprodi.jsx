import React from "react";

const DashboardKaprodi = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Total Mahasiswa</h3>
                    <p className="text-2xl">1,230</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Total Mata Kuliah</h3>
                    <p className="text-2xl">45</p>
                </div>
                <div className="bg-purple-500 text-white p-4 rounded-md">
                    <h3 className="text-lg font-semibold">CPL Tercapai</h3>
                    <p className="text-2xl">87%</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardKaprodi;
