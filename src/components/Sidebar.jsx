import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import LogoUnila from "../assets/LogoUnila.png";

const Sidebar = ({ menuItems, userEmail }) => {
    const [logoutActive, setLogoutActive] = useState(false);

    return (
        <div className="flex flex-col w-64 min-h-screen bg-blue-400 ">
            {/* Logo & Title */}
            <div className="flex items-center justify-center p-4 ">
                <img src={LogoUnila} alt="Logo" className="w-12" />
                <h1 className="text-xs font-bold ml-3 text-black">
                    Sistem Perhitungan Capaian Pembelajaran Lulusan
                </h1>
            </div>

            {/* Menu Navigasi */}
            <ul className="space-y-2 p-4">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.link}
                            end // Menghindari masalah aktif pada subhalaman
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${isActive
                                    ? "bg-blue-100 text-blue-700 font-semibold shadow-md"
                                    : "text-black hover:bg-blue-50"
                                }`
                            }
                        >
                            <item.icon />
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
           
        </div>
    );
};

export default Sidebar;
