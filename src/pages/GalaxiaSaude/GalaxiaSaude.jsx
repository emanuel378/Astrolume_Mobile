import React from 'react';
import './galaxiaSaude.css';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import { Link } from 'react-router-dom';

// assets
import astroAcenando from '../../assets/astroacenando.png';
import orionTerra1 from '../../assets/orionterra1.png';
import terra2 from '../../assets/terra2.png';
import terra3 from '../../assets/terra3.png';

// import logo from '../assets/logo.png'; // só se for usar


export default function GalaxiaSaude() {
  return (
    <>
      <FundoEstrelado />

      <div className="galaxias-container galaxias-saude">

        <div className="galaxia-card">

          <div className="galaxia-header">
            <h2 className="galaxia-titulo">Galáxia</h2>
            <h2 className="galaxia-nome">Vita</h2>
            <div className="linha"></div>
          </div>

          <div className="galaxia-visual">
            <img src={terra2} alt="Planeta" className="planeta" />
          </div>

          <div className="galaxia-icons">
            <Link to="/galaxias">
              <img src={orionTerra1} alt="Ícone Tech" />
            </Link>
            <img src={terra2} alt="Ícone Saúde" />
          <Link to="/galaxieconomica">
                       <img src={terra3} alt="Ícone Tech" />
                     </Link>
          </div>

          <button className="btn-escolher">
            Escolher
          </button>

        </div>

        <div className="galaxia-info">
          <h3>
            Cuidando <span>da vida</span>
          </h3>
          <p>
            <strong>Saúde</strong> e <strong>bem-estar</strong>, com mundos que vão dos
            segredos do <strong>corpo humano</strong> aos avanços da <strong>biotecnologia</strong>.
          </p>
        </div>

      </div>
    </>
  );
}