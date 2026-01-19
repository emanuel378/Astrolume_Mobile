// Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase'; // Certifique-se que o caminho está correto
import { signInWithEmailAndPassword } from 'firebase/auth';


import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔐 Faz o login no Firebase
      await signInWithEmailAndPassword(auth, email, senha);
      
      alert('Bem-vindo de volta!');
      navigate('/galaxias'); // Redireciona após o login
    } catch (error) {
      console.error(error);
      
      let mensagem = 'Erro ao entrar';
      
      if (error.code === 'auth/invalid-credential') {
        mensagem = 'E-mail ou senha incorretos';
      } else if (error.code === 'auth/user-not-found') {
        mensagem = 'Usuário não encontrado';
      } else if (error.code === 'auth/wrong-password') {
        mensagem = 'Senha incorreta';
      }

      alert(mensagem);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FundoEstrelado />
      <div className="container-cadastro">
        
        <div className="titulo-cadastro">
          <h1 className="titulo-poppins">Entrar</h1>
          <h1 className="titulo-gugi">Astro Lume</h1>
        </div>

        <form className="form-cadastro" onSubmit={handleLogin}>
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
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-cadastrar" disabled={loading}>
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>

        <div className="divisor">
          <span className="linha"></span>
          <span className="ou">OU</span>
          <span className="linha"></span>
        </div>

        <div className="botoes-sociais">
          <button className="btn-social google" type="button">
            Google
          </button>
          <button className="btn-social facebook" type="button">
            Facebook
          </button>
        </div>

        <div className="links-navegacao">
          <Link to="/cadastro" className="link-login">
            Não tem conta? <span>Criar agora</span>
          </Link>

          <Link to="/" className="link-voltar">
            ← Voltar para Início
          </Link>
        </div>
      </div>
    </>
  );
}