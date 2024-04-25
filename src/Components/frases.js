import React, { useState, useEffect } from 'react';
import './frases.css';

function FrasesAleatorias() {
  const frases = [
    'En la vida hay tres tipos de personas, los que saben contar y los que no.',
    'Normalmente no rezo, pero si estás ahí­, por favor, ¡¡¡sálvame Superman!!!',
    'Por el alcohol, la causa y la solución de todos los problemas de la vida',
    '¡Operadora! ¡Deme el número del 911!',
    'Tendrá todo el dinero del mundo, pero hay algo que nunca podrá comprar… un dinosaurio'
  ];

  const [frase, setFrase] = useState(() => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const indiceAleatorio = Math.floor(Math.random() * frases.length);
      setFrase(frases[indiceAleatorio]);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="frases-container"> 
      <p className="frases-texto">{frase}</p> 
    </div>
  );
}

export default FrasesAleatorias;


