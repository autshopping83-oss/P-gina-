import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AnimatedPhone: React.FC = () => {
  const [currentImage, setCurrentImage] = React.useState<number>(0);

  const images = [
    {
      id: 'phone',
      src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop&crop=center',
      alt: 'Celular moderno emitindo fatura Biz-flow',
      title: 'Emissão Instantânea',
      description: 'Emita faturas profissionais no biz-flow.cloud'
    },
    {
      id: 'delivery',
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=600&fit=crop&crop=center',
      alt: 'Entregador usando aplicativo Biz-flow',
      title: 'Mobilidade Total',
      description: 'Acesse biz-flow.cloud de qualquer lugar'
    },
    {
      id: 'office',
      src: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=400&h=600&fit=crop&crop=center',
      alt: 'Escritório com laptop Biz-flow',
      title: 'Gestão Completa',
      description: 'Controle total no biz-flow.cloud'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per image

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md mx-auto h-96 bg-white rounded-3xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-full h-full object-cover"
          />

          {/* Overlay com informações */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{images[currentImage].title}</h3>
              <p className="text-sm opacity-90">{images[currentImage].description}</p>
            </div>
          </div>

          {/* Indicadores */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedPhone;