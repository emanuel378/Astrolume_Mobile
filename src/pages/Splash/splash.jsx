import './Splash.css';
import logo from '../../assets/logo.png';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';

export default function Splash() {
  return (
    <>
      <FundoEstrelado />
      <div className="splash-container">
        <div className="splash-content">
          <img src={logo} alt="Astro Lume" className="splash-logo" />
          <div className="splash-title">
            <span className="splash-title-first">Astro</span>
            <span className="splash-title-second">Lume</span>
          </div>
        </div>
      </div>
    </>
  );
}