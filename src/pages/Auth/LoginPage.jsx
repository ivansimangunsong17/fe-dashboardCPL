import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoUnila from "../../assets/LogoUnila.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const roles = {
            "admin@univ.com": "universitas",
            "admin@prodi.com": "admin-prodi",
            "kaprodi@prodi.com": "kaprodi",
            "dosen@prodi.com": "dosen",
        };

        const role = roles[email];
        if (role) {
            navigate(`/dashboard-${role}`);
        } else {
            alert("Email atau password salah!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <img
                        src={LogoUnila}
                        alt="Education Logo"
                        className="w-20 h-20"
                    />
                </div>
                <h2 className="text-3xl font-bold text-center text-blue-600 mt-8 mb-4">
                    Login Portal
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Sistem Informasi Perhitungan CPL
                </p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="contoh: user@domain.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block  text-sm font-medium mb-2 text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Masukkan password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center text-sm text-gray-500 mt-4">
                    Belum punya akun? <a href="#" className="text-blue-600 hover:underline">Hubungi Admin</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
