import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "pags/inicio";
import SobreMim from "pags/sobreMim";
import Header from "componentes/header";
import Rodape from "componentes/Rodape";
import RotaPadrao from "componentes/RotaPadrao";
import Card from "pags/Card";
import NaoEncontrada from "componentes/NaoEncontrado";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>

        <Route path="/" element={<RotaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="post/:id" element={<Card/>}/>
        </Route>

        <Route path="*" element={<NaoEncontrada/>}/>

      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
