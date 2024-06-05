import React, { useEffect, useState } from 'react';
import '../styles/css/cursor.css'; // Ensure you import the CSS
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300); // Ensure timing matches CSS
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleClick);
    window.addEventListener('mouseup', handleClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('mouseup', handleClick);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${clicked ? 'expand' && 'shrink': ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
