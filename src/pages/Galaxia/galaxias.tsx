import React from 'react';
import './galaxias.css';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import { Link } from 'react-router-dom';

// assets
import astroAcenando from '../../assets/astroacenando.png';
import orionTerra1 from '../../assets/orionterra1.png';
import terra2 from '../../assets/terra2.png';
import terra3 from '../../assets/terra3.png';

// import logo from '../assets/logo.png'; // só se for usar


export default function Galaxias() {
  return (
    <> 
      <FundoEstrelado />

      <div className="galaxias-container">

        {/* CARD PRINCIPAL */}
        <div className="galaxia-card">

          {/* TÍTULO */}
          <div className="galaxia-header">
            <h2 className="galaxia-titulo">Galáxia</h2>
            <h2 className="galaxia-nome">Techtron</h2>
            <div className="linha"></div>
          </div>

          {/* PLANETA + ASTRONAUTA */}
          <div className="galaxia-visual">
            <img src={orionTerra1} alt="Planeta" className="planeta" />
            
          </div>

          {/* ÍCONES */}
          <div className="galaxia-icons">
            <img src={orionTerra1} alt="Ícone 1" />
           <Link to="/galaxiasaude"> <img src={terra2} alt="Ícone 2" /></Link>
            <img src={terra3} alt="Ícone 3" />
          </div>

          {/* BOTÃO */}
         <Link to="/galaxinicial">
  <button className="btn-escolher">
    Escolher
  </button>
</Link>

        </div>

        {/* CARD INFERIOR */}
        <div className="galaxia-info">
          <h3>
            O Futuro nas <span>Suas Mãos</span>
          </h3>
          <p>
            Para quem sonha com <strong>tecnologia e IA</strong>, onde cada planeta
            simboliza uma habilidade-chave para o <strong>futuro</strong>.
          </p>
        </div>

      </div>
    </>
  );
}
