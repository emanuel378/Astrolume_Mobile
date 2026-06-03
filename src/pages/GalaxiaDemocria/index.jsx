import { Link } from "react-router-dom";
import "./galaxiademocria.css";

export default function GalaxiaDemocria() {
  return (
    <div className="democria-container">

      <div className="header-democria">
        <h1>🌎 Democria</h1>
        <p>A cidade da participação e da cidadania</p>
      </div>

      <div className="cidade">

        <Link to="/democria1" className="predio assembleia">
          <span className="icone">🏛️</span>
          <span>Assembleia</span>
        </Link>

        <Link to="/democria2" className="predio escola">
          <span className="icone">🏫</span>
          <span>Escola</span>
        </Link>

        <Link to="/democria3" className="predio votacao">
          <span className="icone">🗳️</span>
          <span>Centro de votação</span>
        </Link>

        <Link to="/democria4" className="predio cooperacao">
          <span className="icone">🤝</span>
          <span>Casa da cooperação</span>
        </Link>

        <div className="praca-central">
          <div className="globo">🌎</div>
          <h2>Praça da Democracia</h2>
        </div>

        <Link to="/democria5" className="predio direitos">
          <span className="icone">📜</span>
          <span>Biblioteca dos direitos</span>
        </Link>

        <Link to="/checkpointdemocria" className="checkpoint">
          <span className="icone">🚉</span>
          <span>Checkpoint</span>
        </Link>

      </div>

    </div>
  );
}