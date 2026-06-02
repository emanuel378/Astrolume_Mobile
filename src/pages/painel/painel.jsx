import "./painel.css"; 
import { useNavigate } from "react-router-dom"; 
import {
  Home,
  Bell,
  User,
  Users,
  BookOpen,
  Star,
} from "lucide-react";

export default function App() {
  const navigate = useNavigate(); 

  const turmas = [
    { nome: "Turma A", alunos: 31 },
    { nome: "Turma B", alunos: 20 },
    { nome: "Turma C", alunos: 41 },
  ];

  const atividades = [
    { titulo: "Ascensão de Órion", desc: "Criado em 13/12/2025" },
    { titulo: "Missão Estelar", desc: "Criado em 13/12/2025" },
  ];

  const handleLogout = () => {
    const desejaSair = window.confirm("Você realmente deseja sair da conta?");
    if (desejaSair) {
      navigate("/"); 
    }
  };

  return (
    <div className="app">
      <div className="dashboard">
        {/* HEADER */}
        <div className="header">
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
          <div className="card" onClick={() => navigate("/turmas")} style={{ cursor: "pointer" }}><Users /><h1>3</h1><span>Turmas</span></div>
          <div className="card" onClick={() => navigate("/tarefa")} style={{ cursor: "pointer" }}><BookOpen /><h1>12</h1><span>Atividades</span></div>
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
            <div className="acao" onClick={() => navigate("/turmas")} style={{ cursor: "pointer" }}>
              <Users />
              <span>Nova Turma</span>
            </div>

            <div className="acao" onClick={() => navigate("/turmas")} style={{ cursor: "pointer" }}>
              <User />
              <span>Novo Aluno(a)</span>
            </div>

            <div className="acao grande" onClick={() => navigate("/tarefa")} style={{ cursor: "pointer" }}>
              <BookOpen />
              <span>Nova Atividade</span>
            </div>
          </div>
        </div>

        {/* ATIVIDADES */}
        <div>
          <h2 className="titulo">Suas Atividades</h2>
          {atividades.map((atividade, index) => (
            <div className="atividade" key={index} onClick={() => navigate("/tarefa")} style={{ cursor: "pointer" }}>
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

        <button className="btn-sair" onClick={handleLogout}>
          Sair da conta
        </button>
      </div>

      {/* 🧭 NAVBAR INFERIOR DO PAINEL */}
      <div className="navbar">
        <Home className="ativo" onClick={() => navigate("/painel")} style={{ cursor: "pointer" }} />
        <BookOpen onClick={() => navigate("/tarefa")} style={{ cursor: "pointer" }} />
        <Bell style={{ cursor: "pointer" }} />
        <User style={{ cursor: "pointer" }} />
        <Users onClick={() => navigate("/turmas")} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}