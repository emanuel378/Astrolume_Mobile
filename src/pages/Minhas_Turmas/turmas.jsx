import "./turmas.css";
import { useNavigate } from "react-router-dom";
import { Home, BookOpen, Bell, User, Users } from "lucide-react";

export default function MinhasTurmas() {
  const navigate = useNavigate();

  const turmas = [
    { nome: "Turma A", alunos: 30, avatares: ["👨", "👩", "👦"], extra: "+27" },
    { nome: "Turma B", alunos: 20, avatares: ["👧", "👨", "👱"], extra: "+17" },
    { nome: "Turma C", alunos: 40, avatares: ["👦", "👩", "👨"], extra: "+37" },
  ];

  return (
    <div className="app-turmas">
      <div className="container">
        <h1 className="titulo">Minhas Turmas</h1>

        {/* Abas de Navegação Interna */}
        <div className="tabs">
          <button className="tab active">Turmas</button>
          <button className="tab">Cria Turmas</button>
        </div>

        {/* Listagem de Cards de Turma */}
        {turmas.map((turma, index) => (
          <div className="cardTurma" key={index}>
            <div className="left">
              <div className="icone">👥</div>
              <div className="avatares">
                {turma.avatares.map((avatar, i) => (
                  <span key={i} className="avatar">
                    {avatar}
                  </span>
                ))}
                <span className="extra">{turma.extra}</span>
              </div>
            </div>

            <div className="center">
              <h3>{turma.nome}</h3>
            </div>

            <div className="right">
              <span>Alunos</span>
              <h2>{turma.alunos}</h2>
            </div>
          </div>
        ))}

        {/* Botões de Ação Inferiores */}
        <button className="btnAdicionar">
          Adicionar Aluno
        </button>

        <button className="btnNovaTurma">
          Criar nova turma
        </button>
      </div>

      {/* 🧭 NAVBAR INFERIOR INTEGRADA */}
      <nav className="bottomNav">
        {/* Leva de volta para o Painel Principal */}
        <Home onClick={() => navigate("/painel")} style={{ cursor: "pointer" }} />
        <BookOpen onClick={() => navigate("/tarefa")} style={{ cursor: "pointer" }} />
        <Bell style={{ cursor: "pointer" }} />
        <User style={{ cursor: "pointer" }} />
        <Users className="ativo" onClick={() => navigate("/turmas")} style={{ cursor: "pointer" }} />
      </nav>
    </div>
  );
}