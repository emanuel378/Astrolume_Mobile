import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login/Login"; 
import Cadastro from "./pages/Cadastro/Cadastro";
import Inicial from "./pages/TelaInicial/Inicial";

export default function RoutesApp(){
    return(
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Inicial/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        


      


    </Routes>
    
    
    
    
    </BrowserRouter>
    )
}
