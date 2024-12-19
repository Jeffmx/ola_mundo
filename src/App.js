import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "pags/inicio";
import SobreMim from "pags/sobreMim";
import Header from "componentes/header";
import Rodape from "componentes/Rodape";
import RotaPadrao from "componentes/RotaPadrao";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<RotaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="/ano" element={<h1>deu o karai</h1>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
