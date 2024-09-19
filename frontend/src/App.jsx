import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/listMhs";
import InputForm from "./components/Fragments/inputFrom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<InputForm />} />
          <Route path="/edit" element={<InputForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
