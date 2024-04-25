import React from 'react';

function Boton({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`Boton ${className}`}>
      {children}
    </button>
  );
}

export default Boton;

