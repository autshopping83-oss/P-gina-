// src/components/AnimatedPhone.tsx
import { useEffect, useState } from 'react';
import { FileText, TrendingUp, Receipt, BarChart3 } from 'lucide-react';

interface Slide {
  icon: typeof FileText;
  title: string;
  desc: string;
  color: string;
}

const slides: Slide[] = [
  { icon: FileText, title: 'Facturas Profissionais', desc: 'Emita documentos com o seu logótipo, NUIT e assinatura digital.', color: '#3b82f6' },
  { icon: Receipt, title: 'Recibos e Orçamentos', desc: 'Crie recibos, facturas-recibo e orçamentos em segundos.', color: '#10b981' },
  { icon: BarChart3, title: 'Dashboard Financeiro', desc: 'Acompanhe receitas, despesas e fluxo de caixa em tempo real.', color: '#f59e0b' },
  { icon: TrendingUp, title: 'Relatórios Inteligentes', desc: 'Gráficos e análises para decisões estratégicas.', color: '#8b5cf6' },
];

const AnimatedPhone = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(p => (p + 1) % slides.length);
      setProgress(0);
    }, 5000);
    const progressInterval = setInterval(() => {
      setProgress(p => Math.min(p + 1, 100));
    }, 50);
    return () => { clearInterval(interval); clearInterval(progressInterval); };
  }, []);

  const slide = slides[current]!;

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-700">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-8 pb-2 text-[10px] font-medium text-slate-400">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full border border-slate-300" />
              <div className="w-3 h-3 rounded-full border border-slate-300" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-slate-100">
            <img src="/logo.svg" alt="" className="w-5 h-5" />
            <span className="text-xs font-bold text-slate-800">Biz-flow</span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500"
              style={{ backgroundColor: `${slide.color}15` }}>
              <slide.icon className="w-8 h-8 transition-all duration-500" style={{ color: slide.color }} />
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-2 transition-all duration-500">{slide.title}</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed transition-all duration-500">{slide.desc}</p>
          </div>

          {/* Progress bar */}
          <div className="flex justify-center gap-1.5 px-6 pb-8">
            {slides.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8' : 'w-1.5'}`}
                style={{ backgroundColor: i === current ? slide.color : '#e2e8f0' }} />
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-[3.5rem] blur-2xl -z-10" />
    </div>
  );
};

export default AnimatedPhone;
