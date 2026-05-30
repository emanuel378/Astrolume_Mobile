import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao5.css";

import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import astroacenando from "../../assets/astroacenando.png";

export default function Questao5() {
  const navigate = useNavigate();

  const respostaCorreta = "7";

  const explicacoes = {
    6: "6 é o resultado de 3 + 3. Verifique a soma novamente.",
    8: "8 é maior que o resultado correto. Tente somar os números com atenção.",
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
          <h1>Desafio de Adição</h1>

          <p>Quanto é 3 + 4?</p>

          <div className="options">
            <button onClick={() => verificarResposta("6")}>A) 6</button>

            <button onClick={() => verificarResposta("7")}>B) 7</button>

            <button onClick={() => verificarResposta("8")}>C) 8</button>
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

              <p>Muito bem! 3 + 4 = 7.</p>

              <button
                className="continuar-btn"
                onClick={() => navigate("/especial")}
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
