import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';

import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './senha_prof.css'; // Reaproveitando os mesmos estilos visuais

export default function AtualizarSenha() {
  const [searchParams] = useSearchParams();
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailUsuario, setEmailUsuario] = useState('');
  const navigate = useNavigate();

  // Pega o token gerado pelo Firebase na URL
  const oobCode = searchParams.get('oobCode');

  useEffect(() => {
    if (oobCode) {
      // Valida se o link ainda funciona e descobre quem é o dono do e-mail
      verifyPasswordResetCode(auth, oobCode)
        .then((email) => {
          setEmailUsuario(email);
        })
        .catch((error) => {
          console.error(error);
          alert('Este link de redefinição expirou ou já foi utilizado.');
          navigate('/professor');
        });
    } else {
      alert('Código de verificação inválido ou ausente.');
      navigate('/professor');
    }
  }, [oobCode, navigate]);

  async function handleSalvarNovaSenha(e) {
    e.preventDefault();

    if (novaSenha !== confirmarSenha) {
      alert('As senhas digitadas não coincidem!');
      return;
    }

    setLoading(true);

    try {
      // Executa a alteração definitiva de senha no banco do Firebase Auth
      await confirmPasswordReset(auth, oobCode, novaSenha);
      alert('Senha atualizada com sucesso! Agora você já pode fazer login.');
      navigate('/professor');
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar a senha. Por favor, solicite um novo link.');
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
              <span className="interrogacao-robo">🔒</span>
              <span className="estrela-robo">⭐</span>
            </div>
          </div>
          <div className="texto-alerta-senha">
            <h2>
              Criar <br />
              <span className="destaque-azul">Nova Senha</span>
            </h2>
            {emailUsuario && (
              <p style={{ color: '#aaa', fontSize: '0.85rem', marginTop: '4px' }}>
                Conta: <strong>{emailUsuario}</strong>
              </p>
            )}
          </div>
        </div>

        {/* Card do Formulário */}
        <div className="card-formulario-senha">
          <form className="form-esqueceu" onSubmit={handleSalvarNovaSenha}>
            
            {/* Campo Nova Senha */}
            <div className="input-group-senha">
              <label htmlFor="novaSenha">Nova Senha:</label>
              <input
                type="password"
                id="novaSenha"
                placeholder="Mínimo 6 caracteres"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {/* Campo Confirmar Senha */}
            <div className="input-group-senha">
              <label htmlFor="confirmarSenha">Confirme a Senha:</label>
              <input
                type="password"
                id="confirmarSenha"
                placeholder="Digite a mesma senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-confirmar-senha" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar Nova Senha'}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}