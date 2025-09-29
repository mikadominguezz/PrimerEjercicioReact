import React, { useState } from 'react';
import Producto from '../Producto';
import Star from './Star';
import logo from '../logo.svg';
import '../App.css';
import { useSearchParams } from 'react-router-dom';

function SpecificProduct({ comment }) {
  // Productos hardcodeados con ratings de otras personas
  const productos = [
    {
      producto: new Producto('Producto de Ejemplo', 199.99),
      ratingPromedio: 4.2,
      cantidadRatings: 15
    },
    {
      producto: new Producto('Producto Premium', 499.99),
      ratingPromedio: 3.7,
      cantidadRatings: 8
    },
    {
      producto: new Producto('Producto Básico', 99.99),
      ratingPromedio: 4.8,
      cantidadRatings: 22
    }
  ];

  // Obtener el parámetro producto de la URL
  const [searchParams] = useSearchParams();
  const productoIndex = parseInt(searchParams.get('producto'), 10);
  const item = productos[
    !isNaN(productoIndex) && productoIndex >= 0 && productoIndex < productos.length
      ? productoIndex
      : 0
  ];
  const producto = item.producto;

  // Estado para la calificación del producto seleccionado
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingPromedio, setRatingPromedio] = useState(item.ratingPromedio);
  const [cantidadRatings, setCantidadRatings] = useState(item.cantidadRatings);
  const [hasRated, setHasRated] = useState(false);

  const handleRating = (value) => {
    if (hasRated) return;
    setRating(value);
    setHasRated(true);
    // Actualizar el promedio y cantidad
    const nuevaCantidad = cantidadRatings + 1;
    const nuevoPromedio = ((ratingPromedio * cantidadRatings) + value) / nuevaCantidad;
    setCantidadRatings(nuevaCantidad);
    setRatingPromedio(nuevoPromedio);
  };

  const handleHover = (value) => {
    setHover(value);
  };


  return (
    <div className="App star-demo">
      <h1>Califica el producto</h1>
      <div className="producto-card" style={{ margin: '0 auto' }}>
          <img src={item.img} alt={producto.nombre} className="producto-img" />
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio.toFixed(2)}</p>
        <div className="star-rating">
          {[...Array(5)].map((_, estrellaIndex) => {
            const starValue = estrellaIndex + 1;
            const filled = starValue <= (hover || rating);
            return (
              <Star
                key={starValue}
                filled={filled}
                onClick={() => handleRating(starValue)}
                onMouseEnter={() => !hasRated && handleHover(starValue)}
                onMouseLeave={() => !hasRated && handleHover(0)}
                style={hasRated ? { cursor: 'default', opacity: 0.7 } : { cursor: 'pointer' }}
              />
            );
          })}
        </div>
        <div className="calificacion-texto">
          {rating > 0 ? `Tu calificación: ${rating} estrellas` : 'Sin calificación'}
        </div>
        <div className="calificacion-texto">
          {ratingPromedio.toFixed(1)} de 5 ({cantidadRatings} ratings)
        </div>
        {/* Mostrar comentario debajo del rating */}
        {comment && (
          <div className="comentarios" style={{ marginTop: 16 }}>
            <strong>Comentario:</strong>
            <div style={{ paddingLeft: 18, textAlign: 'left' }}>{comment}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpecificProduct;
