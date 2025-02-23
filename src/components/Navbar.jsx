import React, { useState, useRef, useEffect } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";

const Navbar = ({ name = "Admin", page }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Menutup dropdown jika klik di luar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full">
            <div className="navbar bg-white border-b-2 shadow-md px-5 py-3 flex justify-between items-center">
                {/* Judul Halaman Otomatis dari Props */}
                <div className="text-xl font-bold text-gray-700">{page}</div>

                {/* User Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-all"
                    >
                        <span className="font-semibold">Hallo, {name}</span>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="User"
                            className="w-8 h-8 rounded-full border"
                        />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-40 w-48 bg-white border rounded-xl shadow-2xl">
                            <ul className="py-2">
                                <li>
                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all">
                                        <FiUser />
                                        Edit Profil
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-100 transition-all">
                                        <FiLogOut />
                                        Keluar
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
