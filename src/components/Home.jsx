
import Producto from '../Producto';
import Star from './Star';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

// Productos hardcodeados con ratings de otras personas
const productos = [
  {
    producto: new Producto('Producto de Ejemplo', 199.99),
    ratingPromedio: 4.2,
    cantidadRatings: 15,
    img: 'https://compucellservice.com/wp-content/uploads/2024/12/Celular-Apple-iPhone-14-png1.png'
  },
  {
    producto: new Producto('Producto Premium', 499.99),
    ratingPromedio: 3.7,
    cantidadRatings: 8,
    img: 'https://tcomponentes.com.uy/wp-content/uploads/2025/05/INTEL-CORE-I7-14700K-TCOMPONENTES.png'
  },
  {
    producto: new Producto('Producto Básico', 99.99),
    ratingPromedio: 4.8,
    cantidadRatings: 22,
    img: 'https://resource.logitech.com/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-xbox-01.png'
  }
];

function Home() {
  return (
    <div className="App">
      <h1>Productos y sus calificaciones</h1>
      <div className="productos-lista">
        {productos.map((item, idx) => (
          <div key={item.producto.nombre} className="producto-card">
            <img src={item.img} alt={item.producto.nombre} className="producto-img" />
            <h2>{item.producto.nombre}</h2>
            <p>Precio: ${item.producto.precio.toFixed(2)}</p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i}
                  filled={i < Math.round(item.ratingPromedio)}
                />
              ))}
            </div>
            <div className="calificacion-texto">
              {item.ratingPromedio} de 5 ({item.cantidadRatings} ratings)
            </div>
            <Link className="main-link" to={`/calificacion?producto=${idx}`}>Ir a este producto</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
