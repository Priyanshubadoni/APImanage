import React, { useState, useEffect } from 'react';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';

function MyComponent() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ position: 'relative' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            position: 'absolute', // Changed position to 'absolute'
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
          }}
        />
      ))}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'black' : 'gray',
              margin: '140px 50px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;