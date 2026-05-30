import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao4.css";

import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import astroacenando from "../../assets/astroacenando.png";

export default function Questao4() {
  const navigate = useNavigate();

  const respostaCorreta = "Somar";

  const explicacoes = {
    Subtrair:
      "Subtrair significa retirar ou diminuir uma quantidade.",
    Multiplicar:
      "Multiplicar significa repetir uma quantidade várias vezes."
  };

  const [acertou, setAcertou] = useState(false);
  const [mostrarErro, setMostrarErro] = useState(false);
  const [explicacao, setExplicacao] = useState("");

  function verificarResposta(opcao) {
    if (opcao === respostaCorreta) {
      setAcertou(true);
      setMostrarErro(false);
    } else {
      setExplicacao(explicacoes[opcao]);
      setMostrarErro(true);
    }
  }

  return (
    <>
      <FundoEstrelado />

      <div className="questao-container">

        <img
          src={astroacenando}
          alt="Astro"
          className="astro-img"
        />

        <div className="question-box">

          <h1>O que é Adição?</h1>

          <p>
            Qual operação matemática representa a adição?
          </p>

          <div className="options">

            <button onClick={() => verificarResposta("Subtrair")}>
              A) Subtrair
            </button>

            <button onClick={() => verificarResposta("Somar")}>
              B) Somar
            </button>

            <button onClick={() => verificarResposta("Multiplicar")}>
              C) Multiplicar
            </button>

          </div>

          {mostrarErro && (
            <div className="explicacao-box">

              <h3>❌ Resposta incorreta</h3>

              <p>{explicacao}</p>

              <button
                className="tentar-btn"
                onClick={() => setMostrarErro(false)}
              >
                Tentar novamente
              </button>

            </div>
          )}

          {acertou && (
            <div className="acerto-box">

              <h3>✅ Você acertou!</h3>

              <p>
                Adição é a operação matemática usada para somar valores.
              </p>

              <button
                className="continuar-btn"
                onClick={() => navigate("/r5")}
              >
                Continuar
              </button>

            </div>
          )}

          <div className="botoes">

            <button
              className="voltar-btn"
              onClick={() => navigate("/galaxinicial")}
            >
              Voltar
            </button>

          </div>

        </div>

      </div>
    </>
  );
}