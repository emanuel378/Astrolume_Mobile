import './FundoEstrelado.css';

export default function FundoEstrelado() {
  return (
    <div className="fundo-estrelado">
      {/* Camadas de estrelas para profundidade */}
      <div className="estrelas-camada estrelas-pequenas"></div>
      <div className="estrelas-camada estrelas-medias"></div>
      <div className="estrelas-camada estrelas-grandes"></div>
      <div className="estrelas-camada estrelas-cintilantes"></div>
    </div>
  );
}