import React, { useState } from 'react';
import Producto from './Producto';
import logo from './logo.svg';
import './App.css';

function StarRatingDemo() {
  // Array de productos hardcodeados
  const productos = [
    new Producto('Producto de Ejemplo', 199.99),
    new Producto('Producto Premium', 499.99),
    new Producto('Producto Básico', 99.99)
  ];

  // Estado para la calificación de cada producto
  const [ratings, setRatings] = useState(Array(productos.length).fill(0));
  const [hovers, setHovers] = useState(Array(productos.length).fill(0));

  const handleRating = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleHover = (index, value) => {
    const newHovers = [...hovers];
    newHovers[index] = value;
    setHovers(newHovers);
  };

  return (
    <div className="App star-demo">
      <h1>Demo de Calificación de Productos</h1>
      <div className="productos-lista">
        {productos.map((producto, idx) => (
          <div key={producto.nombre} className="producto-card">
            <img src={logo} alt={producto.nombre} className="producto-img" />
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => {
                const starValue = i + 1;
                return (
                  <span
                    key={starValue}
                    className="star"
                    onClick={() => handleRating(idx, starValue)}
                    onMouseEnter={() => handleHover(idx, starValue)}
                    onMouseLeave={() => handleHover(idx, 0)}
                  >
                    {starValue <= (hovers[idx] || ratings[idx]) ? '★' : '☆'}
                  </span>
                );
              })}
            </div>
            <div className="calificacion-texto">
              {ratings[idx] > 0 ? `Calificación: ${ratings[idx]} estrellas` : 'Sin calificación'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarRatingDemo;
