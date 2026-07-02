import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
  MessageSquare,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Seo from './components/Seo';
import AnimatedPhone from './components/AnimatedPhone';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import DeleteAccount from './pages/DeleteAccount';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';

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
          <img 
            src="/logo.svg" 
            alt="Biz-flow Logo" 
            className="w-10 h-10 rounded-xl shadow-lg"
          />
          <span className="text-xl font-bold font-display tracking-tight">Biz-flow</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/funcionalidades" className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors">Funcionalidades</Link>
          <Link to="/precos" className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors">Preços</Link>
          <Link to="/blog" className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors">Blog</Link>
          <Link to="/contato" className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors">Contato</Link>
          <Link to="/sobre" className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors">Sobre</Link>
          <a 
            href="https://biz-flow.cloud" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Abrir Software
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] rounded-lg p-2"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            role="menu"
            aria-labelledby="mobile-menu-button"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-[var(--color-border)] p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <Link to="/funcionalidades" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[var(--color-muted)]">Funcionalidades</Link>
            <Link to="/precos" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[var(--color-muted)]">Preços</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[var(--color-muted)]">Blog</Link>
            <Link to="/contato" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[var(--color-muted)]">Contato</Link>
            <Link to="/sobre" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[var(--color-muted)]">Sobre</Link>
            <a 
              href="https://biz-flow.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-xl text-lg font-semibold text-center transition-all"
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
    className="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:bg-white hover:shadow-2xl hover:shadow-[var(--color-primary)/15] transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
      <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
    <p className="text-[var(--color-muted)] leading-relaxed">{description}</p>
  </motion.div>
);

