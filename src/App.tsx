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
          <Link to="/funcionalidades" className="text-sm font-medium text-[#6B7280] hover:text-[#0D47A1] transition-colors">Funcionalidades</Link>
          <Link to="/precos" className="text-sm font-medium text-[#6B7280] hover:text-[#0D47A1] transition-colors">Preços</Link>
          <Link to="/blog" className="text-sm font-medium text-[#6B7280] hover:text-[#0D47A1] transition-colors">Blog</Link>
          <Link to="/contato" className="text-sm font-medium text-[#6B7280] hover:text-[#0D47A1] transition-colors">Contato</Link>
          <Link to="/sobre" className="text-sm font-medium text-[#6B7280] hover:text-[#0D47A1] transition-colors">Sobre</Link>
          <a 
            href="https://biz-flow.cloud" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1A73E8] hover:bg-[#0D47A1] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Abrir Software
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1F2937]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className="absolute top-full left-0 right-0 bg-white border-b border-[#E5E7EB] p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <Link to="/funcionalidades" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#6B7280]">Funcionalidades</Link>
            <Link to="/precos" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#6B7280]">Preços</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#6B7280]">Blog</Link>
            <Link to="/contato" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#6B7280]">Contato</Link>
            <Link to="/sobre" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#6B7280]">Sobre</Link>
            <a 
              href="https://biz-flow.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1A73E8] text-white px-6 py-3 rounded-xl text-lg font-semibold text-center"
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
    className="p-8 rounded-3xl bg-[#F5F7FA] border border-[#E5E7EB] hover:bg-white hover:shadow-2xl hover:shadow-[#BBDEFB] transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#1A73E8] transition-colors">
      <Icon className="w-7 h-7 text-[#1A73E8] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
    <p className="text-[#6B7280] leading-relaxed">{description}</p>
  </motion.div>
);

