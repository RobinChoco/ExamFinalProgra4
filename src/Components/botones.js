import React, { useState } from 'react';
import './botones.css';
import Boton from './funcBoton';
import Sumadora from './sumadora';
import CambiadorImagenes from './cambiadorImagenes';
import FrasesAleatorias from './frases';

function Botones() {
  const [mostrarInput, setMostrarInput] = useState(false); 
  const [mostrarCambiador, setMostrarCambiador] = useState(false);
  const [mostrarFrases, setMostrarFrases] = useState(false);

  
  const handleClick1 = () => {
    console.log('Botón 1 clickeado');
    
    setMostrarInput(true);
    setMostrarCambiador(false);
    setMostrarFrases(false);
  };

  
  const handleClick2 = () => {
    console.log('Botón 2 clickeado');
    
    setMostrarCambiador(true);
    setMostrarInput(false);
    setMostrarFrases(false);
  };

  const handleClick3 = () => {
    setMostrarFrases(true);
    setMostrarInput(false);
    setMostrarCambiador(false);
  };

  
  const handleAtras = () => {
    setMostrarCambiador(false);
    setMostrarInput(false);
    setMostrarFrases(false);
  };

  return (
    <div>
      <div className="contenedor-botones">
        {/* Botón 1 */}
        <Boton onClick={handleClick1} className="boton">
          Sumadora
        </Boton>
  
        {/* Botón 2 */}
        <Boton onClick={handleClick2} className="boton">
          Imágenes
        </Boton>
  
        {/* Botón 3 */}
        <Boton onClick={handleClick3} className="boton">
          Frases
        </Boton>
      </div>
  
      
      <div className="componente-container">
        {mostrarInput && <Sumadora />}
        {mostrarCambiador && (
          <CambiadorImagenes
            imagenes={[
              'Tyla.jpg',
              'Patillo.jpg',
              'horno.jpg',
              'Pizza.png',
              'Tyla2.jpg',
            ]}
          />
        )}
        {mostrarFrases && <FrasesAleatorias />}
        
        
        {(mostrarInput || mostrarCambiador || mostrarFrases) && (
          <Boton onClick={handleAtras} className='b-regreso'>Regresar</Boton>
        )}
      </div>
    </div>
  );
  
  
}

export default Botones;
