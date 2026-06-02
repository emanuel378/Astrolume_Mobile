import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao8.css";

export default function Questao8() {
  const navigate = useNavigate();

  const ASTEROIDES_INICIAIS = [
    { id: 1, numero: 1, x: 60, y: 80 },
    { id: 2, numero: 2, x: 250, y: 120 },
    { id: 3, numero: 3, x: 500, y: 90 },
    { id: 4, numero: 4, x: 120, y: 320 },
    { id: 5, numero: 5, x: 380, y: 250 },
    { id: 6, numero: 6, x: 600, y: 320 },
  ];

  const [shipX, setShipX] = useState(330);
  const [shots, setShots] = useState([]);
  const [asteroids, setAsteroids] = useState(ASTEROIDES_INICIAIS);

  const [selecionados, setSelecionados] = useState([]);
  const [tentativas, setTentativas] = useState(2);

  const [mensagemErro, setMensagemErro] = useState("");
  const [venceu, setVenceu] = useState(false);
  const [perdeu, setPerdeu] = useState(false);

  function reiniciarFase() {
    setShipX(330);
    setShots([]);
    setAsteroids(ASTEROIDES_INICIAIS);
    setSelecionados([]);
    setMensagemErro("");
    setTentativas(2);
    setVenceu(false);
    setPerdeu(false);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (venceu || perdeu) return;

      if (e.key === "ArrowLeft") {
        setShipX((prev) => Math.max(prev - 25, 0));
      }

      if (e.key === "ArrowRight") {
        setShipX((prev) => Math.min(prev + 25, 660));
      }

      if (e.code === "Space") {
        e.preventDefault();

        setShots((prev) => [
          ...prev,
          {
            id: Date.now(),
            x: shipX + 22,
            y: 540,
          },
        ]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [shipX, venceu, perdeu]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setShots((prev) =>
        prev
          .map((shot) => ({
            ...shot,
            y: shot.y - 10,
          }))
          .filter((shot) => shot.y > 0)
      );
    }, 30);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    shots.forEach((shot) => {
      asteroids.forEach((asteroid) => {
        const hit =
          shot.x > asteroid.x &&
          shot.x < asteroid.x + 60 &&
          shot.y > asteroid.y &&
          shot.y < asteroid.y + 60;

        if (hit) {
          setAsteroids((prev) =>
            prev.filter(
              (a) => a.id !== asteroid.id
            )
          );

          setShots((prev) =>
            prev.filter(
              (s) => s.id !== shot.id
            )
          );

          setSelecionados((prev) => {
            const novos = [
              ...prev,
              asteroid.numero,
            ];

            if (novos.length === 2) {
              const soma =
                novos[0] + novos[1];

              if (soma === 5) {
                setVenceu(true);
              } else {
                const restantes =
                  tentativas - 1;

                setTentativas(restantes);

                if (restantes <= 0) {
                  setPerdeu(true);
                }

                setMensagemErro(
                  `${novos[0]} + ${novos[1]} não é igual a 5`
                );

                setTimeout(() => {
                  if (!venceu) {
                    setSelecionados([]);
                    setAsteroids(
                      ASTEROIDES_INICIAIS
                    );
                  }
                }, 1200);
              }
            }

            return novos;
          });
        }
      });
    });
  }, [shots, asteroids, tentativas, venceu]);

  return (
    <div className="game-container">
      <h1>🚀 Missão dos Asteroides</h1>

      <h2>? + ? = 5</h2>

      <p>
        Acerte dois asteroides cuja soma
        seja 5.
      </p>

      <p>
        ❤️ Tentativas restantes:
        {" "}
        {tentativas}
      </p>

      <div className="selected">
        Escolhidos:
        {" "}
        {selecionados.join(" + ")}
      </div>

      {mensagemErro && !venceu && !perdeu && (
        <div className="erro-box">
          {mensagemErro}
        </div>
      )}

      <div className="game-area">
        {asteroids.map((asteroid) => (
          <div
            key={asteroid.id}
            className="asteroid"
            style={{
              left: asteroid.x,
              top: asteroid.y,
            }}
          >
            {asteroid.numero}
          </div>
        ))}

        {shots.map((shot) => (
          <div
            key={shot.id}
            className="shot"
            style={{
              left: shot.x,
              top: shot.y,
            }}
          />
        ))}

        <div
          className="ship"
          style={{ left: shipX }}
        >
          🚀
        </div>
      </div>

      {venceu && (
        <div className="result-box success">
          <h2>
            ✅ Muito bem!
          </h2>

          <p>
            Você encontrou os números
            corretos.
          </p>

          <button
            onClick={() =>
              navigate("/r9")
            }
          >
            Continuar
          </button>
        </div>
      )}

      {perdeu && (
        <div className="result-box fail">
          <h2>
            ❌ Missão Falhou
          </h2>

          <button
            onClick={reiniciarFase}
          >
            Tentar Novamente
          </button>
        </div>
      )}
    </div>
  );
}