"use client"
import { useState, useEffect } from 'react';

const ScreenSize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    
    window.addEventListener('resize', updateScreenSize);

    
    updateScreenSize();

    
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
    
  }, []);


  return (
    <div>
      <p>Largeur de l écran: {screenSize.width}px</p>
      <p>Hauteur de l écran: {screenSize.height}px</p>
    </div>
  );
};

export default ScreenSize;
