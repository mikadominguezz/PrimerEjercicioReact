import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import SpecificProduct from './components/SpecificProduct.jsx';
import Home from './components/Home.jsx';


function AppContent({ comment, setComment }) {
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
        <Route path="/" element={<Home comment={comment} setComment={setComment} />} />
        <Route path="/calificacion" element={<SpecificProduct comment={comment} />} />
      </Routes>
    </>
  );
}

function App() {
  const [comment, setComment] = useState("");
  return (
    <BrowserRouter>
      <AppContent comment={comment} setComment={setComment} />
    </BrowserRouter>
  );
}

export default App;