import React, { useState } from 'react';
import Boton from './funcBoton';
import Botones from './botones';
import CajaTexto from './cajaTexto';
import Catalogo from './catalogo';
import './botonesSuperiores.css';

function BotonesSuperiores() {
  const [mostrarBotones, setMostrarBotones] = useState(false);
  const [mostrarCajaTexto, setMostrarCajaTexto] = useState(false);
  const [mostrarCatalogo, setMostrarCatalogo] = useState(false);

  const handleMostrarContenido = (boton) => {
    setMostrarBotones(false);
    setMostrarCajaTexto(false);
    setMostrarCatalogo(false);

    switch (boton) {
      case 'boton1':
        setMostrarCajaTexto(true);
        break;
      case 'boton2':
        setMostrarBotones(true);
        break;
      case 'boton3':
        setMostrarCatalogo(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button className='boton-amarillo' onClick={() => handleMostrarContenido('boton1')}>Botón Amarillo</button>
      <button className='boton-azul' onClick={() => handleMostrarContenido('boton2')}>Botón Azul</button>
      <button className='boton-rojo' onClick={() => handleMostrarContenido('boton3')}>Botón Rojo</button>
      {mostrarBotones && (
        <div>
          <Botones />
          <Boton onClick={() => setMostrarBotones(false)} className='boton-atras-princ'>Hacia Página Principal</Boton>
        </div>
      )}
      {mostrarCajaTexto && (
        <div>
          <CajaTexto />
          <Boton onClick={() => setMostrarCajaTexto(false)} className='boton-atras-princ'>Hacia Página Principal</Boton>
        </div>
      )}
      {mostrarCatalogo && (
        <div>
          <Catalogo />
          <Boton onClick={() => setMostrarCatalogo(false)} className='boton-atras-princ'>Hacia Página Principal</Boton>
        </div>
      )}
    </div>
  );
}

export default BotonesSuperiores;
