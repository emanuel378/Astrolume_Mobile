import React from 'react';
import './GalaxiaEconomica.css';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import { Link } from 'react-router-dom';

// assets
import orionTerra1 from '../../assets/orionterra1.png';
import terra2 from '../../assets/terra2.png';
import terra3 from '../../assets/terra3.png';

export default function GalaxiaEconomica() {
  return (
    <>
      <FundoEstrelado />

      <div className="galaxias-container galaxias-economica">

        <div className="galaxia-card">

          <div className="galaxia-header">
            <h2 className="galaxia-titulo">Galáxia</h2>
            <h2 className="galaxia-nome">Commercium</h2>
            <div className="linha"></div>
          </div>

          <div className="galaxia-visual">
            <img src={terra3} alt="Planeta Econômico" className="planeta" />
          </div>

          <div className="galaxia-icons">
            <Link to="/galaxias">
              <img src={orionTerra1} alt="Ícone Tech" />
            </Link>
           <Link to="/galaxiasaude">
              <img src={terra2} alt="Ícone Tech" />
            </Link>
            <img src={terra3} alt="Ícone Economia" />
          </div>

          <button className="btn-escolher">
            Escolher
          </button>

        </div>

        <div className="galaxia-info">
          <h3>
            O Império dos Negócios
          </h3>
          <p>
           Mentes <strong>empreendedoras</strong> e <strong>inovadoras</strong> que desejam criar negócios, 
           <strong>gerir recursos</strong> e desenvolver soluções para o mercado.
          </p>
        </div>

      </div>
    </>
  );
}
