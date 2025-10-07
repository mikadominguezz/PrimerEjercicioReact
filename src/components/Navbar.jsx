import React, { useEffect, useState } from 'react';

function Navbar() {
  const [text, setText] = useState(()=>{
    return localStorage.getItem('navbarInput') || '';
  })

  useEffect(() => {
    localStorage.setItem('navbarInput', text);
  }, [text]);

  return (
    <nav className="navbar" style={{ marginBottom: 32 }}>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={text}
        onChange={e => { setText(e.target.value); }}
        style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem', width: 220 }}
      />
    </nav>
  );
}

export default Navbar;
