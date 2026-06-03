import { useState } from "react";
import { useNavigate } from "react-router-dom";

import astroacenando from "../../assets/astroacenando.png";
import "./democria2.css";

export default function Democria2() {
  const navigate = useNavigate();

  const [respondido, setRespondido] = useState(false);
  const [acertou, setAcertou] = useState(false);

  function verificarResposta(opcao) {
    setRespondido(true);

    if (opcao === "brigar") {
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
    <div className="democria2-container">

      <img
        src={astroacenando}
        alt="Astro"
        className="astro-img"
      />

      <div className="democria2-box">

        <h1>🏫 Escola Cidadã</h1>

        <p className="descricao">
          Na Escola Cidadã, todos devem colaborar
          para que a turma aprenda e conviva bem.
        </p>

        <h2>
          Qual atitude NÃO ajuda a turma?
        </h2>

        {!respondido && (
          <div className="opcoes">

            <button
              onClick={() =>
                verificarResposta("mao")
              }
            >
              🙋 Levantar a mão
            </button>

            <button
              onClick={() =>
                verificarResposta("estudar")
              }
            >
              📚 Estudar
            </button>

            <button
              onClick={() =>
                verificarResposta("ajudar")
              }
            >
              🤝 Ajudar colegas
            </button>

            <button
              onClick={() =>
                verificarResposta("brigar")
              }
            >
              😡 Brigar
            </button>

          </div>
        )}

        {respondido && acertou && (
          <div className="resultado sucesso">

            <h2>✅ Muito bem!</h2>

            <p>
              Brigar não ajuda a turma.
            </p>

            <p>
              Em uma Escola Cidadã,
              respeito e cooperação são
              importantes para todos.
            </p>

            <button
              onClick={() =>
                navigate("/democria3")
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
              Pense em qual atitude atrapalha
              a convivência entre os colegas.
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