import React, { useState } from 'react';
import Producto from '../Producto';
import Star from './Star';
import logo from '../logo.svg';
import '../App.css';

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
        {productos.map((producto, productoIndex) => (
          <div key={producto.nombre} className="producto-card">
            <img src={logo} alt={producto.nombre} className="producto-img" />
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
            <div className="star-rating">
              {[...Array(5)].map((valorIgnorado, estrellaIndex) => {
                const starValue = estrellaIndex + 1;
                const filled = starValue <= (hovers[productoIndex] || ratings[productoIndex]);
                return (
                  <Star
                    key={starValue}
                    filled={filled}
                    onClick={() => handleRating(productoIndex, starValue)}
                    onMouseEnter={() => handleHover(productoIndex, starValue)}
                    onMouseLeave={() => handleHover(productoIndex, 0)}
                  />
                );
              })}
            </div>
            <div className="calificacion-texto">
              {ratings[productoIndex] > 0 ? `Calificación: ${ratings[productoIndex]} estrellas` : 'Sin calificación'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarRatingDemo;
