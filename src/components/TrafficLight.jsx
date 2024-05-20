import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const lights = ['red', 'yellow', 'green'];
  const [currentLightIndex, setCurrentLightIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLightIndex((prevIndex) => (prevIndex + 1) % lights.length);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="traffic-light">
      {lights.map((color, index) => {
        // Logging the color and index to the console
        // console.log(`Color: ${color}, Index: ${index}`);
        return (
          <div
            key={color}
            className={`light ${currentLightIndex === index ? color : ''}`}
          ></div>
        );
      })}
    </div>
  );
};

export default TrafficLight;
