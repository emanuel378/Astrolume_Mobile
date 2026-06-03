import { useState } from "react";
import { useNavigate } from "react-router-dom";

import astroacenando from "../../assets/astroacenando.png";
import "./democria3.css";

export default function Democria3() {
  const navigate = useNavigate();

  const [respondido, setRespondido] = useState(false);
  const [acertou, setAcertou] = useState(false);

  function verificarResposta(opcao) {
    setRespondido(true);

    if (opcao === "biblioteca") {
      setAcertou(true);
    } else {
      setAcertou(false);
    }
  }

  function tentarNovamente() {
    setRespondido(false);
    setAcertou(false);
  }

  return (
    <div className="democria3-container">

      <img
        src={astroacenando}
        alt="Astro"
        className="astro-img"
      />

      <div className="democria3-box">

        <h1>🗳️ Centro de Votação</h1>

        <p className="descricao">
          Os cidadãos votaram para escolher
          uma melhoria para a cidade.
        </p>

        <div className="votos-box">

          <div className="voto-item">
            🌳 Parque → <strong>2 votos</strong>
          </div>

          <div className="voto-item">
            📚 Biblioteca → <strong>4 votos</strong>
          </div>

          <div className="voto-item">
            ⚽ Quadra → <strong>1 voto</strong>
          </div>

        </div>

        <h2>
          Qual projeto recebeu mais votos?
        </h2>

        {!respondido && (
          <div className="opcoes">

            <button
              onClick={() =>
                verificarResposta("parque")
              }
            >
              🌳 Parque
            </button>

            <button
              onClick={() =>
                verificarResposta("biblioteca")
              }
            >
              📚 Biblioteca
            </button>

            <button
              onClick={() =>
                verificarResposta("quadra")
              }
            >
              ⚽ Quadra
            </button>

          </div>
        )}

        {respondido && acertou && (
          <div className="resultado sucesso">

            <h2>✅ Muito bem!</h2>

            <p>
              A Biblioteca recebeu 4 votos,
              mais do que qualquer outra opção.
            </p>

            <p>
              Na democracia, a opção com mais
              votos é escolhida pela maioria.
            </p>

            <button
              onClick={() =>
                navigate("/democria4")
              }
            >
              Continuar
            </button>

          </div>
        )}

        {respondido && !acertou && (
          <div className="resultado erro">

            <h2>❌ Quase!</h2>

            <p>
              Observe a quantidade de votos
              de cada opção e tente novamente.
            </p>

            <button
              onClick={tentarNovamente}
            >
              Tentar novamente
            </button>

          </div>
        )}

      </div>

    </div>
  );
}