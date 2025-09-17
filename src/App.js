import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StarRatingDemo from './components/StarRatingDemo.jsx';

function Home() {
  return (
    <div className="App">
      <h1>Bienvenido a la demo</h1>
      <Link to="/calificacion">Ir a calificación de productos</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: '16px' }}>
        <Link to="/" style={{ marginRight: '16px' }}>Inicio</Link>
        <Link to="/calificacion">Calificación</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calificacion" element={<StarRatingDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
