import historia from "../../assets/historia.png";
import FundoEstrelado from "../../componets/FundoEstrelado/FundoEstrelado";
import { Link } from "react-router-dom";
import "./Historia.css";

export default function Historia() {
  return (
    <>
      <FundoEstrelado />

      <div className="historia-container">
        <h1 className="historia-titulo">
          O Nascimento de um <br /> <span>Herói</span>
        </h1>

        {/* IMAGEM CENTRAL */}
        <div className="historia-img-wrapper">
          <img
            src={historia}
            alt="História do Herói"
            className="img-principal"
          />
        </div>

        {/* BOTÕES */}
        <div className="historia-botoes">
          <Link to="/galaxinicial">
          <button className="bt-voltar">Voltar</button>
          </Link>
          <button className="bt-continuar">Continuar</button>
        </div>
      </div>
    </>
  );
}
