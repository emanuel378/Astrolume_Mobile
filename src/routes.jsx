import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Inicial from "./pages/TelaInicial/Inicial";
import Galaxias from "./pages/Galaxia/galaxias";
import GalaxiaSaude from "./pages/GalaxiaSaude/GalaxiaSaude";
import GalaxiaEconomica from "./pages/GalaxiaEconomica/GalaxiaEconomica";
import GalaxiaOrion from "./pages/TelaGalaxia1";
import Historia from "./pages/Historia";
import Resumo1 from "./pages/Resumos/r1/resumo";
import Questao2 from "./pages/Questao2";
import Questao3 from "./pages/Questao3";
import Questao4 from "./pages/Questao4";
import Questao5 from "./pages/Questao5";
import Questao6 from "./pages/Questao6";
import Questao7 from "./pages/Questao7";
import Questao8 from "./pages/Questao8";
import Questao9 from "./pages/Questao9";
import Questao10 from "./pages/Questao10";
import GalaxiaDemocria from "./pages/GalaxiaDemocria";
import Democria2 from "./pages/Democria2";
import Democria3 from "./pages/Democria3";
import Democria4 from "./pages/Democria4";
import Democria5 from "./pages/Democria5";


export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/galaxias" element={<Galaxias />} />
        <Route path="/galaxiasaude" element={<GalaxiaSaude />} />
        <Route path="/galaxieconomica" element={<GalaxiaEconomica />} />
        <Route path="/galaxinicial" element={<GalaxiaOrion />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/r1" element={<Resumo1 />} />
        <Route path="/r2" element={<Questao2 />} />
        <Route path="/r3" element={<Questao3 />} />
        <Route path="/r4" element={<Questao4 />} />
        <Route path="/r5" element={<Questao5 />} />
        <Route path="/especial" element={<Questao6 />} />
        <Route path="/r7" element={<Questao7 />} />
        <Route path="/r8" element={<Questao8 />} />
        <Route path="/r9" element={<Questao9 />} />
        <Route path="/r10" element={<Questao10 />} />
        <Route
  path="/galaxiademocria"
  element={<GalaxiaDemocria />}
/>
<Route path="/democria2" element={<Democria2 />} />
<Route path="/democria3" element={<Democria3 />} />
<Route path="/democria4" element={<Democria4 />} />
<Route path="/democria5" element={<Democria5 />} />
      </Routes>
    </BrowserRouter>
  );
}
