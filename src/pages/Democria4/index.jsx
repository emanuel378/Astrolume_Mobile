import { useState } from "react";
import { useNavigate } from "react-router-dom";

import astroacenando from "../../assets/astroacenando.png";
import "./democria4.css";

export default function Democria4() {
  const navigate = useNavigate();

  const [respondido, setRespondido] = useState(false);
  const [acertou, setAcertou] = useState(false);

  function verificarResposta(opcao) {
    setRespondido(true);

    if (opcao === "juntos") {
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
    <div className="democria4-container">

      <img
        src={astroacenando}
        alt="Astro"
        className="astro-img"
      />

      <div className="democria4-box">

        <h1>🤝 Casa da Cooperação</h1>

        <p className="descricao">
          Astro encontrou um rio bloqueando o
          caminho dos cidadãos.
        </p>

        <p className="descricao">
          Eles precisam construir uma ponte
          para atravessar.
        </p>

        <h2>
          O que ajuda a construir a ponte mais rápido?
        </h2>

        {!respondido && (
          <div className="opcoes">

            <button
              onClick={() =>
                verificarResposta("sozinho")
              }
            >
              🔨 Cada pessoa trabalha sozinha
            </button>

            <button
              onClick={() =>
                verificarResposta("juntos")
              }
            >
              🤝 Todos trabalham juntos
            </button>

            <button
              onClick={() =>
                verificarResposta("ninguem")
              }
            >
              😴 Ninguém ajuda
            </button>

          </div>
        )}

        {respondido && acertou && (
          <div className="resultado sucesso">

            <h2>✅ Excelente!</h2>

            <p>
              Quando as pessoas cooperam,
              o trabalho fica mais fácil.
            </p>

            <p>
              Trabalhar em equipe ajuda a
              resolver problemas e alcançar
              objetivos mais rapidamente.
            </p>

            <button
              onClick={() =>
                navigate("/democria5")
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
              Pense em qual opção permite
              que as pessoas se ajudem para
              resolver o problema.
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