import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao6.css";

import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import astroacenando from "../../assets/astroacenando.png";

export default function Questao6() {
  const navigate = useNavigate();

  const respostaCorreta = "10";

  const explicacoes = {
    8: "8 é menor que o resultado correto. Some os valores novamente.",
    12: "12 é maior que o resultado correto. Verifique a operação com atenção.",
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
          <h1>⭐ Missão Especial</h1>

          <h2>O Núcleo da Estrela Perdida</h2>

          <p>Para ativar o poder da estrela, resolva o desafio:</p>

          <h3>6 + 4 = ?</h3>

          <div className="options">
            <button onClick={() => verificarResposta("8")}>A) 8</button>

            <button onClick={() => verificarResposta("10")}>B) 10</button>

            <button onClick={() => verificarResposta("12")}>C) 12</button>
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
              <h3>⭐ Estrela Restaurada!</h3>

              <p>
                Excelente trabalho! Você recuperou a energia da estrela perdida.
              </p>

              <button
                className="continuar-btn"
                onClick={() => navigate("/questao7")}
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
