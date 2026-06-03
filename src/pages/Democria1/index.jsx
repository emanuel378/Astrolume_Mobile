import { useNavigate } from "react-router-dom";

import historiaDemocria from "../../assets/historia-democria.jpeg";
import "./democria1.css";

export default function Democria1() {
  const navigate = useNavigate();

  return (
    <div className="democria1-container">

      <img
        src={historiaDemocria}
        alt="História Democria"
        className="hq-img"
      />

      <div className="botoes">

        <button onClick={() => navigate("/democria")}>
          ⬅ Voltar
        </button>

        <button onClick={() => navigate("/democria2")}>
          🚀 Continuar
        </button>

      </div>

    </div>
  );
}