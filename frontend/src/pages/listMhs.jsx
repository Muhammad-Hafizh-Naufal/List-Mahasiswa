import { useEffect, useState } from "react";
import Table from "../components/Fragments/Table";
import axios from "axios";

export default function listMhs() {
  const [Mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    getMahasiswa();
  }, []);

  const getMahasiswa = async () => {
    const response = await axios.get("http://localhost:3000/api/mahasiswa");
    setMahasiswa(response.data);
  };

  return (
    <>
      <Table data={Mahasiswa} />
    </>
  );
}
