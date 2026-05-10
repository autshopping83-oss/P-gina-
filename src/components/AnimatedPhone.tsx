import React from 'react';
import { motion } from 'motion/react';

const AnimatedPhone: React.FC = () => {
  const layers = [
    {
      id: 'payment',
      title: 'Pagamento Recebido',
      value: '$500 • €400 • 50.000 MZN',
      icon: '💳',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'chart',
      title: 'Crescimento Mensal',
      value: '+45.2%',
      icon: '📊',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'invoice',
      title: 'Fatura Gerada',
      value: 'Verificada',
      icon: '✓',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'map',
      title: 'Alcance Global',
      value: '150+ Países',
      icon: '🌍',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="relative w-full h-96 bg-white rounded-3xl overflow-hidden shadow-2xl" style={{ perspective: '1200px' }}>
      {/* 3D Container */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        {/* Animated 3D Cards Loop */}
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute w-72 h-48"
            style={{
              transformStyle: 'preserve-3d',
            } as React.CSSProperties}
            custom={index}
          >
            <motion.div
              animate={{
                transform: [
                  'translateZ(-500px) rotateY(45deg)',
                  'translateZ(-200px) rotateY(0deg)',
                  'translateZ(100px) rotateY(0deg)',
                  'translateZ(400px) rotateY(-45deg)'
                ],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 12,
                delay: index * 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className={`w-full h-full bg-gradient-to-br ${layer.color} rounded-2xl shadow-2xl p-8 border border-white/30 backdrop-blur-sm flex flex-col justify-center items-center text-white`}
              style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
            >
              <div className="text-6xl mb-4">{layer.icon}</div>
              <div className="text-2xl font-bold text-center mb-3">{layer.title}</div>
              <div className="text-lg font-semibold text-white/90 text-center">{layer.value}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lighting Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-radial from-white/20 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AnimatedPhone;