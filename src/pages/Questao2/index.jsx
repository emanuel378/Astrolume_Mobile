import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao2.css";

import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import astroacenando from "../../assets/astroacenando.png";

export default function Questao2() {
  const navigate = useNavigate();

  const respostaCorreta = "Verbo";

  const explicacoes = {
    Casa: "Casa é um substantivo, pois nomeia um lugar.",
    Azul: "Azul é um adjetivo, pois indica uma característica ou cor.",
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
          <h1>O que é Verbo?</h1>

          <p>Qual das opções representa uma ação?</p>

          <div className="options">
            <button onClick={() => verificarResposta("Casa")}>Casa</button>

            <button onClick={() => verificarResposta("Verbo")}>Verbo</button>

            <button onClick={() => verificarResposta("Azul")}>Azul</button>
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

              <button
                className="continuar-btn"
                onClick={() => navigate("/r3")}
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
