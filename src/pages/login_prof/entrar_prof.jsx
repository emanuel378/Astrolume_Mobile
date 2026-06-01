import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth'; 

import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './entrar_prof.css';

export default function ProfessorCadastro() {
  const [abaAtiva, setAbaAtiva] = useState('criar'); // 'criar' ou 'entrar'
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [escola, setEscola] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🛠️ FUNÇÃO DE AUTENTICAÇÃO
  async function handleAutenticacao(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (abaAtiva === 'criar') {
        // --- LOGICA DE CADASTRO ---
        await createUserWithEmailAndPassword(auth, email, senha);
        alert('Professor cadastrado com sucesso!');
        navigate('/dashboardProfessor');
      } else {
        // --- LOGICA DE LOGIN (ENTRAR) ---
        await signInWithEmailAndPassword(auth, email, senha);
        alert('Login realizado com sucesso!');
        navigate('/dashboardProfessor');
      }
    } catch (error) {
      console.error(error);
      let mensagem = 'Erro ao processar a requisição';

      if (error.code === 'auth/email-already-in-use') {
        mensagem = 'Este e-mail já está cadastrado!';
      } else if (error.code === 'auth/weak-password') {
        mensagem = 'A senha deve ter pelo menos 6 caracteres!';
      } else if (error.code === 'auth/invalid-email') {
        mensagem = 'Formato de e-mail inválido!';
      } else if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        mensagem = 'E-mail ou senha incorretos!';
      }

      alert(mensagem);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FundoEstrelado />

      <div className="container-professor">
        <div className="titulo-professor">
          <h1 className="titulo-poppins">Bem vindo ao</h1>
          <h1 className="titulo-gugi">Astro Lume</h1>
        </div>

        <div className="card-formulario">
          {/* Abas Alternadoras */}
          <div className="abas-navegacao">
            <button 
              type="button" 
              className={`aba-btn ${abaAtiva === 'criar' ? 'ativa' : ''}`}
              onClick={() => setAbaAtiva('criar')}
            >
              Cria conta
            </button>
            <button 
              type="button" 
              className={`aba-btn ${abaAtiva === 'entrar' ? 'ativa' : ''}`}
              onClick={() => setAbaAtiva('entrar')}
            >
              Entrar
            </button>
          </div>

          <form className="form-professor" onSubmit={handleAutenticacao}>
            {abaAtiva === 'criar' && (
              <div className="input-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Nome professor"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Insira sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required={abaAtiva === 'entrar' || abaAtiva === 'criar'}
              />
              
              {/* 🔄 MODIFICADO: Agora redireciona para a rota da nova tela */}
              {abaAtiva === 'entrar' && (
                <button 
                  type="button" 
                  className="link-esqueci-senha" 
                  onClick={() => navigate('/recuperar-senha')} // 👈 Coloque a rota correspondente ao arquivo senha_prof.jsx
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#00bcd4', 
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    textAlign: 'right',
                    marginTop: '5px',
                    display: 'block',
                    width: '100%'
                  }}
                >
                  Esqueceu a senha?
                </button>
              )}
            </div>

            {abaAtiva === 'criar' && (
              <div className="input-group">
                <label htmlFor="escola">Escola</label>
                <input
                  type="text"
                  id="escola"
                  placeholder="Insira sua escola"
                  value={escola}
                  onChange={(e) => setEscola(e.target.value)}
                  required
                />
              </div>
            )}

            <button type="submit" className="btn-professor" disabled={loading}>
              {loading ? 'Processando...' : abaAtiva === 'criar' ? 'Cadastrar' : 'Entrar'}
            </button>

            <div className="divisor-ou">
              <span>ou</span>
            </div>

            <div className="sociais-container">
              <button type="button" className="btn-social">
                <img src="https://i.imgur.com/vGgZ66u.png" alt="Google" width="18" /> Google
              </button>
              <button type="button" className="btn-social">
                <img src="https://i.imgur.com/K75yX0v.png" alt="Facebook" width="18" /> Facebook
              </button>
            </div>
          </form>
        </div>

        <div className="links-professor">
          <Link to="/" className="link-voltar">
            ← Voltar para início
          </Link>
        </div>
      </div>
    </>
  );
}