const ModuleSection = ({ title, subtitle, features, image, reverse = false }: { title: string, subtitle: string, features: string[], image: string, reverse?: boolean }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-20`}>
    <div className="flex-1 space-y-6">
      <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)/10] text-[var(--color-primary-dark)] text-sm font-bold tracking-wide uppercase">
        Módulo Especializado
      </div>
      <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">{title}</h2>
      <p className="text-lg text-[var(--color-muted)]">{subtitle}</p>
      <ul className="space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-[var(--color-text)] font-medium">
            <CheckCircle2 className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 relative">
      <div className="absolute -inset-4 bg-[var(--color-primary)/10] rounded-[40px] blur-2xl transform rotate-3"></div>
      <img 
        src={image} 
        alt={title} 
        className="relative rounded-3xl shadow-2xl border border-[var(--color-border)] w-full object-cover aspect-video"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[var(--color-surface-alt)] selection:bg-[var(--color-primary)/20] selection:text-[var(--color-primary)]">
      <Seo
        title="Biz-flow | Gestão Financeira e Emissão de Facturas"
        description="Plataforma de gestão financeira para simplificar faturação, fluxo de caixa e decisões estratégicas para negócios em Moçambique."
        canonicalPath="/"
        breadcrumb={[]}
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-white to-cyan-50/30">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/30 to-cyan-50/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] text-[var(--color-text)] text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              Gestão inteligente para o seu negócio
            </div>
            <h1 className="text-6xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight">
              Gestão financeira e facturação em poucos minutos para o seu negócio.
            </h1>
            <p className="text-xl text-[var(--color-muted)] leading-relaxed max-w-xl">
              Emita faturas profissionais, controle o fluxo de caixa e envie documentos pelo WhatsApp sem depender de papel ou sistemas complexos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://biz-flow.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-[var(--color-primary)/20] flex items-center justify-center gap-2 group"
              >
                Começar grátis sem cartão
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/258840636794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[var(--color-surface-alt)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                Falar com a equipe
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                    alt="Empreendedor usando Biz-flow"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--Color-muted)] font-medium">
                <span className="text-[var(--color-text)] font-bold">+2.000</span> empreendedores já migraram
              </p>
            </div>
          </motion.div>

          <AnimatedPhone />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[var(--color-surface-alt)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Tudo o que você precisa para gerir seu negócio</h2>
            <p className="text-lg text-[var(--color-muted)]">Uma plataforma integrada que cobre desde a emissão de documentos até a análise financeira avançada.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={FileText}
              title="Documentos Profissionais"
              description="Emita faturas, recibos e orçamentos em segundos. Personalize com seu logo e envie pelo WhatsApp."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Fluxo de Caixa"
              description="Controle entradas e saídas com categorias claras e veja sua saúde financeira em tempo real."
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
      <section id="how-it-works" className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Comece em 3 passos simples</h2>
            <p className="text-lg text-[var(--color-muted)]">Migrar para o digital nunca foi tão fácil. Veja como o Biz-flow funciona na prática.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Crie sua Conta", desc: "Registe-se em segundos e configure os dados da sua empresa e logótipo." },
              { step: "02", title: "Registe Produtos", desc: "Adicione seus itens ou serviços ao catálogo para agilizar a faturação." },
              { step: "03", title: "Emita e Envie", desc: "Gere faturas profissionais e envie diretamente para o WhatsApp do cliente." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-[var(--color-surface-alt)] rounded-3xl shadow-sm border border-[var(--color-border)]">
                <div className="text-5xl font-black text-[var(--color-primary)/10] absolute top-6 right-8 font-display">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="ai-demo" className="py-24 bg-[var(--color-surface-alt)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[var(--color-inverse)] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)/20] blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold font-display">Teste agora sem compromisso</h2>
                <p className="text-[var(--color-inverse-muted)] text-lg max-w-2xl mx-auto">
                  Aceda ao modo convidado e experimente a criação de faturas, recibos e orçamentos em segundos. Se gostar, pode criar a sua conta diretamente no software.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <a 
                  href="https://biz-flow.cloud/?guest=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-[var(--color-primary)/20] flex items-center justify-center gap-3 group"
                >
                  <LayoutDashboard className="w-6 h-6" />
                  Entrar como Convidado
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modules */}
      <section id="modules" className="py-24 bg-[var(--color-surface)] overflow-hidden">
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
      <section className="py-24 bg-[var(--color-inverse)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-primary)/10] blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)/20] text-[var(--color-primary-dark)] text-sm font-bold border border-[var(--color-primary)/30]">
                <Cpu className="w-4 h-4" />
                Assistente inteligente para orçamentos e descrições
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                Assistente inteligente para a sua faturação e comunicação.
              </h2>
              <p className="text-xl text-[var(--color-inverse-muted)] leading-relaxed">
                Crie descrições claras e profissionais para serviços e documentos sem perder tempo. O sistema sugere textos prontos para usar em orçamentos e facturas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)/20] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-[var(--color-primary-dark)] w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Otimização de Texto</div>
                    <div className="text-[var(--color-inverse-muted)] text-sm">Transforme rascunhos em propostas comerciais irresistíveis.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)/20] flex items-center justify-center flex-shrink-0">
                    <LayoutDashboard className="text-[var(--color-primary-dark)] w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Insights de Negócio</div>
                    <div className="text-[var(--color-inverse-muted)] text-sm">Análise inteligente dos seus dados para sugerir melhorias.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-1 rounded-[2.5rem] shadow-2xl shadow-[var(--color-primary)/20]">
                <div className="bg-[var(--color-inverse)] rounded-[2.3rem] p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                      <Cpu className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">BizFlow AI Assistant</div>
                      <div className="text-xs text-[var(--color-primary-dark)]">Online e pronto para ajudar</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                      Como posso ajudar com sua fatura hoje?
                    </div>
                    <div className="bg-[var(--color-primary)] p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-white">
                      Melhore a descrição do serviço "Consultoria de Marketing".
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm space-y-2">
                      <p className="font-bold text-[var(--color-primary-dark)]">Sugestão Profissional:</p>
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
          <div className="bg-[var(--color-primary)/10] rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-display">Muito mais que um gestor. Uma comunidade.</h2>
              <p className="text-lg text-[var(--color-muted)]">
                Acesse o Feed da Comunidade para interagir com outros empreendedores e trocar experiências sobre gestão de negócios.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-surface-alt)] rounded-full shadow-sm text-sm font-bold text-[var(--color-text)] hover:text-[var(--color-primary-dark)] transition-colors"
                >
                    <Users className="w-4 h-4 text-[var(--color-primary)]" />
                    Entrar na Comunidade
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/biz1/400/500" className="rounded-3xl shadow-lg transform -rotate-2" alt="Empreendedores a gerir pedidos no Biz-flow" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/biz2/400/500" className="rounded-3xl shadow-lg transform rotate-2 translate-y-8" alt="Equipe a preparar uma fatura para envio" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tight">Pronto para levar seu negócio ao <span className="text-[var(--color-primary)]">próximo nível?</span></h2>
          <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que já simplificaram sua gestão com o Biz-flow.cloud.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://biz-flow.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-[var(--color-primary)/20]"
            >
              Começar Agora Gratuitamente
            </a>
            <a 
              href="https://wa.me/258840636794" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[var(--color-inverse)] hover:bg-[var(--color-inverse-dark)] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
          <p className="text-[var(--color-inverse-muted)] text-sm font-medium">Não é necessário cartão de crédito para começar.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-surface)] pt-20 pb-10 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <Zap className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight">Biz-flow</span>
              </div>
              <p className="text-[var(--color-muted)] max-w-sm">
                A plataforma definitiva de gestão para quem quer crescer de forma organizada e profissional.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/258840636794" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5 text-[var(--color-muted)]" />
                </a>
                <a 
                  href="tel:+258840636797" 
                  className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
                  title="Telefone de Apoio"
                >
                  <Smartphone className="w-5 h-5 text-[var(--color-muted)]" />
                </a>
                <a 
                  href="https://biz-flow.cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
                  title="Website"
                >
                  <Globe className="w-5 h-5 text-[var(--color-muted)]" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Produto</h4>
              <ul className="space-y-4 text-[var(--color-muted)] text-sm">
                <li><Link to="/funcionalidades" className="hover:text-[var(--color-primary-dark)] transition-colors">Funcionalidades</Link></li>
                <li><Link to="/precos" className="hover:text-[var(--color-primary-dark)] transition-colors">Preços</Link></li>
                <li><Link to="/blog" className="hover:text-[var(--color-primary-dark)] transition-colors">Blog</Link></li>
                <li><Link to="/sobre" className="hover:text-[var(--color-primary-dark)] transition-colors">Sobre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Suporte</h4>
              <ul className="space-y-4 text-[var(--color-muted)] text-sm">
                <li>Apoio: <a href="tel:+258840636797" className="hover:text-[var(--color-primary-dark)] transition-colors">+258 840 636 797</a></li>
                <li>WhatsApp: <a href="https://wa.me/258840636794" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-dark)] transition-colors">+258 840 636 794</a></li>
                <li><a href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-dark)] transition-colors">Grupo da Comunidade</a></li>
                <li><Link to="/privacy" className="hover:text-[var(--color-primary-dark)] transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-[var(--color-primary-dark)] transition-colors">Termos de Uso</Link></li>
                <li><Link to="/delete-account" className="hover:text-red-600 transition-colors font-medium">Eliminar Conta</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--color-inverse-muted)] text-xs font-medium">
            <p>© {new Date().getFullYear()} Biz-flow. Todos os direitos reservados.</p>
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
      </main>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/funcionalidades" element={<Features />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
