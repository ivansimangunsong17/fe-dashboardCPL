// app/not-found.js
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-4 font-bold text-blue-600">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6">Maaf, halaman yang Anda cari tidak ditemukan.</p>
        <p className="text-sm text-gray-500">Silakan kembali ke <a href="/" className="text-blue-500 hover:underline">beranda</a>.</p>
        <img src="/images/404.png" alt="Not Found" className="mt-4 w-1/2 mx-auto" />
      </div>
    </div>
  );
}