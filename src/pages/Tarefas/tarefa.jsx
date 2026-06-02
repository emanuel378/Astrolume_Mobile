import "./NovaTarefa.css";
import { useNavigate } from "react-router-dom";
import { Home, BookOpen, Bell, User, Users } from "lucide-react";

export default function NovaTarefa() {
  const navigate = useNavigate();

  return (
    <div className="nova-tarefa">
      <div className="container-tarefa" style={{ paddingBottom: "80px" }}>
        <h1>
          Nova <span>Tarefa</span>
        </h1>

        <p>Crie uma nova tarefa para sua turma</p>

        <div className="form-card">
          <label>Título da tarefa</label>
          <input type="text" placeholder="Ex: Resumo Fração" />

          <label>Descrição</label>
          <textarea placeholder="Descreva os detalhes da tarefa..." />

          <label>Turma</label>
          <select>
            <option>Selecione a turma</option>
          </select>

          <label>Série / Ano</label>
          <select>
            <option>Ex: 6º ano</option>
          </select>

          <label>Data de entrega</label>

          <div className="linha">
            <input type="date" />
            <input type="time" />
          </div>

          <label>Anexos (opcional)</label>
          <button className="arquivo">
            Adicionar arquivo
          </button>

          <label>Prioridade (escolha um)</label>

          <div className="prioridade">
            <button className="baixa">Baixa</button>
            <button className="alta">Alta</button>
          </div>
        </div>

        <button className="criar">
          Cria Tarefa
        </button>
      </div>

      {/* 🧭 NAVBAR INFERIOR INTEGRADA NA TELA DE TAREFAS */}
      <nav className="bottomNav" style={{ display: "flex", justifyContent: "space-around", position: "fixed", bottom: 0, width: 100 + "%", background: "#130933", padding: "15px 0", zIndex: 10 }}>
        <Home onClick={() => navigate("/painel")} style={{ cursor: "pointer", color: "#fff" }} />
        <BookOpen className="ativo" onClick={() => navigate("/tarefa")} style={{ cursor: "pointer", color: "#00ffcc" }} />
        <Bell style={{ cursor: "pointer", color: "#fff" }} />
        <User style={{ cursor: "pointer", color: "#fff" }} />
        <Users onClick={() => navigate("/turmas")} style={{ cursor: "pointer", color: "#fff" }} />
      </nav>
    </div>
  );
}