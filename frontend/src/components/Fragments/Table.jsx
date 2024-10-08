import { Link } from "react-router-dom";
import axios from "axios";

export default function Table({ data, setData }) {
  // Fungsi untuk menghapus mahasiswa berdasarkan NPM
  const deleteMhs = async (Npm) => {
    const confirmDelete = window.confirm(
      "Apakah anda yakin ingin menghapus mahasiswa ini?"
    );

    if (confirmDelete) {
      try {
        // Melakukan request DELETE ke API untuk menghapus data mahasiswa berdasarkan NPM
        await axios.delete(`http://localhost:3000/api/mahasiswa/${Npm}`);

        // Mengupdate state 'data' dengan menghapus mahasiswa yang sudah dihapus dari list
        setData(data.filter((mahasiswa) => mahasiswa.npm !== Npm));

        // Memberikan notifikasi bahwa data berhasil dihapus
        alert("Data Mahasiswa Berhasilasil Dihapus");
      } catch (error) {
        // Menangani kesalahan jika penghapusan gagal
        console.log(error);
        alert("Data Mahasiswa Gagal Dihapus");
      }
    }
  };

  return (
    <>
      <div className="container mx-auto xl:my-20 flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="flex justify-space-between gap-4">
                <h1 className="text-2xl font-bold">List of Mahasiswa</h1>
                <button className="button rounded bg-yellow-200 font-semibold px-2">
                  <Link to={"/add"}>Add</Link>
                </button>
              </div>
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Npm
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Kelas
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(
                    (
                      mahasiswa,
                      index // Looping data mahasiswa
                    ) => (
                      <tr className="bg-gray-100 border-b" key={mahasiswa.npm}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {mahasiswa.npm}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {mahasiswa.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {mahasiswa.kelas}
                        </td>
                        <td className="text-sm text-gray-900 whitespace-nowrap font-semibold ">
                          <button className="button rounded bg-teal-300 p-2 mx-1">
                            <Link to={`/edit/${mahasiswa.npm}`}>Edit</Link>{" "}
                            {/* jika di klik akan menuju ke halaman edit berdasarkan NPM */}
                          </button>
                          <button
                            onClick={() => deleteMhs(mahasiswa.npm)} // jika di klik akan memanggil fungsi deleteMhs berdasarkan NPM
                            className="button rounded bg-teal-300 p-2 shadow-md   "
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
                {/*  */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
