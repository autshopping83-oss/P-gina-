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
  MessageSquare,
  ArrowLeft,
  ChevronRight,
  BarChart3,
  Receipt,
  Wallet,
  Shield,
  Clock,
  Star,
  Mail,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Seo from './components/Seo';
import AnimatedPhone from './components/AnimatedPhone';
import { TrackedLink } from './components/TrackedLink';
import { NewsletterForm } from './components/NewsletterForm';
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

/* ─── Navigation ────────────────────────────────────────────────────────────── */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--color-primary)/20] group-hover:shadow-[var(--color-primary)/30] transition-shadow">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Biz-flow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink href="/funcionalidades">Funcionalidades</NavLink>
          <NavLink href="/precos">Preços</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/sobre">Sobre</NavLink>
          <NavLink href="/contato">Contato</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <TrackedLink
            href="https://biz-flow.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            eventName="cta_click"
            metadata={{ location: 'navbar' }}
          >
            Começar Grátis
            <ArrowRight className="w-4 h-4" />
          </TrackedLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[var(--color-border)] overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              <MobileNavLink href="/funcionalidades" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</MobileNavLink>
              <MobileNavLink href="/precos" onClick={() => setMobileMenuOpen(false)}>Preços</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink href="/sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</MobileNavLink>
              <MobileNavLink href="/contato" onClick={() => setMobileMenuOpen(false)}>Contato</MobileNavLink>
              <TrackedLink
                href="https://biz-flow.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center mt-4"
                eventName="cta_click"
                metadata={{ location: 'mobile_menu' }}
              >
                Começar Grátis
                <ArrowRight className="w-4 h-4" />
              </TrackedLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    to={href}
    className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-accent)] after:transition-all hover:after:w-full"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    to={href}
    onClick={onClick}
    className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors py-2"
  >
    {children}
  </Link>
);

