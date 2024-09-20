// Entry Point
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Untuk membuat routing
import List from "./pages/listMhs";
import InputForm from "./components/Fragments/inputFrom";
import EditForm from "./components/Fragments/EditFrom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} /> {/* Rute untuk halaman list */}
          <Route path="/add" element={<InputForm />} />{" "}
          {/* Rute Halaman Tambah Mahasiswa */}
          <Route path="/edit/:Npm" element={<EditForm />} />{" "}
          {/* Rute Halaman Edit Mahasiswa */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
