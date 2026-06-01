import astroacenando from '../../assets/astroacenando.png';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './Inicial.css';
import { useNavigate } from 'react-router-dom';

export default function Inicial() {
  const navigate = useNavigate();

  return (
    <>
      <FundoEstrelado />

      <div className='container'>

        <div className='titulo'>
          A aventura começa agora.
        </div>

        <img
          src={astroacenando}
          alt="Astronauta acenando"
          className='Orionacenando'
        />

        <div className='Astrolume'>
          <span className="splash-title-first">Astro</span>
          <span className="splash-title-second">Lume</span>
        </div>

        <div className='slogan'>
          Sua jornada. Brilhe!
        </div>

        <div className='Buttons'>

          {/* Criar Conta */}
          <button
            className='btn-criar-conta'
            onClick={() => navigate('/cadastro')}
          >
            Criar conta
          </button>

          {/* Entrar */}
          <button
            className='btn-entrar'
            onClick={() => navigate('/login')}
          >
            Entrar
          </button>

          {/* Entrar como professor */}
          <button
            className='btn-professor'
            onClick={() => navigate('/professor')}
          >
            Entrar como Professor
          </button>

        </div>

      </div>
    </>
  );
}