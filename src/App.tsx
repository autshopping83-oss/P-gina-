import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Cpu, 
  Printer, 
  Globe, 
  ShieldCheck, 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Zap,
  Smartphone,
  Cloud,
  Signature,
  Download,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const AIDemoComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateDescription = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Crie uma descrição comercial curta, profissional e atraente para o seguinte produto ou serviço: ${input}. A descrição deve ser em português e ter no máximo 3 frases.`,
      });
      setResult(response.text || 'Não foi possível gerar a descrição.');
    } catch (error) {
      console.error(error);
      setResult('Erro ao conectar com a IA. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Consultoria de RH, Bolo de Chocolate, Design de Logo..."
          className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
        />
        <button 
          onClick={generateDescription}
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              Gerar com IA
              <Zap className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      
      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2"
          >
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Sugestão da IA</div>
            <p className="text-slate-200 leading-relaxed italic">"{result}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight">Biz-flow<span className="text-emerald-500">.cloud</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Funcionalidades</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Como funciona</a>
          <a href="#ai-demo" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Demo IA</a>
          <a 
            href="https://biz-flow.cloud" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Abrir Software
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Funcionalidades</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Como funciona</a>
            <a href="#ai-demo" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Demo IA</a>
            <a 
              href="https://biz-flow.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-lg font-semibold text-center"
            >
              Abrir Software
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
      <Icon className="w-7 h-7 text-emerald-500 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ModuleSection = ({ title, subtitle, features, image, reverse = false }: { title: string, subtitle: string, features: string[], image: string, reverse?: boolean }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-20`}>
    <div className="flex-1 space-y-6">
      <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold tracking-wide uppercase">
        Módulo Especializado
      </div>
      <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">{title}</h2>
      <p className="text-lg text-slate-600">{subtitle}</p>
      <ul className="space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
            <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 relative">
      <div className="absolute -inset-4 bg-emerald-500/10 rounded-[40px] blur-2xl transform rotate-3"></div>
      <img 
        src={image} 
        alt={title} 
        className="relative rounded-3xl shadow-2xl border border-slate-200 w-full object-cover aspect-video"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Gestão Inteligente para o seu Negócio
            </div>
            <h1 className="text-6xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight">
              Transforme seu celular num <span className="gradient-text">escritório digital.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Simplifique a administração da sua empresa. Elimine blocos de papel e planilhas complexas com a plataforma completa para freelancers e microempreendedores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://biz-flow.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-2 group"
              >
                Começar Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/258840636794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border-2 border-slate-200 hover:border-emerald-500 px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold">+2.000</span> empreendedores já migraram
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
              <div className="bg-slate-900 p-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">biz-flow.cloud/dashboard</div>
                <div className="w-6"></div>
              </div>
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                alt="Dashboard Preview" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-emerald-600 w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Receita Mensal</div>
                <div className="text-lg font-bold text-slate-900">+45.200 MZN</div>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Nova Fatura</div>
                <div className="text-sm font-bold text-slate-900">Emitida com sucesso</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Tudo o que você precisa para gerir seu negócio</h2>
            <p className="text-lg text-slate-600">Uma plataforma integrada que cobre desde a emissão de documentos até a análise financeira avançada.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={FileText}
              title="Documentos Profissionais"
              description="Emita faturas, recibos e orçamentos em segundos. Personalize com seu logo e envie via WhatsApp."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Fluxo de Caixa"
              description="Controle entradas e saídas. Categorize despesas e visualize a saúde financeira em tempo real."
            />
            <FeatureCard 
              icon={Cpu}
              title="Inteligência Artificial"
              description="Integração com Gemini para melhorar descrições de produtos e otimizar sua comunicação comercial."
            />
            <FeatureCard 
              icon={Smartphone}
              title="App PWA & Offline"
              description="Instale no celular e use mesmo sem internet. Sincronização automática assim que conectar."
            />
            <FeatureCard 
              icon={Printer}
              title="Impressão Bluetooth"
              description="Conecte impressoras térmicas portáteis e imprima talões de venda na hora para seus clientes."
            />
            <FeatureCard 
              icon={Globe}
              title="Multi-Moeda"
              description="Suporte para MZN, AOA, BRL, USD e EUR. Disponível em 5 idiomas para alcance global."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Comece em 3 passos simples</h2>
            <p className="text-lg text-slate-600">Migrar para o digital nunca foi tão fácil. Veja como o Biz-flow funciona na prática.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Crie sua Conta", desc: "Registe-se em segundos e configure os dados da sua empresa e logótipo." },
              { step: "02", title: "Registe Produtos", desc: "Adicione seus itens ou serviços ao catálogo para agilizar a faturação." },
              { step: "03", title: "Emita e Envie", desc: "Gere faturas profissionais e envie diretamente para o WhatsApp do cliente." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="text-5xl font-black text-emerald-500/10 absolute top-6 right-8 font-display">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="ai-demo" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold font-display">Experimente nossa IA agora</h2>
                <p className="text-slate-400">Digite um produto ou serviço e veja como a IA do Biz-flow cria uma descrição profissional.</p>
              </div>

              <AIDemoComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modules */}
      <section id="modules" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ModuleSection 
            title="Gestão de Documentos em Segundos"
            subtitle="O coração do Biz-flow é a agilidade. Crie documentos comerciais profissionais sem complicação."
            features={[
              "Emissão de Faturas, Recibos e Orçamentos",
              "Personalização completa com Logo e NUIT",
              "Assinatura Digital diretamente na tela",
              "Exportação instantânea para PDF A4",
              "Conversão de Orçamento em Fatura com 1 clique"
            ]}
            image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
          />

          <ModuleSection 
            title="Controle Financeiro Total"
            subtitle="Saiba exatamente para onde seu dinheiro está indo com nosso módulo de fluxo de caixa."
            features={[
              "Registo detalhado de Receitas e Despesas",
              "Categorização inteligente de gastos",
              "Dashboard com estatísticas mensais",
              "Histórico completo de transações",
              "Alertas de pagamentos pendentes"
            ]}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
            reverse
          />
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold border border-emerald-500/30">
                <Cpu className="w-4 h-4" />
                Powered by Gemini AI
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                Inteligência Artificial que <span className="text-emerald-400">trabalha por você.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Não perca tempo escrevendo descrições chatas. Nossa IA integrada ajuda você a criar textos profissionais para seus produtos e serviços, aumentando suas chances de venda.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Otimização de Texto</div>
                    <div className="text-slate-400 text-sm">Transforme rascunhos em propostas comerciais irresistíveis.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <LayoutDashboard className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Insights de Negócio</div>
                    <div className="text-slate-400 text-sm">Análise inteligente dos seus dados para sugerir melhorias.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-1 rounded-[2.5rem] shadow-2xl shadow-emerald-500/20">
                <div className="bg-slate-900 rounded-[2.3rem] p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Cpu className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">BizFlow AI Assistant</div>
                      <div className="text-xs text-emerald-400">Online e pronto para ajudar</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                      Como posso ajudar com sua fatura hoje?
                    </div>
                    <div className="bg-emerald-500 p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-white">
                      Melhore a descrição do serviço "Consultoria de Marketing".
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm space-y-2">
                      <p className="font-bold text-emerald-400">Sugestão Profissional:</p>
                      <p>"Estratégia abrangente de posicionamento digital focada em conversão e crescimento escalável de marca..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Expansion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-50 rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-display">Muito mais que um gestor. Uma comunidade.</h2>
              <p className="text-lg text-slate-600">
                Acesse o Feed da Comunidade para interagir com outros empreendedores e use o BizFlow Pages para vender seus produtos digitais e gerir pagamentos de forma simples.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors"
                >
                  <Users className="w-4 h-4 text-emerald-500" />
                  Entrar na Comunidade
                </a>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-slate-700">
                  <Download className="w-4 h-4 text-emerald-500" />
                  E-books & Vendas
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Segurança Supabase
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/biz1/400/500" className="rounded-3xl shadow-lg transform -rotate-2" alt="Community" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/biz2/400/500" className="rounded-3xl shadow-lg transform rotate-2 translate-y-8" alt="Sales" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tight">Pronto para levar seu negócio ao <span className="text-emerald-500">próximo nível?</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que já simplificaram sua gestão com o Biz-flow.cloud.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://biz-flow.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-emerald-200"
            >
              Começar Agora Gratuitamente
            </a>
            <a 
              href="https://wa.me/258840636794" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
          <p className="text-slate-400 text-sm font-medium">Não é necessário cartão de crédito para começar.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Zap className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight">Biz-flow<span className="text-emerald-500">.cloud</span></span>
              </div>
              <p className="text-slate-500 max-w-sm">
                A plataforma definitiva de gestão para quem quer crescer de forma organizada e profissional.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/258840636794" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-emerald-50 transition-colors cursor-pointer"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5 text-slate-600" />
                </a>
                <a 
                  href="tel:+258840636797" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-emerald-50 transition-colors cursor-pointer"
                  title="Telefone de Apoio"
                >
                  <Smartphone className="w-5 h-5 text-slate-600" />
                </a>
                <a 
                  href="https://biz-flow.cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-emerald-50 transition-colors cursor-pointer"
                  title="Website"
                >
                  <Globe className="w-5 h-5 text-slate-600" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Produto</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">BizFlow Pages</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Comunidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Suporte</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>Apoio: <a href="tel:+258840636797" className="hover:text-emerald-600 transition-colors">+258 840 636 797</a></li>
                <li>WhatsApp: <a href="https://wa.me/258840636794" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">+258 840 636 794</a></li>
                <li><a href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Grupo da Comunidade</a></li>
                <li><Link to="/privacy" className="hover:text-emerald-600 transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-emerald-600 transition-colors">Termos de Uso</Link></li>
                <li className="pt-2">
                  <button 
                    onClick={() => {
                      const url = `${window.location.origin}/#/privacy`;
                      navigator.clipboard.writeText(url);
                      alert('Link da Política copiado para a Play Store!');
                    }}
                    className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded hover:bg-emerald-200 transition-colors font-bold uppercase"
                  >
                    Copiar Link para Play Store
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
            <p>© 2026 Biz-flow.cloud. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <span>Feito com ❤️ para empreendedores</span>
              <div className="flex items-center gap-1">
                <Cloud className="w-3 h-3" />
                Sincronizado na Nuvem
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </HashRouter>
  );
}
