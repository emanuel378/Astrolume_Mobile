import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao9.css";

import astroacenando from "../../assets/astroacenando.png";

export default function Questao9() {
  const navigate = useNavigate();

  const [acertou, setAcertou] = useState(false);
  const [erro, setErro] = useState(false);
  const [explicacao, setExplicacao] = useState("");

  function verificarResposta(opcao) {
    if (opcao === "B") {
      setAcertou(true);
      setErro(false);
    } else {
      const explicacoes = {
        A: "4 não completa a conta. 3 + 4 = 7.",
        C: "6 é maior que o necessário. 3 + 6 = 9."
      };

      setExplicacao(explicacoes[opcao]);
      setErro(true);
    }
  }

  return (
    <div className="questao-container">

      <img
        src={astroacenando}
        alt="Astro"
        className="astro-img"
      />

      <div className="questao-box">

        <h2>Desafio Matemático</h2>

        <p className="pergunta">
          3 + ? = 8
        </p>

        {!acertou && !erro && (
          <div className="opcoes">

            <button
              onClick={() =>
                verificarResposta("A")
              }
            >
              A) 4
            </button>

            <button
              onClick={() =>
                verificarResposta("B")
              }
            >
              B) 5
            </button>

            <button
              onClick={() =>
                verificarResposta("C")
              }
            >
              C) 6
            </button>

          </div>
        )}

        {erro && (
          <div className="resultado erro">

            <h3>❌ Resposta incorreta</h3>

            <p>{explicacao}</p>

            <button
              onClick={() => {
                setErro(false);
                setExplicacao("");
              }}
            >
              Tentar novamente
            </button>

          </div>
        )}

        {acertou && (
          <div className="resultado acerto">

            <h3>✅ Muito bem!</h3>

            <p>
              Correto! 3 + 5 = 8.
            </p>

            <button
              onClick={() =>
                navigate("/r10")
              }
            >
              Continuar
            </button>

          </div>
        )}

      </div>

    </div>
  );
}