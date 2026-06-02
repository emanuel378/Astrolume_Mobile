import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login/Login"; 
import Cadastro from "./pages/Cadastro/Cadastro";
import Inicial from "./pages/TelaInicial/Inicial";
import Galaxias from "./pages/Galaxia/galaxias";
import GalaxiaEconomica from "./pages/GalaxiaDemocracia/GalaxiaEconomica";
import GalaxiaOrion from "./pages/TelaGalaxia1";
import Historia from "./pages/Historia";
import Resumo1 from "./pages/Resumos/r1/resumo";
import Chat from "./pages/Chat/chat";


export default function RoutesApp(){
    return(
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Inicial/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/galaxias" element={<Galaxias/>}/>
        <Route path="/galaxieconomica" element={<GalaxiaEconomica/>}/>
        <Route path="/galaxinicial" element={<GalaxiaOrion/>}/>
        <Route path="/historia" element={<Historia/>}/>
        <Route path="/r1" element={<Resumo1/>}/>
        <Route path="/chat" element={<Chat/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}
