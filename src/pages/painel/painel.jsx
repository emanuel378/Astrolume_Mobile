import "./painel.css"; // 👈 Ligando o CSS da forma certa
import { useNavigate } from "react-router-dom"; // 👈 Importando o gerenciador de rotas
import {
  Home,
  Bell,
  User,
  Users,
  BookOpen,
  Star,
} from "lucide-react";

export default function App() {
  const navigate = useNavigate(); // 👈 Ativando o hook de navegação

  const turmas = [
    { nome: "Turma A", alunos: 31 },
    { nome: "Turma B", alunos: 20 },
    { nome: "Turma C", alunos: 41 },
  ];

  const atividades = [
    { titulo: "Ascensão de Órion", desc: "Criado em 13/12/2025" },
    { titulo: "Missão Estelar", desc: "Criado em 13/12/2025" },
  ];

  // 🚪 Função que lida com o logout com confirmação
  const handleLogout = () => {
    const desejaSair = window.confirm("Você realmente deseja sair da conta?");
    
    if (desejaSair) {
      // Se você tiver tokens ou dados de login no localStorage, limpe-os aqui:
      // localStorage.removeItem("token"); 
      
      navigate("/"); // 👈 Redireciona para a página inicial/login
    }
    // Se clicar em 'Cancelar', não faz nada e continua na tela do painel
  };

  return (
    <div className="app">
      <div className="dashboard">
        {/* HEADER */}
        <div className="header">
          {/* Foto de perfil anônima com o estilo do app */}
          <img 
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
            alt="Avatar Anônimo" 
            className="avatar" 
          />
          <div>
            <h2>Olá, professor</h2>
            <p>Explorando estrelas,<br />transformando futuros.</p>
          </div>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card"><Users /><h1>3</h1><span>Turmas</span></div>
          <div className="card"><BookOpen /><h1>12</h1><span>Atividades</span></div>
          <div className="card"><User /><h1>90</h1><span>Alunos</span></div>
          <div className="card"><Star /><h1>100</h1><span>Estrelumes</span></div>
        </div>

        {/* TURMAS */}
        <div className="box">
          <h2>Minhas turmas</h2>
          {turmas.map((turma, index) => (
            <div className="turma" key={index}>
              <span>{turma.nome}</span>
              <span>{turma.alunos} alunos</span>
            </div>
          ))}
        </div>

        {/* GRÁFICO */}
        <div className="box">
          <h2>Progresso das Turmas</h2>
          <div className="grafico">
            <div className="barra-area"><div className="barra barra1"></div><span>Turma A</span></div>
            <div className="barra-area"><div className="barra barra2"></div><span>Turma B</span></div>
            <div className="barra-area"><div className="barra barra3"></div><span>Turma C</span></div>
          </div>
        </div>

        {/* AÇÕES */}
        <div>
          <h2 className="titulo">O que vamos fazer hoje?</h2>
          <div className="acoes">
            <div className="acao"><Users /><span>Nova Turma</span></div>
            <div className="acao"><User /><span>Novo Aluno(a)</span></div>
            <div className="acao grande"><BookOpen /><span>Nova Atividade</span></div>
          </div>
        </div>

        {/* ATIVIDADES */}
        <div>
          <h2 className="titulo">Suas Atividades</h2>
          {atividades.map((atividade, index) => (
            <div className="atividade" key={index}>
              <div className="atividade-esquerda">
                <Star />
                <div>
                  <h3>{atividade.titulo}</h3>
                  <p>{atividade.desc}</p>
                </div>
              </div>
              <span>{">"}</span>
            </div>
          ))}
        </div>

        {/* 🚪 BOTÃO DE SAIR CONFIGURADO */}
        <button className="btn-sair" onClick={handleLogout}>
          Sair da conta
        </button>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <Home />
        <BookOpen />
        <Bell />
        <User />
        <Users className="ativo" />
      </div>
    </div>
  );
}