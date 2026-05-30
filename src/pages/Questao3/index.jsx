import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao3.css";

import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import astroacenando from "../../assets/astroacenando.png";

export default function Questao3() {
  const navigate = useNavigate();

  const respostaCorreta = "é";

  const explicacoes = {
    arma: "Arma é um substantivo, pois nomeia um objeto.",
    conhecimento:
      "Conhecimento é um substantivo, pois representa uma ideia ou conceito.",
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
        <img src={astroacenando} alt="Astro" className="astro-img" />

        <div className="question-box">
          <h1>O Chamado do Chip Ancestral</h1>

          <p>Complete a frase que aparece no holograma:</p>

          <h2>"O conhecimento ___ a arma mais poderosa."</h2>

          <div className="options">
            <button onClick={() => verificarResposta("é")}>A) é</button>

            <button onClick={() => verificarResposta("arma")}>B) arma</button>

            <button onClick={() => verificarResposta("conhecimento")}>
              C) conhecimento
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
                O verbo "é" indica um estado e completa corretamente a frase.
              </p>

              <button
                className="continuar-btn"
                onClick={() => navigate("/r4")}
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
