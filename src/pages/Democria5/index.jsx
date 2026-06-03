import { useState } from "react";
import { useNavigate } from "react-router-dom";

import astroacenando from "../../assets/astroacenando.png";
import "./democria5.css";

export default function Democria5() {
  const navigate = useNavigate();

  const perguntas = [
    {
      texto: "📚 Estudar na escola",
      correta: "direito",
      explicacao:
        "Estudar é um direito de todas as crianças."
    },
    {
      texto: "🤝 Respeitar os colegas",
      correta: "dever",
      explicacao:
        "Respeitar os colegas é um dever."
    },
    {
      texto: "🎮 Brincar e se divertir",
      correta: "direito",
      explicacao:
        "Brincar é um direito das crianças."
    },
    {
      texto: "🏫 Cuidar da escola",
      correta: "dever",
      explicacao:
        "Cuidar da escola é um dever de todos."
    }
  ];

  const [atual, setAtual] = useState(0);
  const [acertou, setAcertou] = useState(false);
  const [erro, setErro] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  function verificarResposta(resposta) {
    if (resposta === perguntas[atual].correta) {
      setAcertou(true);
      setErro(false);
    } else {
      setErro(true);
      setAcertou(false);
    }
  }

  function proximaPergunta() {
    if (atual === perguntas.length - 1) {
      setFinalizado(true);
      return;
    }

    setAtual(atual + 1);
    setAcertou(false);
    setErro(false);
  }

  if (finalizado) {
    return (
      <div className="democria5-container">

        <img
          src={astroacenando}
          alt="Astro"
          className="astro-img"
        />

        <div className="democria5-box">

          <h1>📜 Biblioteca dos Direitos</h1>

          <h2>✅ Excelente!</h2>

          <p>
            Você ajudou Astro a organizar
            a Biblioteca dos Direitos.
          </p>

          <p>
            Direitos são coisas que todas
            as pessoas devem poder ter.
          </p>

          <p>
            Deveres são responsabilidades
            que ajudam a convivência de todos.
          </p>

          <button
            onClick={() =>
              navigate("/desafiodemocria")
            }
          >
            ⭐ Ir para o Desafio Final
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="democria5-container">

      <img
        src={astroacenando}
        alt="Astro"
        className="astro-img"
      />

      <div className="democria5-box">

        <h1>📜 Biblioteca dos Direitos</h1>

        <span className="contador">
          Pergunta {atual + 1} de {perguntas.length}
        </span>

        <h2>
          {perguntas[atual].texto}
        </h2>

        {!acertou && !erro && (
          <div className="opcoes">

            <button
              onClick={() =>
                verificarResposta("direito")
              }
            >
              📖 Direito
            </button>

            <button
              onClick={() =>
                verificarResposta("dever")
              }
            >
              📋 Dever
            </button>

          </div>
        )}

        {erro && (
          <div className="resultado erro">

            <h2>❌ Quase!</h2>

            <p>
              Pense melhor e tente novamente.
            </p>

            <button
              onClick={() => {
                setErro(false);
              }}
            >
              Tentar novamente
            </button>

          </div>
        )}

        {acertou && (
          <div className="resultado sucesso">

            <h2>✅ Correto!</h2>

            <p>
              {perguntas[atual].explicacao}
            </p>

            <button
              onClick={proximaPergunta}
            >
              Continuar
            </button>

          </div>
        )}

      </div>

    </div>
  );
}