import orionexplicando from '../../assets/orionexplicando.png';
import './Explicacao.css';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';

export default function Explicacao({ titulo, resumo, exemplo, children }) {

    const palavras = titulo.split(" ");

    return (
        <div className="explicacao-container">

            <h2 className="titulo">
                {palavras[0]}{" "}
                <span className="titulo-azul">
                    {palavras.slice(1).join(" ")}
                </span>
            </h2>

            <div className="card-resumo">
                <p>{resumo}</p>
            </div>

            <div className="card-exemplo">
                <img 
                    src={orionexplicando} 
                    alt="Orion explicando" 
                    className="planeta" 
                />
                <p>{exemplo}</p>
            </div>

            {children}

        </div>
    );
}