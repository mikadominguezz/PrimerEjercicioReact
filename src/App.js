import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import SpecificProduct from './components/SpecificProduct.jsx';
import Home from './components/Home.jsx';

function AppContent() {
  const location = useLocation();
  const isSpecificProduct = location.pathname === '/calificacion';
  return (
    <>
      {isSpecificProduct && (
        <nav style={{ margin: '16px' }}>
          <Link to="/" style={{ marginRight: '16px' }}>Inicio</Link>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calificacion" element={<SpecificProduct />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;