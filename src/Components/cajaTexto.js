import React, { useState } from 'react';
import './cajaTexto.css';

const CajaTexto = () => {
  const [inputText, setInputText] = useState('');
  const [textStack, setTextStack] = useState([]);

  const CambiosIngresados = (e) => {
    setInputText(e.target.value);
  };

  const Guardar = () => {
    if (inputText.trim()) {
      const timestamp = new Date().toLocaleString();
      setTextStack([{ text: inputText, timestamp}, ...textStack]);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={CambiosIngresados}
        placeholder="Ingresa tu texto aquí"
        className="input-texto"
      />
      <button onClick={Guardar} className="boton-guardar">Guardar</button>

      <ul className="texto-guardado">
        {textStack.map((item, index) => (
          <li key={index}>
            {item.text} -- {item.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CajaTexto;
