import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login"; 
import Cadastro from "./pages/Cadastro/Cadastro";
import Inicial from "./pages/TelaInicial/Inicial";
import Galaxias from "./pages/Galaxia/galaxias";
import GalaxiaSaude from "./pages/GalaxiaSaude/GalaxiaSaude";
import GalaxiaEconomica from "./pages/GalaxiaEconomica/GalaxiaEconomica";
import GalaxiaOrion from "./pages/TelaGalaxia1";
import Historia from "./pages/Historia";
import Resumo1 from "./pages/Resumos/r1/resumo";
import ProfessorCadastro from "./pages/login_prof/entrar_prof"; 
import DashboardProfessor from "./pages/painel/painel";

// 🚀 IMPORT CORRIGIDO: Apontando para o seu arquivo real dentro de "./pages/turmas"
import MinhasTurmas from "./pages/turmas/turmas"; 

// 🔑 IMPORTS: Telas do fluxo de recuperação de senha
import SenhaProf from "./pages/senha prof/senha_prof"; 
import AtualizarSenha from "./pages/senha prof/atualizar_senha.jsx"; 

// Componente temporário apenas para a rota /tarefa não quebrar o app
function TelaTarefaTemporaria() {
    return (
        <div style={{ background: "#0b061f", color: "#fff", height: "100vh", padding: "40px", fontFamily: "sans-serif" }}>
            <h1>🚀 Central de Atividades Astro Lume</h1>
            <p>Sua tela de tarefas/atividades está pronta para ser desenvolvida aqui!</p>
        </div>
    );
}

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
                <Route path="/r1" element={<Resumo1/>}/>
                
                {/* 👨‍🏫 ROTAS DO PROFESSOR */}
                <Route path="/professor" element={<ProfessorCadastro/>}/>
                <Route path="/dashboardProfessor" element={<DashboardProfessor/>}/>
                
                {/* 🔄 Atalho inteligente para o botão Home */}
                <Route path="/painel" element={<Navigate to="/dashboardProfessor" replace />} />

                {/* 👥 ROTA DAS TURMAS CORRIGIDA */}
                <Route path="/turmas" element={<MinhasTurmas/>}/>

                {/* 📝 ROTA DAS TAREFAS/ATIVIDADES */}
                <Route path="/tarefa" element={<TelaTarefaTemporaria/>}/>

                {/* 🔑 CONFIGURAÇÃO DE SENHA */}
                <Route path="/recuperar-senha" element={<SenhaProf/>}/>
                {/* 🎯 CORREÇÃO AQUI: Mudado de TransitSenha para o componente correto */}
                <Route path="/atualizar-senha" element={<AtualizarSenha/>}/>
            </Routes>
        </BrowserRouter>
    )
}