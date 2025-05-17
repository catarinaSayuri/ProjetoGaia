import React from 'react';
import './button.css';

export const ArrowButton = ({ direction = 'left', onClick }) => {
  return (
    <button
      className={`arrow ${direction}`}
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? '←' : '→'}
    </button>
  );
};
