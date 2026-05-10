import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AnimatedPhone: React.FC = () => {
  const [currentLayer, setCurrentLayer] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLayer((prev) => (prev + 1) % 4);
    }, 3000); // 3 seconds per layer

    return () => clearInterval(interval);
  }, []);

  const layers: React.ReactElement[] = [
    // Layer 1: Payment Notification
    <motion.div
      key="payment"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-4 bg-gradient-to-r from-green-500/90 to-emerald-600/90 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <div className="text-xs text-white/80 font-medium uppercase tracking-wider">Pagamento Recebido</div>
          <div className="text-lg font-bold text-white">$500 • €400 • 50.000 MZN</div>
        </div>
      </div>
    </motion.div>,

    // Layer 2: Bar Chart
    <motion.div
      key="chart"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl"
    >
      <div className="text-center mb-3">
        <div className="text-sm font-bold text-white">Crescimento Mensal</div>
      </div>
      <div className="flex items-end justify-center gap-3 h-20">
        {[0.4, 0.6, 0.8, 0.5, 0.9, 0.7].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height * 100}%` }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="bg-gradient-to-t from-cyan-400 to-blue-500 rounded-sm w-6 shadow-lg"
          />
        ))}
      </div>
      <div className="text-xs text-white/70 text-center mt-2">+45.2%</div>
    </motion.div>,

    // Layer 3: Invoice Seal
    <motion.div
      key="invoice"
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: 10 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-4 flex items-center justify-center"
    >
      <div className="bg-gradient-to-br from-blue-500/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>
        <div className="text-xl font-bold text-white mb-1">Fatura Gerada</div>
        <div className="text-sm text-white/80">Verificada com sucesso</div>
      </div>
    </motion.div>,

    // Layer 4: World Map
    <motion.div
      key="map"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-4 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl"
    >
      <div className="text-center mb-3">
        <div className="text-sm font-bold text-white">Alcance Global</div>
      </div>
      <div className="relative">
        <svg viewBox="0 0 200 100" className="w-full h-20">
          <defs>
            <linearGradient id="ocean" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#1e40af', stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:0.3}} />
            </linearGradient>
          </defs>
          <rect width="200" height="100" fill="url(#ocean)" rx="8"/>
          <path d="M20 50 Q50 30 80 50 Q110 70 140 50 Q170 30 180 50" stroke="#06b6d4" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="40" r="3" fill="#00FFFF">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="50" r="3" fill="#00FFFF">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="150" cy="45" r="3" fill="#00FFFF">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s"/>
          </circle>
          <circle cx="80" cy="35" r="2" fill="#1A73E8"/>
          <circle cx="120" cy="55" r="2" fill="#1A73E8"/>
        </svg>
        <div className="absolute top-2 left-2 text-xs text-cyan-300 font-medium">Biz-flow Global</div>
      </div>
    </motion.div>
  ];

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Phone Frame */}
      <div className="relative bg-black rounded-[2.5rem] shadow-2xl border border-gray-800 overflow-hidden">
        {/* Phone Notch */}
        <div className="bg-black p-4 flex items-center justify-between rounded-t-[2.5rem]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono">biz-flow.cloud</div>
          <div className="w-6"></div>
        </div>

        {/* Screen */}
        <div className="relative bg-black h-96 overflow-hidden">
          {/* Base Screen Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-white mb-1">Biz-flow</div>
                <div className="text-sm text-cyan-300">Gestão Inteligente</div>
              </div>
            </div>
          </div>

          {/* Animated Layers */}
          <AnimatePresence mode="wait">
            {layers[currentLayer]}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedPhone;