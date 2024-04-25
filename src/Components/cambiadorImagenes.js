import React, { useState } from 'react';
import './cambiadorImagenes.css'; 

function CambiadorImagenes({ imagenes }) {
  const [indice, setIndice] = useState(0);

  const handleClickSiguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  return (
    <div className="cambiador-imagenes-container"> 
      <img src={imagenes[indice]} alt={`Imagen ${indice}`} className="cambiador-imagen" />
      <div>
        <button onClick={handleClickSiguiente} className="cambiador-button">Siguiente</button>
      </div>
    </div>
  );
}

export default CambiadorImagenes;

