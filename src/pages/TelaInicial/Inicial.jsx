import astroacenando from '../../assets/astroacenando.png';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './Inicial.css';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

export default function Inicial() {
  const navigate = useNavigate(); // Crie a função navigate

  return (
    <>
      <FundoEstrelado />
      <div className='container'>
        <div className='titulo'>A aventura começa agora.</div>
        <img 
          src={astroacenando} 
          alt="Astronauta acenando" 
          className='Orionacenando' 
        />

        <div className='Astrolume'>
          <span className="splash-title-first">Astro</span>
          <span className="splash-title-second">Lume</span>
        </div>
        
        <div className='slogan'> Sua jornada. Brilhe!</div>
        
        <div className='Buttons'>
          {/* Botão Criar Conta com onClick */}
          <button 
            className='btn-criar-conta'
            onClick={() => navigate('/cadastro')} // Navega para cadastro
          >
            Criar conta
          </button>
          
          {/* Botão Entrar com onClick */}
          <button 
            onClick={() => navigate('/login')} // Navega para login
          >
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}