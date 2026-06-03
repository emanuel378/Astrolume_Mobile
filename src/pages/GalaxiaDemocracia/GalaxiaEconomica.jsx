import React from 'react';
import './GalaxiaEconomica.css';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import { Link } from 'react-router-dom';

// assets
import orionTerra1 from '../../assets/orionterra1.png';
import terra3 from '../../assets/terra3.png';
import demo1 from "../../assets/demo1.png"

export default function GalaxiaEconomica() {
  return (
    <>
      <FundoEstrelado />

      <div className="galaxias-container galaxias-economica">

        <div className="galaxia-card">

          <div className="galaxia-header">
            <h2 className="galaxia-titulo">Galáxia da</h2>
            <h2 className="galaxia-nome">Democracia</h2>
            <div className="linha"></div>
          </div>

          <div className="galaxia-visual">
            <img src={demo1} alt="Planeta Democracia" className="planeta" />
          </div>

          <div className="galaxia-icons">
            <Link to="/galaxias">
              <img src={orionTerra1} alt="Voltar" />
            </Link>

            <img src={demo1} alt="Galáxia da Democracia" />
          </div>

          <button className="btn-escolher">
            Escolher
          </button>

        </div>

        <div className="galaxia-info">
          <h3>
            O Conselho Galáctico
          </h3>

          <p>
            Um universo dedicado a jovens que desejam desenvolver o
            <strong> pensamento crítico</strong>, a
            <strong> argumentação</strong> e a
            <strong> comunicação</strong>.
            Aqui, os exploradores enfrentam desafios de cidadania,
            aprendendo a defender ideias, respeitar opiniões e construir
            soluções para uma sociedade mais justa e democrática.
          </p>
        </div>

      </div>
    </>
  );
}