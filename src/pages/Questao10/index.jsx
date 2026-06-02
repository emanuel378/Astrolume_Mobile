import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao10.css";
import astroacenando from "../../assets/astroacenando.png";

export default function Questao10() {
  const navigate = useNavigate();

  const perguntas = [
    {
      pergunta: "2 + 3 = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      explicacao: "2 + 3 é igual a 5."
    },
    {
      pergunta: "4 + 1 = ?",
      opcoes: ["5", "4", "6"],
      correta: 0,
      explicacao: "4 + 1 é igual a 5."
    },
    {
      pergunta: "1 → 2 → 3 → ?",
      opcoes: ["5", "4", "6"],
      correta: 1,
      explicacao: "A sequência cresce de 1 em 1."
    },
    {
      pergunta: "3 + ? = 5",
      opcoes: ["1", "2", "3"],
      correta: 1,
      explicacao: "3 + 2 = 5."
    },
    {
      pergunta: "2 + 2 = ?",
      opcoes: ["4", "5", "3"],
      correta: 0,
      explicacao: "2 + 2 = 4."
    },
    {
      pergunta: "Eu _____ uma maçã.",
      opcoes: ["corro", "como", "azul"],
      correta: 1,
      explicacao: "O verbo correto é 'como'."
    },
    {
      pergunta: "O cachorro _____ no quintal.",
      opcoes: ["corre", "mesa", "feliz"],
      correta: 0,
      explicacao: "'Corre' é a ação do cachorro."
    },
    {
      pergunta: "A menina _____ um livro.",
      opcoes: ["lê", "azul", "cadeira"],
      correta: 0,
      explicacao: "'Lê' completa corretamente a frase."
    },
    {
      pergunta: "Qual destas palavras é um verbo?",
      opcoes: ["correr", "bola", "escola"],
      correta: 0,
      explicacao: "Verbos representam ações."
    },
    {
      pergunta: "Nós _____ para a escola.",
      opcoes: ["estudamos", "escola", "lápis"],
      correta: 0,
      explicacao: "'Estudamos' é o verbo correto."
    }
  ];

  const [inicio, setInicio] = useState(true);
  const [atual, setAtual] = useState(0);
  const [erro, setErro] = useState(false);
  const [acertou, setAcertou] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  function verificarResposta(indice) {
    if (indice === perguntas[atual].correta) {
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
    setErro(false);
    setAcertou(false);
  }

  if (inicio) {
    return (
      <div className="questao10-container">
        <img
          src={astroacenando}
          alt="Astro"
          className="astro-img"
        />

        <div className="final-box">
          <h1>⭐ Desafio Final ⭐</h1>

          <p>
            Você chegou até aqui!
          </p>

          <p>
            Durante sua jornada você aprendeu
            sobre matemática, verbos e como
            completar frases corretamente.
          </p>

          <p>
            Agora é hora de colocar todo esse
            conhecimento em prática.
          </p>

          <p>
            Ajude Astro a recuperar a energia
            da Tecnokardia completando todos os
            desafios.
          </p>

          <button
            onClick={() => setInicio(false)}
          >
            Começar Desafio
          </button>
        </div>
      </div>
    );
  }

  if (finalizado) {
    return (
      <div className="questao10-container">
        <img
          src={astroacenando}
          alt="Astro"
          className="astro-img"
        />

        <div className="final-box">
          <h1>🏆 Parabéns! 🏆</h1>

          <p>
            Você concluiu o Desafio Final da
            Galáxia Orion!
          </p>

          <p>
            Graças ao seu esforço, Astro
            conseguiu recuperar a energia da
            Tecnokardia.
          </p>

          <p>
            Continue explorando novas galáxias
            e aprendendo cada vez mais.
          </p>

          <button
            onClick={() =>
              navigate("/galaxinicial")
            }
          >
            Voltar para Galáxias
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="questao10-container">

      <img
        src={astroacenando}
        alt="Astro"
        className="astro-img"
      />

      <div className="questao-box">

        <h2>Desafio Final</h2>

        <span className="contador">
          Pergunta {atual + 1} de {perguntas.length}
        </span>

        <h3>
          {perguntas[atual].pergunta}
        </h3>

        {!erro && !acertou && (
          <div className="opcoes">
            {perguntas[atual].opcoes.map(
              (opcao, index) => (
                <button
                  key={index}
                  onClick={() =>
                    verificarResposta(index)
                  }
                >
                  {opcao}
                </button>
              )
            )}
          </div>
        )}

        {erro && (
          <div className="resultado erro">

            <h3>
              ❌ Ainda não foi dessa vez!
            </h3>

            <p>
              {perguntas[atual].explicacao}
            </p>

            <p>
              Não desista! Aprender também faz
              parte de tentar novamente.
            </p>

            <button
              onClick={() =>
                setErro(false)
              }
            >
              Tentar novamente
            </button>

          </div>
        )}

        {acertou && (
          <div className="resultado acerto">

            <h3>
              ✅ Correto!
            </h3>

            <p>
              Muito bem! Continue assim.
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