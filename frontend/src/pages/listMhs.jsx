import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Fragments/Table";

export default function List() {
  const [data, setData] = useState([]); // Deklarasi state untuk menampung data mahasiswa

  // Mengambil data mahasiswa saat komponenen dimuat pertama kali
  useEffect(() => {
    getMhs();
  }, []);

  // Fungsi untuk mengambil data mahasiswa dari API
  const getMhs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/mahasiswa");
      setData(response.data); // Set data mahasiswa setelah fetch berhasil
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto my-10">
        <Table data={data} setData={setData} />{" "}
      </div>
    </>
  );
}
