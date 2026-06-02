import React, { useEffect, useState } from 'react';

const AnimatedPhone: React.FC = () => {
  const images = ['/dist/delivery.svg', '/dist/office.svg', '/dist/flow.svg'];
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="phone-container relative w-full max-w-md mx-auto h-96 bg-white rounded-3xl overflow-hidden shadow-2xl">
      <img
        src={images[current]}
        alt={`Biz-flow ${current}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.6s ease' }}
      />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedPhone;