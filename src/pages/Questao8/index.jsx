import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./questao8.css";

export default function Questao8() {
  const navigate = useNavigate();

  const [shipX, setShipX] = useState(320);
  const [shots, setShots] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [win, setWin] = useState(false);
  const [vidas, setVidas] = useState(2);
  const [gameOver, setGameOver] = useState(false);

  const gerarNumero = () => Math.floor(Math.random() * 6) + 1;

  function criarAsteroideAleatorio() {
    return {
      id: Date.now() + Math.random(),
      number: gerarNumero(),
      x: Math.random() * 600,
      y: -50
    };
  }

  function gerarAsteroides() {
    return [
      { id: 1, number: 1, x: 50, y: 40 },
      { id: 2, number: 2, x: 220, y: 80 },
      { id: 3, number: 3, x: 500, y: 60 },
      { id: 4, number: 4, x: 120, y: 250 },
      { id: 5, number: 5, x: 600, y: 200 },
      { id: 6, number: 6, x: 350, y: 300 }
    ];
  }

  const [asteroids, setAsteroids] = useState(gerarAsteroides());

  // 🚀 Movimento da nave + tiros
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (win || gameOver) return;

      if (e.key === "ArrowLeft") {
        setShipX((prev) => Math.max(prev - 25, 0));
      }

      if (e.key === "ArrowRight") {
        setShipX((prev) => Math.min(prev + 25, 640));
      }

      if (e.code === "Space") {
        e.preventDefault();

        setShots((prev) => [
          ...prev,
          {
            id: Date.now(),
            x: shipX + 25,
            y: 520
          }
        ]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [shipX, win, gameOver]);

  // 🚀 Movimento dos tiros
  useEffect(() => {
    const intervalo = setInterval(() => {
      setShots((prev) =>
        prev
          .map((shot) => ({
            ...shot,
            y: shot.y - 10
          }))
          .filter((shot) => shot.y > 0)
      );
    }, 30);

    return () => clearInterval(intervalo);
  }, []);

  // ☄️ Asteroides caindo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setAsteroids((prev) =>
        prev.map((asteroid) => ({
          ...asteroid,
          y: asteroid.y + 2
        }))
      );
    }, 30);

    return () => clearInterval(intervalo);
  }, []);

  // 🌠 Spawn contínuo de asteroides
  useEffect(() => {
    const intervalo = setInterval(() => {
      setAsteroids((prev) => {
        if (prev.length >= 12) return prev;
        return [...prev, criarAsteroideAleatorio()];
      });
    }, 1200);

    return () => clearInterval(intervalo);
  }, []);

  // 💥 colisão
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
            prev.filter((a) => a.id !== asteroid.id)
          );

          setSelectedNumbers((prev) => {
            const updated = [...prev, asteroid.number];

            if (updated.length === 2) {
              const soma = updated[0] + updated[1];

              if (soma === 5) {
                setWin(true);
              } else {
                const novasVidas = vidas - 1;
                setVidas(novasVidas);

                if (novasVidas <= 0) {
                  setGameOver(true);
                }

                setTimeout(() => {
                  setSelectedNumbers([]);
                  setAsteroids(gerarAsteroides());
                }, 1000);
              }
            }

            return updated;
          });
        }
      });
    });
  }, [shots, asteroids, vidas]);

  function reiniciarJogo() {
    setShipX(320);
    setShots([]);
    setSelectedNumbers([]);
    setWin(false);
    setGameOver(false);
    setVidas(2);
    setAsteroids(gerarAsteroides());
  }

  return (
    <div className="game-container">
      <h1>🚀 Missão Espacial</h1>

      <h2>? + ? = 5</h2>

      <p>Acerte dois asteroides cuja soma seja 5</p>

      <p>❤️ Tentativas restantes: {vidas}</p>

      <div className="selected">
        Números escolhidos: {selectedNumbers.join(" + ")}
      </div>

      <div className="game-area">
        {asteroids.map((asteroid) => (
          <div
            key={asteroid.id}
            className="asteroid"
            style={{
              left: asteroid.x,
              top: asteroid.y
            }}
          >
            {asteroid.number}
          </div>
        ))}

        {shots.map((shot) => (
          <div
            key={shot.id}
            className="shot"
            style={{
              left: shot.x,
              top: shot.y
            }}
          />
        ))}

        <div className="ship" style={{ left: shipX }}>
          🚀
        </div>
      </div>

      {win && (
        <div className="result-box success">
          <h2>✅ Missão Concluída!</h2>

          <button onClick={() => navigate("/questao9")}>
            Continuar
          </button>
        </div>
      )}

      {gameOver && (
        <div className="result-box fail">
          <h2>❌ Você perdeu!</h2>

          <button onClick={reiniciarJogo}>
            Tentar Novamente
          </button>
        </div>
      )}
    </div>
  );
}