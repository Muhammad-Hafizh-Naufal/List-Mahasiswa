import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditForm() {
  // State untuk menyimpan input dari form
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const navigate = useNavigate(); // Hook untuk navigasi setelah data diupdate
  const { Npm } = useParams(); // Mengambil NPM dari URL

  // Mengambil data mahasiswa saat komponen dimuat pertama kali
  useEffect(() => {
    getMhsByNpm();
  }, []);

  // Fungsi untuk mengambil data mahasiswa berdasarkan NPM
  const getMhsByNpm = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/mahasiswa/${parseInt(Npm)}`
    );
    setName(response.data.name); // Set nama mahasiswa ke state
    setKelas(response.data.kelas); // Set kelas mahasiswa ke state
  };

  const UpdateMhs = async (e) => {
    e.preventDefault(); // Mencegah refresh halaman saat form disubmit
    try {
      await axios.patch(
        `http://localhost:3000/api/mahasiswa/${parseInt(Npm)}`,
        {
          name, // Nama yang diambil dari state
          kelas, // Kelas yang diambil dari state
        }
      );
      setName("");
      setKelas("");
      alert("Data Mahasiswa Berhasilasil Di Update"); // Notifikasi jika berhasil

      navigate("/"); // Kembali ke halaman utama
    } catch (error) {
      console.log(error);
      alert("Data Mahasiswa Gagal Di Update"); // Notifikasi jika gagal
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form
            onSubmit={UpdateMhs}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Edit Mahasiswa
            </h2>

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
                Update
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs"></p>
        </div>
      </div>
    </>
  );
}
