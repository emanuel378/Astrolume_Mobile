import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './senha_prof.css'; 

export default function SenhaProf() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRedefinirSenha(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const actionCodeSettings = {
        // Redireciona o link do e-mail de volta para o seu app React na rota correta
        url: 'http://localhost:5173/atualizar-senha', 
        // CORREÇÃO: Definido como false para fluxos puramente web (evita erros de Dynamic Links)
        handleCodeInApp: false,
      };

      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      
      alert(`O link de redefinição foi enviado para o e-mail: ${email}\nVerifique sua caixa de entrada e a pasta de spam!`);
      navigate('/professor'); 
    } catch (error) {
      console.error("Erro detalhado do Firebase:", error);
      
      // Tratamento de erros amigável e diagnóstico dinâmico
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        alert('Este e-mail não está cadastrado no Astro Lume.');
      } else if (error.code === 'auth/invalid-email') {
        alert('O formato do e-mail inserido é inválido.');
      } else if (error.code === 'auth/unauthorized-continue-uri') {
        alert('Erro de configuração: O domínio localhost:5173 precisa ser autorizado no painel do Firebase (Authentication > Configurações > Domínios Autorizados).');
      } else {
        // Se der outro erro, este alert vai te mostrar o código exato na tela
        alert(`Ocorreu um erro no Firebase!\nCódigo: ${error.code}\nMensagem: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FundoEstrelado />

      <div className="container-esqueceu">
        {/* Card Alerta Superior */}
        <div className="card-alerta-senha">
          <div className="avatar-robo-container">
            <div className="circulo-robo-azul">
              <span className="interrogacao-robo">?</span>
              <span className="estrela-robo">⭐</span>
            </div>
          </div>
          <div className="texto-alerta-senha">
            <h2>
              Ei professor, <br />
              <span className="destaque-azul">esqueceu sua senha?</span>
            </h2>
          </div>
        </div>

        {/* Card do Formulário */}
        <div className="card-formulario-senha">
          <form className="form-esqueceu" onSubmit={handleRedefinirSenha}>
            
            <div className="input-group-senha">
              <label htmlFor="email">E-mail cadastrado:</label>
              <input
                type="email"
                id="email"
                placeholder="Seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="dica-firebase" style={{ color: '#554b7c', fontSize: '0.8rem', marginTop: '5px', display: 'block' }}>
                * Nós enviaremos um link seguro que redirecionará você de volta ao Astro Lume para criar uma nova senha.
              </span>
            </div>

            <button type="submit" className="btn-confirmar-senha" disabled={loading}>
              {loading ? 'Enviando e-mail...' : 'Enviar link de recuperação'}
            </button>

          </form>
        </div>

        <div className="links-esqueceu">
          <Link to="/professor" className="link-voltar-senha">
            &larr; Voltar para o Login
          </Link>
        </div>
      </div>
    </>
  );
}