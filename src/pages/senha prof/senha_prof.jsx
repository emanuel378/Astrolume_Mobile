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
      // O Firebase pega o e-mail e dispara um e-mail real de redefinição na hora
      await sendPasswordResetEmail(auth, email);
      
      alert(`O link de redefinição real foi enviado para o e-mail: ${email}\nVerifique sua caixa de entrada e o spam!`);
      navigate('/professor'); 
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        alert('Este e-mail não está cadastrado no Astro Lume.');
      } else if (error.code === 'auth/invalid-email') {
        alert('O formato do e-mail inserido é inválido.');
      } else {
        alert('Ocorreu um erro ao tentar processar o envio do e-mail.');
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
            
            {/* Campo E-mail */}
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
                * Nós enviaremos um link real e seguro para este e-mail para você redefinir sua senha.
              </span>
            </div>

            <button type="submit" className="btn-confirmar-senha" disabled={loading}>
              {loading ? 'Enviando e-mail...' : 'Enviar link de recuperação'}
            </button>

          </form>
        </div>

        <div className="links-esqueceu">
          <Link to="/professor" className="link-voltar-senha">
            ← Voltar para o Login
          </Link>
        </div>
      </div>
    </>
  );
}