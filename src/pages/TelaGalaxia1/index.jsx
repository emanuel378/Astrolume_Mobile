import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import "./tela.css";

// 📦 Assets
import Nave from "../../assets/Nave.png";
import astroacenando from "../../assets/astroacenando.png";
import Star from "../../assets/Star.png";
import planeta from "../../assets/planeta.png";
import Navegacao from "../../componets/Footer";
import { Link } from "react-router-dom";
export default function GalaxiaOrion() {
  const nodes = [
    { id: "astroStart", type: "astroStart" }, // Astro acenando (início)

    { id: 1, type: "level" },
    { id: 2, type: "level" },
    { id: 3, type: "level" },
    { id: 4, type: "level" },

    // ❌ estrela após o 4 REMOVIDA

    { id: 5, type: "level" },

    { id: "star", type: "star" }, // ⭐ estrela no lugar do 6

    { id: "player", type: "player" }, // nave / astro

    { id: 7, type: "level" },
    { id: 8, type: "level" },
    { id: 9, type: "level" },
    { id: 10, type: "level" }
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
              {/* Astro acenando */}
              {node.type === "astroStart" && (
                <a href="/historia">
                   <img
                   src={astroacenando}
                   alt="Astro acenando"
                   className="btn player"/></a>
              )}

              {/* Níveis */}
              {node.type === "level" && (
                <button className="btn level">{node.id}</button>
              )}

              {/* Estrela especial */}
              {node.type === "star" && (
                <button className="btn star" aria-label="Missão especial">
                  <img src={Star} alt="Estrela especial" width={32} />
                </button>
              )}

              {/* Player */}
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
            marginTop: "3rem"
          }}
        >
          <img
            src={planeta}
            alt="Planeta final"
            className="planeta-final"
          />


        </div>
        <Navegacao/>
      </div>
    </>
  );
}
