import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login/Login"; 
import Cadastro from "./pages/Cadastro/Cadastro";
import Inicial from "./pages/TelaInicial/Inicial";
import Galaxias from "./pages/Galaxia/galaxias";
import GalaxiaSaude from "./pages/GalaxiaSaude/GalaxiaSaude"
import GalaxiaEconomica from "./pages/GalaxiaEconomica/GalaxiaEconomica";
import GalaxiaOrion from "./pages/TelaGalaxia1";
import Historia from "./pages/Historia";


export default function RoutesApp(){
    return(
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Inicial/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/galaxias" element={<Galaxias/>}/>
        <Route path="/galaxiasaude" element={<GalaxiaSaude/>}/>
        <Route path="/galaxieconomica" element={<GalaxiaEconomica/>}/>
        <Route path="/galaxinicial" element={<GalaxiaOrion/>}/>
        <Route path="/historia" element={<Historia/>}/>

        
    


        


      


    </Routes>
    
    
    
    
    </BrowserRouter>
    )
}
