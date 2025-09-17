import React from 'react';

function Star({ filled, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <span
      className="star"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {filled ? '★' : '☆'}
    </span>
  );
}

export default Star;
