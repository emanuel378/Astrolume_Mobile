import Explicacao from "../../../componets/Explic/explic";
import FundoEstrelado from "../../../componets/FundoEstrelado/FundoEstrelado";
import { Link } from "react-router-dom";

export default function Resumo1() {
  return (
    <div className="explicacao-page">
      <FundoEstrelado />

      <Explicacao
        titulo="Denotação e Conotação"
        resumo={`🚀 Na nossa jornada, as palavras mudam de forma!

📖 Denotação: É a palavra "real". O sentido literal do dicionário. Sem mistérios.

✨ Conotação: É a palavra "mágica". O sentido figurado, cheio de emoção e novos significados.`}
        exemplo={`📍 Na prática:

☀️ Literal: "O Sol ilumina o espaço."
(Luz real, física)

💡 Figurado: "Orion é a luz da equipe."
(Ele é essencial e inspira!)`}
      />

      <div className="Buttons">

        <Link to="/r2">
          <button className="btn-continuar">
            Continuar
          </button>
        </Link>

        <Link to="/galaxinicial">
          <button className="btn-voltar">
            Voltar
          </button>
        </Link>

      </div>
    </div>
  );
}