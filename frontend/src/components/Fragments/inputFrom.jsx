import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function InputForm() {
  // State untuk menyimpan input dari form
  const [npm, setNpm] = useState("");
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const navigate = useNavigate(); // Hook untuk navigasi setelah form disubmit

  // Fungsi untuk mengirim data mahasiswa baru ke backend
  const saveMhs = async (e) => {
    e.preventDefault(); // Mencegah refresh halaman ketika form disubmit
    try {
      await axios.post("http://localhost:3000/api/mahasiswa", {
        npm, // NPM dari state
        name, // Nama dari state
        kelas, // Kelas dari state
      });

      // Membersihkan input form setelah data berhasil disimpan
      setNpm("");
      setName("");
      setKelas("");

      // Menampilkan notifikasi sukses
      alert("Data Mahasiswa Berhasilasil Ditambahkan");

      // Mengarahkan kembali ke halaman utama
      navigate("/");
    } catch (error) {
      // Menangani jika terjadi kesalahan
      console.log(error);
      alert("Data Mahasiswa Gagal Ditambahkan");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form
            onSubmit={saveMhs}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Add Mahasiswa
            </h2>

            {/* Input NPM */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="npm"
              >
                NPM
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="npm"
                type="text"
                value={npm}
                onChange={(e) => setNpm(e.target.value)}
                placeholder="Enter NPM"
              />
            </div>

            {/* Input Nama */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>

            {/* Input Kelas */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="kelas"
              >
                Kelas
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="kelas"
                type="text"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Enter Kelas"
              />
            </div>

            {/* Submit Button */}
            <div className="flex  items-center justify-between">
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs"></p>
        </div>
      </div>
    </>
  );
}
