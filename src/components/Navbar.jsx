import React from 'react';

function Navbar({ inputValue, setInputValue, handleInputKeyDown }) {
  return (
    <nav className="navbar" style={{ marginBottom: 32 }}>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
        style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem', width: 220 }}
      />
    </nav>
  );
}

export default Navbar;
