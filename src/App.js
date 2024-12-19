import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pags/inicio";
import SobreMim from "./pags/sobreMim";
import Header from "./pags/componentes/header";
import Rodape from "pags/componentes/Rodape";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />}/>
        <Route path="*" element={<h1>deu o karai</h1>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