/* ─── Reusable Components ───────────────────────────────────────────────────── */

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'center'
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) => (
  <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-16`}>
    {eyebrow && (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-sm font-semibold mb-6 uppercase tracking-wider">
        {eyebrow}
      </div>
    )}
    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
      {title}
    </h2>
    {description && (
      <p className="text-lg text-[var(--color-muted)] leading-relaxed">{description}</p>
    )}
  </div>
);

const FeatureItem = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex gap-5 p-6 rounded-2xl hover:bg-[var(--color-surface)] transition-colors">
    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-soft)] flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{title}</h3>
      <p className="text-[var(--color-muted)] leading-relaxed">{description}</p>
    </div>
  </div>
);

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
      {value}
    </div>
    <div className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-medium">{label}</div>
  </div>
);

/* ─── Landing Page ──────────────────────────────────────────────────────────── */

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <Seo
        title="Biz-flow | Gestão Financeira e Emissão de Facturas"
        description="Plataforma de gestão financeira para simplificar faturação, fluxo de caixa e decisões estratégicas para negócios em Moçambique."
        canonicalPath="/"
        breadcrumb={[]}
      />
      <Navbar />

      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Subtle geometric pattern background */}
        <div className="absolute inset-0 capulana-dots pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-accent)]/5 to-transparent pointer-events-none" />

        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-sm font-medium text-[var(--color-muted)]">Gestão financeira simplificada</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight" style={{ fontFamily: 'var(--color-primary)' }}>
              Facturação e gestão financeira{' '}
              <span className="relative inline-block">
                <span className="relative z-10">sem complicação</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-accent)]/20 -z-0" />
              </span>
              .
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-[var(--color-muted)] leading-relaxed max-w-lg">
              Emita facturas profissionais, controle o fluxo de caixa e envie documentos pelo WhatsApp — tudo numa plataforma feita para empreendedores moçambicanos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedLink
                href="https://biz-flow.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
                eventName="cta_click"
                metadata={{ location: 'hero' }}
              >
                Começar grátis sem cartão
                <ArrowRight className="w-5 h-5" />
              </TrackedLink>
              <TrackedLink
                href="https://wa.me/258840636794"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg"
                eventName="whatsapp_click"
                metadata={{ location: 'hero' }}
              >
                <MessageSquare className="w-5 h-5" />
                Falar com a equipe
              </TrackedLink>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-[var(--color-surface)] flex items-center justify-center text-xs font-bold text-[var(--color-primary)]"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  <span className="font-bold text-[var(--color-text)]">+2.000</span> empreendedores confiam
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 rounded-[40px] blur-3xl" />
            <AnimatedPhone />
          </motion.div>
        </div>
      </section>

      {/* ─── Trust Bar ─────────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatBlock value="2.000+" label="Utilizadores" />
            <StatBlock value="50.000+" label="Facturas emitidas" />
            <StatBlock value="99.9%" label="Uptime" />
            <StatBlock value="4.8/5" label="Avaliação" />
          </div>
        </div>
      </section>

      {/* ─── Features Grid ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--color-paper)]">
        <div className="container">
          <SectionHeader
            eyebrow="Funcionalidades"
            title="Tudo o que precisa para gerir o seu negócio"
            description="Uma plataforma integrada que cobre desde a emissão de documentos até a análise financeira avançada."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: 'Documentos Profissionais', desc: 'Emita facturas, recibos e orçamentos em segundos. Personalize com o seu logo e NUIT.' },
              { icon: TrendingUp, title: 'Fluxo de Caixa', desc: 'Controle entradas e saídas com categorias claras e veja a saúde financeira em tempo real.' },
              { icon: Cpu, title: 'Assistente IA', desc: 'Integração com IA para melhorar descrições de produtos e optimizar a comunicação comercial.' },
              { icon: Smartphone, title: 'App PWA & Offline', desc: 'Instale no celular e use mesmo sem internet. Sincronização automática ao conectar.' },
              { icon: Printer, title: 'Impressão Bluetooth', desc: 'Conecte impressoras térmicas portáteis e imprima talões de venda na hora.' },
              { icon: Globe, title: 'Multi-Moeda', desc: 'Suporte para MZN, AOA, BRL, USD e EUR. Disponível em 5 idiomas.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="premium-card p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-soft)] flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{feature.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container">
          <SectionHeader
            eyebrow="Como funciona"
            title="Comece em 3 passos simples"
            description="Migrar para o digital nunca foi tão fácil."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Crie sua Conta', desc: 'Registe-se em segundos e configure os dados da sua empresa e logótipo.' },
              { step: '02', title: 'Registe Produtos', desc: 'Adicione seus itens ou serviços ao catálogo para agilizar a facturacao.' },
              { step: '03', title: 'Emita e Envie', desc: 'Gere facturas profissionais e envie directamente para o WhatsApp do cliente.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative p-8 bg-[var(--color-surface-alt)] rounded-2xl border border-[var(--color-border)] group hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="text-6xl font-bold text-[var(--color-accent)]/10 absolute top-4 right-6" style={{ fontFamily: 'var(--font-mono)' }}>
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white font-bold mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Product Showcase ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--color-paper)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">
                <Receipt className="w-4 h-4" />
                Documentos
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Gestão de documentos em segundos
              </h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                O coração do Biz-flow é a agilidade. Crie documentos comerciais profissionais sem complicação.
              </p>
              <ul className="space-y-4">
                {[
                  'Emissão de Facturas, Recibos e Orçamentos',
                  'Personalização completa com Logo e NUIT',
                  'Assinatura Digital directamente na tela',
                  'Exportação instantânea para PDF A4',
                  'Conversão de Orçamento em Factura com 1 clique'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent rounded-[32px] blur-2xl" />
              <div className="relative bg-[var(--color-surface-alt)] rounded-3xl p-8 border border-[var(--color-border)] shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-alt)] rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-soft)] flex items-center justify-center mx-auto">
                      <FileText className="w-8 h-8 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-[var(--color-muted)] font-medium">Pré-visualização da Factura</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Finance Section ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-[32px] blur-2xl" />
              <div className="relative bg-[var(--color-surface-alt)] rounded-3xl p-8 border border-[var(--color-border)] shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-alt)] rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto">
                      <BarChart3 className="w-8 h-8 text-[var(--color-primary)]" />
                    </div>
                    <p className="text-[var(--color-muted)] font-medium">Dashboard Financeiro</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                Finanças
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Controle financeiro total
              </h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Saiba exactamente para onde o seu dinheiro está a ir com o nosso módulo de fluxo de caixa.
              </p>
              <ul className="space-y-4">
                {[
                  'Registo detalhado de Receitas e Despesas',
                  'Categorização inteligente de gastos',
                  'Dashboard com estatísticas mensais',
                  'Histórico completo de transações',
                  'Alertas de pagamentos pendentes'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── AI Assistant Section ──────────────────────────────────────────── */}
      <section className="section-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 capulana-pattern pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-accent)]/10 to-transparent pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[var(--color-accent)] text-sm font-semibold border border-white/10">
                <Cpu className="w-4 h-4" />
                Inteligência Artificial
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Assistente inteligente para a sua facturacao
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Crie descrições claras e profissionais para serviços e documentos sem perder tempo. O sistema sugere textos prontos para usar.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MessageSquare, title: 'Otimização de Texto', desc: 'Transforme rascunhos em propostas comerciais irresistíveis.' },
                  { icon: LayoutDashboard, title: 'Insights de Negócio', desc: 'Análise inteligente dos seus dados para sugerir melhorias.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{item.title}</div>
                      <div className="text-white/50 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] p-[2px] rounded-[32px] shadow-2xl">
                <div className="bg-[var(--color-ink)] rounded-[30px] p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                      <Cpu className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-white">BizFlow AI</div>
                      <div className="text-xs text-[var(--color-accent)]">Online e pronto para ajudar</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-white">
                      Como posso ajudar com a sua factura hoje?
                    </div>
                    <div className="bg-[var(--color-accent)] p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-white">
                      Melhore a descrição do serviço "Consultoria de Marketing".
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm space-y-2">
                      <p className="font-bold text-[var(--color-accent)]">Sugestão Profissional:</p>
                      <p className="text-white/80">"Estratégia abrangente de posicionamento digital focada em conversão e crescimento escalável de marca..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Community Section ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--color-paper)]">
        <div className="container">
          <div className="bg-gradient-to-br from-[var(--color-accent-soft)] to-[var(--color-surface)] rounded-[32px] p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Muito mais que um gestor. Uma comunidade.
              </h2>
              <p className="text-lg text-[var(--color-muted)]">
                Acesse o Feed da Comunidade para interagir com outros empreendedores e trocar experiências sobre gestão de negócios.
              </p>
              <a
                href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
              >
                <Users className="w-5 h-5" />
                Entrar na Comunidade
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 border border-[var(--color-border)]">
                  <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>500+</div>
                  <div className="text-sm text-[var(--color-muted)]">Membros activos</div>
                </div>
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 border border-[var(--color-border)]">
                  <MessageSquare className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>1.200+</div>
                  <div className="text-sm text-[var(--color-muted)]">Mensagens por mês</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 border border-[var(--color-border)]">
                  <Shield className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>100%</div>
                  <div className="text-sm text-[var(--color-muted)]">Suporte em português</div>
                </div>
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 border border-[var(--color-border)]">
                  <Clock className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>24h</div>
                  <div className="text-sm text-[var(--color-muted)]">Tempo de resposta</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Pronto para levar o seu negócio ao{' '}
              <span className="relative inline-block">
                <span className="relative z-10">próximo nível?</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-accent)]/30 -z-0" />
              </span>
            </h2>
            <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
              Junte-se a milhares de empreendedores que já simplificaram a sua gestão com o Biz-flow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href="https://biz-flow.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
                eventName="cta_click"
                metadata={{ location: 'cta_section' }}
              >
                Começar Agora Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </TrackedLink>
              <TrackedLink
                href="https://wa.me/258840636794"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg"
                eventName="whatsapp_click"
                metadata={{ location: 'cta_section' }}
              >
                <MessageSquare className="w-5 h-5" />
                Falar no WhatsApp
              </TrackedLink>
            </div>
            <div className="pt-6 border-t border-slate-200 max-w-md mx-auto">
              <p className="text-sm text-[var(--color-muted)] font-medium mb-4">
                <Mail className="w-4 h-4 inline mr-1" />
                Receba dicas de gestão no seu email
              </p>
              <NewsletterForm />
            </div>
            <p className="text-sm text-[var(--color-muted)] font-medium">
              Não é necessário cartão de crédito para começar.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[var(--color-ink)] text-white pt-20 pb-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-accent)] rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Biz-flow</span>
              </Link>
              <p className="text-white/50 max-w-sm leading-relaxed">
                A plataforma definitiva de gestão para quem quer crescer de forma organizada e profissional em Moçambique.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/258840636794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a
                  href="tel:+258840636797"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="Telefone"
                >
                  <Smartphone className="w-5 h-5" />
                </a>
                <a
                  href="https://biz-flow.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="Website"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Produto</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><Link to="/funcionalidades" className="hover:text-[var(--color-accent)] transition-colors">Funcionalidades</Link></li>
                <li><Link to="/precos" className="hover:text-[var(--color-accent)] transition-colors">Preços</Link></li>
                <li><Link to="/blog" className="hover:text-[var(--color-accent)] transition-colors">Blog</Link></li>
                <li><Link to="/sobre" className="hover:text-[var(--color-accent)] transition-colors">Sobre</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Suporte</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li>Apoio: <a href="tel:+258840636797" className="hover:text-[var(--color-accent)] transition-colors">+258 840 636 797</a></li>
                <li>WhatsApp: <a href="https://wa.me/258840636794" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">+258 840 636 794</a></li>
                <li><a href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">Grupo da Comunidade</a></li>
                <li><Link to="/privacy" className="hover:text-[var(--color-accent)] transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-[var(--color-accent)] transition-colors">Termos de Uso</Link></li>
                <li><Link to="/delete-account" className="hover:text-red-400 transition-colors font-medium">Eliminar Conta</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
            <p>&copy; {new Date().getFullYear()} Biz-flow. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <span>Feito com dedicacao para empreendedores</span>
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

/* ─── App Router ────────────────────────────────────────────────────────────── */

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
