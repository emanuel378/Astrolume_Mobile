import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, BookOpen, Bell, User, Users, ArrowLeft, UserPlus, Send } from "lucide-react";
import "./novo_aluno.css";

export default function NovoAluno() {
  const navigate = useNavigate();

  // Estados para gerenciar as possibilidades do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [turma, setTurma] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleEnviarConvite = (e) => {
    e.preventDefault();

    // Validação de Campos Obrigatórios
    if (!nome.trim() || !email.trim() || !turma) {
      alert("⚠️ Por favor, preencha os campos obrigatórios: Nome, E-mail e Turma.");
      return;
    }

    // Validação Básica de E-mail
    if (!email.includes("@") || !email.includes(".")) {
      alert("❌ Por favor, insira um e-mail válido.");
      return;
    }

    setEnviando(true);

    // Simulação Cósmica de envio para a base de dados (ex: Firebase)
    setTimeout(() => {
      setEnviando(false);
      alert(`✨ Convite espacial enviado com sucesso para ${email}!`);
      
      // Limpa os inputs após o sucesso
      setNome("");
      setEmail("");
      setMatricula("");
      setTurma("");
    }, 1500);
  };

  return (
    <div className="app-adicionar-aluno">
      <div className="container-adicionar">
        
        {/* Header de navegação superior */}
        <div className="header-superior">
          <button className="btn-voltar" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
        </div>

        <h1 className="titulo-principal">
          Adicionar <span>aluno</span>
        </h1>
        <p className="subtitulo">Convide um aluno para sua turma</p>

        {/* Card Informativo */}
        <div className="info-card">
          <div className="info-icone">
            <UserPlus size={24} color="#00d2ff" />
          </div>
          <div className="info-texto">
            <h3>Informação do aluno</h3>
            <p>Preencha os dados para enviar o convite</p>
          </div>
        </div>

        {/* Formulário com as possibilidades controladas */}
        <form onSubmit={handleEnviarConvite} className="formulario-aluno">
          <div className="campo-grupo">
            <label>Nome do aluno *</label>
            <input 
              type="text" 
              placeholder="Digite o nome do aluno" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="campo-grupo">
            <label>E-mail do aluno *</label>
            <input 
              type="text" 
              placeholder="Digite o e-mail do aluno" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="campo-grupo">
            <label>Código ou matrícula (opcional)</label>
            <input 
              type="text" 
              placeholder="Ex: 2026A01" 
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />
          </div>

          <div className="campo-grupo">
            <label>Turma *</label>
            <select value={turma} onChange={(e) => setTurma(e.target.value)}>
              <option value="">Selecione uma turma</option>
              <option value="Turma A">Turma A</option>
              <option value="Turma B">Turma B</option>
              <option value="Turma C">Turma C</option>
            </select>
          </div>

          <p className="nota-rodape">
            O convite será enviado para o e-mail informado.
          </p>

          {/* Seção Como Funciona */}
          <div className="como-funciona-card">
            <div className="aviao-icone">
              <Send size={20} color="#00ffcc" />
            </div>
            <div className="como-funciona-texto">
              <h3>Como funciona?</h3>
              <p>O aluno recebe um convite por e-mail para entrar na turma.</p>
            </div>
          </div>

          {/* Botão Dinâmico com estado de Envio */}
          <button type="submit" className="btn-enviar-convite" disabled={enviando}>
            {enviando ? "Enviando convite..." : "Enviar convite"}
          </button>
        </form>
      </div>

      {/* 🧭 NAVBAR INFERIOR INTEGRADA */}
      <nav className="bottomNav" style={{ display: "flex", justifyContent: "space-around", position: "fixed", bottom: 0, width: "100%", background: "#130933", padding: "15px 0", zIndex: 10 }}>
        <Home onClick={() => navigate("/painel")} style={{ cursor: "pointer", color: "#fff" }} />
        <BookOpen onClick={() => navigate("/tarefa")} style={{ cursor: "pointer", color: "#fff" }} />
        <Bell style={{ cursor: "pointer", color: "#fff" }} />
        <User className="ativo" onClick={() => navigate("/adicionar-aluno")} style={{ cursor: "pointer", color: "#00ffcc" }} />
        <Users onClick={() => navigate("/turmas")} style={{ cursor: "pointer", color: "#fff" }} />
      </nav>
    </div>
  );
}