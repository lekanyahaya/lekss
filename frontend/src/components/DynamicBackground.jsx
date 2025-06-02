// src/components/DynamicBackground.jsx

import React, { useState, useEffect } from 'react';

const images = [
  '/OIP.jpg',
  '/R(1).jpg',
  '/R.jpg'
];

const DynamicBackground = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(intervalId); // cleanup
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
    minHeight: '100vh',
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default DynamicBackground;
