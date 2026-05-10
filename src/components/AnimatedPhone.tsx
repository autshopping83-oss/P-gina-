import React from 'react';
import { motion } from 'motion/react';

const AnimatedPhone = () => {
  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto perspective-1000"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Background layers with depth */}
      <div className="absolute inset-0 transform-gpu">
        {/* Layer 4: World Map - Furthest back */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-0 translate-x-8 -translate-y-12 scale-95 opacity-60"
          style={{ transform: 'translateZ(-100px)' }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
            <svg viewBox="0 0 200 100" className="w-full h-16">
              <path d="M20 50 Q50 30 80 50 Q110 70 140 50 Q170 30 180 50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
              <circle cx="50" cy="40" r="3" fill="#00FFFF"/>
              <circle cx="100" cy="50" r="3" fill="#00FFFF"/>
              <circle cx="150" cy="45" r="3" fill="#00FFFF"/>
              <circle cx="80" cy="35" r="2" fill="#1A73E8"/>
              <circle cx="120" cy="55" r="2" fill="#1A73E8"/>
            </svg>
            <div className="text-xs text-white/70 text-center mt-1">Alcance Global</div>
          </div>
        </motion.div>

        {/* Layer 3: Invoice Seal */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute inset-0 -translate-x-6 translate-y-8 scale-90 opacity-70"
          style={{ transform: 'translateZ(-50px)' }}
        >
          <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-xl text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-sm font-bold text-white">Fatura Gerada</div>
            <div className="text-xs text-white/70">Verificada</div>
          </div>
        </motion.div>

        {/* Layer 2: Bar Chart */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute inset-0 translate-x-4 translate-y-4 scale-85 opacity-80"
          style={{ transform: 'translateZ(-25px)' }}
        >
          <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
            <div className="flex items-end gap-2 h-16">
              {[0.4, 0.6, 0.8, 0.5, 0.9, 0.7].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height * 100}%` }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                  className="bg-gradient-to-t from-cyan-400 to-blue-500 rounded-sm flex-1 min-w-[8px]"
                />
              ))}
            </div>
            <div className="text-xs text-white/70 mt-2 text-center">Crescimento Mensal</div>
          </div>
        </motion.div>

        {/* Layer 1: Payment Notification - Closest */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -translate-x-4 -translate-y-4 scale-75 opacity-90"
          style={{ transform: 'translateZ(-10px)' }}
        >
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/80 font-bold uppercase tracking-wider">Pagamento Recebido</div>
                <div className="text-sm font-bold text-white">$500 • €400 • 50.000 MZN</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Phone Frame - Frontmost */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl border border-[#E5E7EB] overflow-hidden"
        style={{ transform: 'translateZ(0px)' }}
      >
        <div className="bg-[#0F172A] p-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-[#9CA3AF] font-mono">biz-flow.cloud</div>
          <div className="w-6"></div>
        </div>
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 h-96 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">Biz-flow</div>
            <div className="text-sm opacity-80">Gestão Inteligente</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedPhone;