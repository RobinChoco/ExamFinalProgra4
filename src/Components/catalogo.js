import React from 'react';
import './catalogo.css';

const Catalogo = () => {
  
  const peliculas = [
    { id: 1, titulo: 'Bleach: The Movie 2', imagen: 'Bleach2.jpg' },
    { id: 2, titulo: 'Capitán America: El Primer Vengador', imagen: 'CapitanAmerica1.jpg' },
    { id: 3, titulo: 'Final Fantasy VII: Advent Children', imagen: 'FFVII.jpg' },
    { id: 4, titulo: 'Mi Amigo Enzo', imagen: 'MiAmigoEnzo.jpg' },
    { id: 5, titulo: 'Men In Black', imagen: 'MIB.jpg' },
  ];

  return (
    <div>
      <h2>Catálogo de Películas</h2>
      <div className="peliculas-lista catalogo">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="pelicula">
            <img src={pelicula.imagen} alt={pelicula.titulo} />
            <p>{pelicula.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
