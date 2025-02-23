import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { FaHome, FaChartBar, FaUser, FaChartPie } from "react-icons/fa";

const KaprodiPage = () => {
    const location = useLocation();

    const menuItems = [
        { label: "Dashboard", link: "/dashboard-kaprodi", icon: FaHome },
        { label: "Data Program Studi", link: "/dashboard-prodi/data-prodi", icon: FaChartBar },
        { label: "Data Mahasiswa", link: "/dashboard-prodi/data-mahasiswa", icon: FaChartBar },
        { label: "Data Matakuliah", link: "/dashboard-prodi/data-matakuliah", icon: FaChartBar },
        { label: "Pemetaan CPL", link: "/dashboard-prodi/pemetaan-cpl", icon: FaChartBar },
        { label: "Data Akun", link: "/dashboard-prodi/data-akun", icon: FaUser },
        { label: "Hasil Perhitungan", link: "/dashboard-prodi/data-perhitungan", icon: FaChartPie },
    ];

    const currentPage = menuItems.find(item => item.link === location.pathname)?.label || "Dashboard";

    return (
        <div className="flex bg-white">
            {/* Sidebar */}
            <div className="w-64 fixed h-screen bg-gray-800 text-white">
                <Sidebar menuItems={menuItems} userEmail="example@example.com" />
            </div>

            {/* Konten Utama */}
            <div className="flex-1 ml-64 flex flex-col h-screen">
                <Navbar page={currentPage} />
                <div className="flex-1 overflow-y-auto p-5 bg-zinc-200">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default KaprodiPage;
