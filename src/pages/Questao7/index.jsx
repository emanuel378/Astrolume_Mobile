import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao7.css";

import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import astroacenando from "../../assets/astroacenando.png";

export default function Questao7() {
  const navigate = useNavigate();

  const respostaCorreta = "18";

  const explicacoes = {
    16: "16 seria o resultado de 8 + 8. Verifique a soma novamente.",
    20: "20 é maior que o resultado correto. Tente refazer a conta.",
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
          <h1>Novo Setor da Galáxia</h1>

          <p>Resolva o desafio para continuar:</p>

          <h2>9 + 9 = ?</h2>

          <div className="options">
            <button onClick={() => verificarResposta("16")}>A) 16</button>

            <button onClick={() => verificarResposta("18")}>B) 18</button>

            <button onClick={() => verificarResposta("20")}>C) 20</button>
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

              <p>Muito bem! 9 + 9 = 18.</p>

              <button
                className="continuar-btn"
                onClick={() => navigate("/questao8")}
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