const ModuleSection = ({ title, subtitle, features, image, reverse = false }: { title: string, subtitle: string, features: string[], image: string, reverse?: boolean }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-20`}>
    <div className="flex-1 space-y-6">
      <div className="inline-block px-4 py-1.5 rounded-full bg-[#E1F5FE] text-[#0D47A1] text-sm font-bold tracking-wide uppercase">
        Módulo Especializado
      </div>
      <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">{title}</h2>
      <p className="text-lg text-[#6B7280]">{subtitle}</p>
      <ul className="space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-[#374151] font-medium">
            <CheckCircle2 className="text-[#1A73E8] w-5 h-5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 relative">
      <div className="absolute -inset-4 bg-[#1A73E8]/10 rounded-[40px] blur-2xl transform rotate-3"></div>
      <img 
        src={image} 
        alt={title} 
        className="relative rounded-3xl shadow-2xl border border-[#E5E7EB] w-full object-cover aspect-video"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#D0F1FF] selection:text-[#0D47A1]">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F7FA] text-[#374151] text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-[#1A73E8] animate-pulse"></span>
              Gestão Inteligente para o seu Negócio
            </div>
            <h1 className="text-6xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight">
              Transforme seu celular num <span className="gradient-text">escritório digital.</span>
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed max-w-xl">
              Simplifique a administração da sua empresa. Elimine blocos de papel e planilhas complexas com a plataforma completa para freelancers e microempreendedores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://biz-flow.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A73E8] hover:bg-[#0D47A1] text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-[#BBDEFB]/50 flex items-center justify-center gap-2 group"
              >
                Começar Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/258840636794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#E5E7EB] hover:border-[#1A73E8] px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2"
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
              <p className="text-sm text-[#6B7280] font-medium">
                <span className="text-[#1F2937] font-bold">+2.000</span> empreendedores já migraram
              </p>
            </div>
          </motion.div>

          <AnimatedPhone />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Tudo o que você precisa para gerir seu negócio</h2>
            <p className="text-lg text-[#6B7280]">Uma plataforma integrada que cobre desde a emissão de documentos até a análise financeira avançada.</p>
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
      <section id="how-it-works" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Comece em 3 passos simples</h2>
            <p className="text-lg text-[#6B7280]">Migrar para o digital nunca foi tão fácil. Veja como o Biz-flow funciona na prática.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Crie sua Conta", desc: "Registe-se em segundos e configure os dados da sua empresa e logótipo." },
              { step: "02", title: "Registe Produtos", desc: "Adicione seus itens ou serviços ao catálogo para agilizar a faturação." },
              { step: "03", title: "Emita e Envie", desc: "Gere faturas profissionais e envie diretamente para o WhatsApp do cliente." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-white rounded-3xl shadow-sm border border-[#E5E7EB]">
                <div className="text-5xl font-black text-[#1A73E8]/10 absolute top-6 right-8 font-display">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="ai-demo" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0F172A] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A73E8]/20 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold font-display">Teste agora sem compromisso</h2>
                <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                  Aceda ao modo convidado e experimente a criação de faturas, recibos e orçamentos em segundos. Se gostar, pode criar a sua conta diretamente no software.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <a 
                  href="https://biz-flow.cloud/?guest=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1A73E8] hover:bg-[#0D47A1] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-[#1A73E8]/20 flex items-center justify-center gap-3 group"
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
      <section id="modules" className="py-24 bg-[#F5F7FA] overflow-hidden">
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
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A73E8]/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A73E8]/20 text-[#0D47A1] text-sm font-bold border border-#1A73E8/30">
                <Cpu className="w-4 h-4" />
                Powered by Gemini AI
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                Inteligência Artificial que <span className="text-[#0D47A1]">trabalha por você.</span>
              </h2>
              <p className="text-xl text-[#9CA3AF] leading-relaxed">
                Não perca tempo escrevendo descrições chatas. Nossa IA integrada ajuda você a criar textos profissionais para seus produtos e serviços, aumentando suas chances de venda.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#1A73E8]/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-[#0D47A1] w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Otimização de Texto</div>
                    <div className="text-[#9CA3AF] text-sm">Transforme rascunhos em propostas comerciais irresistíveis.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#1A73E8]/20 flex items-center justify-center flex-shrink-0">
                    <LayoutDashboard className="text-[#0D47A1] w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Insights de Negócio</div>
                    <div className="text-[#9CA3AF] text-sm">Análise inteligente dos seus dados para sugerir melhorias.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1A73E8] to-[#00BCD4] p-1 rounded-[2.5rem] shadow-2xl shadow-[#1A73E8]/20">
                <div className="bg-[#0F172A] rounded-[2.3rem] p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1A73E8] flex items-center justify-center">
                      <Cpu className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">BizFlow AI Assistant</div>
                      <div className="text-xs text-[#0D47A1]">Online e pronto para ajudar</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                      Como posso ajudar com sua fatura hoje?
                    </div>
                    <div className="bg-[#1A73E8] p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-white">
                      Melhore a descrição do serviço "Consultoria de Marketing".
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm space-y-2">
                      <p className="font-bold text-[#0D47A1]">Sugestão Profissional:</p>
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
          <div className="bg-[#E1F5FE] rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-display">Muito mais que um gestor. Uma comunidade.</h2>
              <p className="text-lg text-[#6B7280]">
                Acesse o Feed da Comunidade para interagir com outros empreendedores e trocar experiências sobre gestão de negócios.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-[#374151] hover:text-[#0D47A1] transition-colors"
                >
                  <Users className="w-4 h-4 text-[#1A73E8]" />
                  Entrar na Comunidade
                </a>

                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-[#374151]">
                  <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
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
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tight">Pronto para levar seu negócio ao <span className="text-[#1A73E8]">próximo nível?</span></h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que já simplificaram sua gestão com o Biz-flow.cloud.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://biz-flow.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1A73E8] hover:bg-[#0D47A1] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-[#BBDEFB]/50"
            >
              Começar Agora Gratuitamente
            </a>
            <a 
              href="https://wa.me/258840636794" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0F172A] hover:bg-[#0B3A85] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
          <p className="text-[#9CA3AF] text-sm font-medium">Não é necessário cartão de crédito para começar.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F7FA] pt-20 pb-10 border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1A73E8] rounded-lg flex items-center justify-center">
                  <Zap className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight">Biz-flow</span>
              </div>
              <p className="text-[#6B7280] max-w-sm">
                A plataforma definitiva de gestão para quem quer crescer de forma organizada e profissional.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/258840636794" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#E1F5FE] transition-colors cursor-pointer"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5 text-[#6B7280]" />
                </a>
                <a 
                  href="tel:+258840636797" 
                  className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#E1F5FE] transition-colors cursor-pointer"
                  title="Telefone de Apoio"
                >
                  <Smartphone className="w-5 h-5 text-[#6B7280]" />
                </a>
                <a 
                  href="https://biz-flow.cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#E1F5FE] transition-colors cursor-pointer"
                  title="Website"
                >
                  <Globe className="w-5 h-5 text-[#6B7280]" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Produto</h4>
              <ul className="space-y-4 text-[#6B7280] text-sm">
                <li><Link to="/funcionalidades" className="hover:text-[#0D47A1] transition-colors">Funcionalidades</Link></li>
                <li><Link to="/precos" className="hover:text-[#0D47A1] transition-colors">Preços</Link></li>
                <li><Link to="/blog" className="hover:text-[#0D47A1] transition-colors">Blog</Link></li>
                <li><Link to="/sobre" className="hover:text-[#0D47A1] transition-colors">Sobre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Suporte</h4>
              <ul className="space-y-4 text-[#6B7280] text-sm">
                <li>Apoio: <a href="tel:+258840636797" className="hover:text-[#0D47A1] transition-colors">+258 840 636 797</a></li>
                <li>WhatsApp: <a href="https://wa.me/258840636794" target="_blank" rel="noopener noreferrer" className="hover:text-[#0D47A1] transition-colors">+258 840 636 794</a></li>
                <li><a href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" target="_blank" rel="noopener noreferrer" className="hover:text-[#0D47A1] transition-colors">Grupo da Comunidade</a></li>
                <li><Link to="/privacy" className="hover:text-[#0D47A1] transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-[#0D47A1] transition-colors">Termos de Uso</Link></li>
                <li><Link to="/delete-account" className="hover:text-red-600 transition-colors font-medium">Eliminar Conta</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-4 text-[#9CA3AF] text-xs font-medium">
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
    </div>
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
