import React, { useEffect, useState } from 'react';

const AnimatedPhone: React.FC = () => {
  const images = ['/dist/delivery.png', '/dist/office.png', '/dist/flow.png'];
  const [current, setCurrent] = useState<number>(0);
  const [imgError, setImgError] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    console.debug('AnimatedPhone current image:', images[current]);
  }, [current]);

  return (
    <div className="phone-container relative w-full max-w-md mx-auto h-96 bg-white rounded-3xl overflow-hidden shadow-2xl">
      <img
        src={images[current]}
        alt={`Biz-flow ${current}`}
        onError={() => setImgError(true)}
        onLoad={() => setImgError(false)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.6s ease', border: '1px solid rgba(0,0,0,0.06)' }}
      />
      {imgError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="text-sm text-red-600">Erro ao carregar imagem — abra <a href={images[current]} target="_blank" rel="noreferrer" className="underline">em nova aba</a></div>
        </div>
      )}
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