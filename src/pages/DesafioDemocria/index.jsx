import { useState } from "react";
import { useNavigate } from "react-router-dom";

import astroacenando from "../../assets/astroacenando.png";
import "./desafiodemocria.css";

export default function DesafioDemocria() {
  const navigate = useNavigate();

  const perguntas = [
    {
      pergunta: "Na democracia, as pessoas podem:",
      opcoes: [
        "Dar opiniões",
        "Ficar sempre caladas",
        "Não participar"
      ],
      correta: 0
    },
    {
      pergunta: "Qual atitude ajuda a turma?",
      opcoes: [
        "Brigar",
        "Respeitar os colegas",
        "Empurrar os colegas"
      ],
      correta: 1
    },
    {
      pergunta:
        "Qual projeto venceu?\n🌳 Parque → 2 votos\n📚 Biblioteca → 4 votos\n⚽ Quadra → 1 voto",
      opcoes: [
        "Parque",
        "Biblioteca",
        "Quadra"
      ],
      correta: 1
    },
    {
      pergunta:
        "O que ajuda um grupo a resolver problemas?",
      opcoes: [
        "Trabalhar juntos",
        "Ignorar os colegas",
        "Não ajudar"
      ],
      correta: 0
    },
    {
      pergunta:
        "Brincar e se divertir é:",
      opcoes: [
        "Direito",
        "Dever"
      ],
      correta: 0
    },
    {
      pergunta:
        "Respeitar os colegas é:",
      opcoes: [
        "Direito",
        "Dever"
      ],
      correta: 1
    },
    {
      pergunta:
        "Se uma opção recebeu mais votos, ela foi escolhida pela:",
      opcoes: [
        "Maioria",
        "Sorte",
        "Coincidência"
      ],
      correta: 0
    },
    {
      pergunta:
        "Em uma comunidade, é importante:",
      opcoes: [
        "Cooperar",
        "Atrapalhar",
        "Excluir pessoas"
      ],
      correta: 0
    },
    {
      pergunta:
        "Estudar na escola é:",
      opcoes: [
        "Direito",
        "Castigo",
        "Privilégio de poucos"
      ],
      correta: 0
    },
    {
      pergunta:
        "Qual destas atitudes combina com a cidadania?",
      opcoes: [
        "Respeitar as regras e as pessoas",
        "Fazer bagunça",
        "Prejudicar os colegas"
      ],
      correta: 0
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
      <div className="desafio-container">

        <img
          src={astroacenando}
          alt="Astro"
          className="astro-img"
        />

        <div className="final-box">

          <h1>🌎 Desafio Final de Democria 🌎</h1>

          <p>
            Você explorou a Assembleia das Ideias,
            a Escola Cidadã, o Centro de Votação,
            a Casa da Cooperação e a Biblioteca dos Direitos.
          </p>

          <p>
            Agora é hora de mostrar tudo o que aprendeu.
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
      <div className="desafio-container">

        <img
          src={astroacenando}
          alt="Astro"
          className="astro-img"
        />

        <div className="final-box">

          <h1>🏆 Parabéns! 🏆</h1>

          <p>Você concluiu a Galáxia Democria!</p>

          <p>
            🗳️ A democracia valoriza a participação.
          </p>

          <p>
            🤝 A cooperação ajuda a resolver problemas.
          </p>

          <p>
            🏫 O respeito melhora a convivência.
          </p>

          <p>
            📜 Direitos e deveres são importantes para todos.
          </p>

          <p>
            Astro está orgulhoso da sua jornada!
          </p>

          <button
            onClick={() => navigate("/galaxiademocria")}
          >
            🌎 Voltar para Democria
          </button>

          <button
            onClick={() => navigate("/galaxias")}
          >
            🚀 Voltar para Galáxias
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="desafio-container">

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

        <h3 style={{ whiteSpace: "pre-line" }}>
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

            <h3>❌ Tente novamente!</h3>

            <button
              onClick={() => setErro(false)}
            >
              Tentar novamente
            </button>

          </div>
        )}

        {acertou && (
          <div className="resultado acerto">

            <h3>✅ Correto!</h3>

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