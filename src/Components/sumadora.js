import React, { useState } from 'react';
import './sumadora.css'; 

function Sumadora() {
  const [numero, setNumero] = useState(0); 
  const [resultado, setResultado] = useState(0); 

  const handleChangeNumero = (event) => {
    setNumero(Number(event.target.value)); 
  };


  const handleSuma = () => {
    setResultado(resultado + numero); 
  };

  return (
    <div className="sumadora-container">
      <input
        type="number"
        value={numero}
        onChange={handleChangeNumero}
        className="sumadora-input" 
      />
      <button onClick={handleSuma} className="sumadora-button">Suma</button> 
      <p className="sumadora-resultado">Resultado: {resultado}</p> 
    </div>
  );
}

export default Sumadora;
