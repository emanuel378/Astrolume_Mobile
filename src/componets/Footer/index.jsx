import user from "../../assets/user.png";
import Home from "../../assets/Home.png";
import premier from "../../assets/premier.png";
import estrela from "../../assets/estrela.png";
import chat from "../../assets/chat.png";

import "./nav.css";

export default function Navegacao() {
  return (
    <footer className="navegacao-container">
      <nav className="navegacao">
        <img src={Home} alt="Home" />
        <img src={estrela} alt="Missões" />
        <img src={user} alt="Perfil" />
        <img src={chat} alt="Chat" />
        <img src={premier} alt="Premium" className="premium" />
      </nav>
    </footer>
  );
}
