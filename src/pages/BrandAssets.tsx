import React from 'react';
import { ArrowLeft, Download, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandAssets = () => {
  const shortDescription = "Gestão empresarial simples: faturas, orçamentos e fluxo de caixa com IA.";
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Voltar para o Início
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-slate-900">Recursos para Play Store</h1>
        <p className="text-lg text-slate-600 mb-12">Aqui estão os textos e o conceito visual para a sua publicação na loja de aplicativos.</p>

        <div className="space-y-12">
          {/* Short Description Section */}
          <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-display">Descrição Curta (80 caracteres)</h2>
              <button 
                onClick={() => copyToClipboard(shortDescription)}
                className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-xl transition-all"
              >
                <Copy className="w-4 h-4" />
                Copiar
              </button>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-medium text-slate-800">
              {shortDescription}
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Dica: Esta é a primeira frase que os utilizadores vêem na Play Store. Deve ser direta e atrativa.
            </p>
          </section>

          {/* Logo Concept Section */}
          <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold font-display mb-6">Ícone do Aplicativo (Logo)</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                {/* The Logo Rendered at 512x512 scale (visually smaller) */}
                <div className="w-64 h-64 bg-emerald-500 rounded-[22%] flex items-center justify-center shadow-2xl shadow-emerald-200 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="w-32 h-32 text-white drop-shadow-lg"
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Especificações do Ícone:</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    Tamanho: 512 x 512 px
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    Formato: PNG (32 bits)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    Cor Principal: #10b981 (Emerald 500)
                  </li>
                </ul>
                <p className="text-sm text-slate-500 italic">
                  "O ícone utiliza o símbolo do raio (Zap) para representar velocidade e eficiência, com cantos arredondados modernos (estilo iOS/Android)."
                </p>
              </div>
            </div>
          </section>

          {/* Full Description Suggestion */}
          <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold font-display mb-6">Descrição Completa</h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-700 text-sm leading-relaxed space-y-4">
              <p className="font-bold text-slate-900">Transforme o seu negócio com o Biz-flow!</p>
              <p>O Biz-flow é a plataforma definitiva para freelancers e microempreendedores que desejam profissionalizar a sua gestão sem complicações. Esqueça os blocos de papel e as planilhas difíceis.</p>
              <p><span className="font-bold">Funcionalidades Principais:</span></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Emissão de Faturas, Recibos e Orçamentos em segundos.</li>
                <li>Controlo de Fluxo de Caixa (Receitas e Despesas).</li>
                <li>Inteligência Artificial (Gemini) para descrições profissionais.</li>
                <li>Gestão de Clientes e Catálogo de Produtos.</li>
                <li>Impressão Bluetooth para talões térmicos.</li>
                <li>Modo Offline e Sincronização na Nuvem.</li>
              </ul>
              <p>Ideal para prestadores de serviços, pequenos lojistas e profissionais liberais. Comece hoje mesmo a gerir o seu negócio de forma inteligente!</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrandAssets;
