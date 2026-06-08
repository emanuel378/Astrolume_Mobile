import React, { useEffect, useRef } from 'react';
import './linha.css';

const LinhaConexao = ({ 
  id, 
  from, 
  to, 
  x = 0, 
  y = 0, 
  width = 100, 
  rotation = 0,
  delay = 0,
  pulsar = true 
}) => {
  const linhaRef = useRef(null);

  useEffect(() => {
    if (linhaRef.current && pulsar) {
      // Animação de pulsar com delay individual
      linhaRef.current.style.animationDelay = `${delay}s`;
    }
  }, [delay, pulsar]);

  return (
    <div 
      ref={linhaRef}
      className="linha-conexao"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        transform: `rotate(${rotation}deg)`,
      }}
      data-from={from}
      data-to={to}
    />
  );
};

export default LinhaConexao;