import React from "react";
import { Link } from "react-router-dom";
import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import Navegacao from "../../componets/Footer";
import "./tela.css";

// 📦 Assets
import Nave from "../../assets/Nave.png";
import astroacenando from "../../assets/astroacenando.png";
import Star from "../../assets/Star.png";
import planeta from "../../assets/planeta.png";

export default function GalaxiaOrion() {
  // Definição dos nós do mapa
  const nodes = [
    { id: "astroStart", type: "astroStart" }, // Astro acenando (início)
    { id: 1, type: "level" },
    { id: 2, type: "level", route: "/questao2" },
    { id: 3, type: "level", route: "/questao3" },
    { id: 4, type: "level" },
    { id: 5, type: "level" },
    { id: "star", type: "star" }, // ⭐ estrela no lugar do 6
    { id: "player", type: "player" }, // nave / astro
    { id: 7, type: "level" },
    { id: 8, type: "level" },
    { id: 9, type: "level" },
    { id: 10, type: "level" },
  ];

  return (
    <>
      <FundoEstrelado />

      <div className="galaxy-wrapper">
        {/* HEADER */}
        <header className="galaxy-header">
          <h1>
            A Ascensão de Orion
            <span>O Herói Tecnomante</span>
          </h1>
        </header>

        {/* MAPA */}
        <section className="galaxy-map">
          {nodes.map((node, index) => (
            <div key={index} className="galaxy-node">
              {/* Astro acenando - Vai para História */}
              {node.type === "astroStart" && (
                <Link to="/historia">
                  <img
                    src={astroacenando}
                    alt="Astro acenando"
                    className="btn player"
                  />
                </Link>
              )}

              {/* Níveis Dinâmicos - Clicar no 1 vai para /r1, etc. */}
              {node.type === "level" && (
                <Link to={`/r${node.id}`} className="node-link">
                  <button className="btn level">{node.id}</button>
                </Link>
              )}

              {/* Estrela especial - Você pode mudar a rota se quiser */}
              {node.type === "star" && (
                <Link to="/especial" className="node-link">
                  <button className="btn star" aria-label="Missão especial">
                    <img src={Star} alt="Estrela especial" width={32} />
                  </button>
                </Link>
              )}

              {/* Player / Nave */}
              {node.type === "player" && (
                <button className="btn player" aria-label="Sua nave">
                  <img src={Nave} alt="Nave do jogador" width={36} />
                </button>
              )}
            </div>
          ))}
        </section>

        {/* 🪐 PLANETA FINAL CENTRALIZADO */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <img src={planeta} alt="Planeta final" className="planeta-final" />
        </div>

        <Navegacao />
      </div>
    </>
  );
}
