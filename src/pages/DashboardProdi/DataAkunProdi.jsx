import React, { useState } from "react";

const DataAkunProdi = () => {
  // Contoh data akun admin program studi
  const [dataAkun, setDataAkun] = useState([
    { id: 1, email: "admin1@unila.ac.id", nama: "Admin Program Studi TI" },
    { id: 2, email: "admin2@unila.ac.id", nama: "Admin Program Studi SI" },
    { id: 3, email: "admin3@unila.ac.id", nama: "Admin Program Studi IK" },
  ]);

  // Fungsi untuk menghapus data akun
  const handleDelete = (id) => {
    setDataAkun(dataAkun.filter((akun) => akun.id !== id));
  };

  // Fungsi untuk menambah data akun
  const handleAdd = () => {
    const newAkun = {
      id: dataAkun.length + 1,
      email: "newadmin@unila.ac.id",
      nama: "Admin Program Studi Baru",
    };
    setDataAkun([...dataAkun, newAkun]);
  };

  // Fungsi untuk edit data akun (hanya contoh edit sederhana)
  const handleEdit = (id) => {
    const newAkun = { ...dataAkun.find((akun) => akun.id === id), nama: "Updated Admin" };
    setDataAkun(dataAkun.map((akun) => (akun.id === id ? newAkun : akun)));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <header className="flex justify-end mb-6">
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Tambah Akun
        </button>
      </header>

      {/* Tabel Data Akun */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">No</th>
              <th className="px-4 py-2 text-left text-gray-700">Nama Akun</th>
              <th className="px-4 py-2 text-left text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataAkun.map((akun, index) => (
              <tr key={akun.id} className="border-t">
                <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                <td className="px-4 py-2 text-gray-700">{akun.nama}</td>
                <td className="px-4 py-2 text-gray-700">{akun.email}</td>
                <td className="px-4 py-2 text-gray-700 flex gap-2">
                  <button
                    onClick={() => handleEdit(akun.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(akun.id)}
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

export default DataAkunProdi;
