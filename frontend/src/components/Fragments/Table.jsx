import Thead from "../elements/Thead";
import { Link } from "react-router-dom";

export default function Table({ data }) {
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
                {/*  */}
                <Thead />
                <tbody>
                  {data.map((mahasiswa, index) => (
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
                          Edit
                        </button>
                        <button className="button rounded bg-teal-300 p-2 shadow-md   ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
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
