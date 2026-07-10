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
  Youtube,
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
import { DemoEditor } from './pages/DemoEditor';

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
          <img src="/logo.svg" alt="Biz-flow" className="w-10 h-10" />
          <span className="text-xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
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
          <NavLink href="/testar">Testar Grátis</NavLink>
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
              <MobileNavLink href="/testar" onClick={() => setMobileMenuOpen(false)}>Testar Grátis</MobileNavLink>
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
              <span className="text-sm font-medium text-[var(--color-muted)]">Plataforma de gestão para Moçambique</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Facturação e controlo financeiro{' '}
              <span className="relative inline-block">
                <span className="relative z-10">para o seu negócio</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-accent)]/20 -z-0" />
              </span>
              .
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-[var(--color-muted)] leading-relaxed max-w-lg">
              Emita facturas profissionais, controle o fluxo de caixa e envie documentos pelo WhatsApp. Uma plataforma completa para empreendedores moçambicanos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedLink
                href="/testar"
                className="btn-accent text-lg"
                eventName="cta_click"
                metadata={{ location: 'hero_testar' }}
              >
                Testar Grátis
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
      <section className="py-12 bg-gradient-to-r from-[var(--color-primary)]/5 via-[var(--color-surface)] to-[var(--color-primary)]/5 border-y border-[var(--color-border)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'var(--font-mono)' }}>2.000+</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-4 h-4 text-[var(--color-muted)]" />
                <span className="text-sm text-[var(--color-muted)] font-medium uppercase tracking-wider">Utilizadores</span>
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'var(--font-mono)' }}>50.000+</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <FileText className="w-4 h-4 text-[var(--color-muted)]" />
                <span className="text-sm text-[var(--color-muted)] font-medium uppercase tracking-wider">Facturas</span>
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'var(--font-mono)' }}>99.9%</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <Shield className="w-4 h-4 text-[var(--color-muted)]" />
                <span className="text-sm text-[var(--color-muted)] font-medium uppercase tracking-wider">Uptime</span>
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-1" style={{ fontFamily: 'var(--font-mono)' }}>4.8/5</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-muted)] font-medium uppercase tracking-wider">Avaliação</span>
              </div>
            </div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold uppercase tracking-wider">
                <Receipt className="w-4 h-4" />
                Documentos
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Criação de documentos em segundos
              </h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Emita facturas, recibos e orçamentos com aspecto profissional. Personalize com o seu logótipo, NUIT e assinatura digital.
              </p>
              <ul className="space-y-4">
                {[
                  'Facturas, Recibos, Factura-Recibo e Orçamentos',
                  'Personalização com Logo e NUIT da empresa',
                  'Assinatura Digital directamente no ecrã',
                  'Exportação para PDF formato A4',
                  'Conversão de Orçamento em Factura com 1 clique'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href="/testar"
                className="btn-primary"
                eventName="cta_click"
                metadata={{ location: 'product_showcase' }}
              >
                Testar Editor Grátis <ArrowRight className="w-4 h-4" />
              </TrackedLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-transparent rounded-[32px] blur-2xl" />
              <div className="relative bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl">
                {/* Invoice Preview */}
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                  {/* Invoice Header */}
                  <div className="flex justify-between items-start p-5 border-b border-slate-100">
                    <div>
                      <img src="/logo.svg" alt="Biz-flow" className="h-7 mb-2" />
                      <p className="text-xs text-slate-400">NUIT: 123456789</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-800">FACTURA</p>
                      <p className="text-xs text-slate-400">Nº FAT-0001</p>
                      <p className="text-xs text-slate-400">10 Julho 2026</p>
                    </div>
                  </div>
                  {/* Client */}
                  <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Cliente</p>
                    <p className="text-sm font-medium">Maria Silva, Lda</p>
                  </div>
                  {/* Items */}
                  <div className="px-5 py-3">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-100">
                          <th className="text-left py-1.5 font-medium">Descrição</th>
                          <th className="text-right py-1.5 font-medium w-12">Qtd</th>
                          <th className="text-right py-1.5 font-medium w-20">Preço</th>
                          <th className="text-right py-1.5 font-medium w-20">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-50">
                          <td className="py-2 text-slate-700">Consultoria de Marketing Digital</td>
                          <td className="text-right py-2 text-slate-600">1</td>
                          <td className="text-right py-2 text-slate-600">15.000 MT</td>
                          <td className="text-right py-2 font-medium">15.000 MT</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                          <td className="py-2 text-slate-700">Design de Website</td>
                          <td className="text-right py-2 text-slate-600">1</td>
                          <td className="text-right py-2 text-slate-600">25.000 MT</td>
                          <td className="text-right py-2 font-medium">25.000 MT</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Totals */}
                  <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50">
                    <div className="space-y-1 text-right text-xs">
                      <p className="text-slate-500">Subtotal: <span className="font-medium text-slate-700">40.000 MT</span></p>
                      <p className="text-slate-500">IVA (16%): <span className="font-medium text-slate-700">6.400 MT</span></p>
                      <p className="text-base font-bold text-blue-600">Total: 46.400 MT</p>
                    </div>
                  </div>
                  {/* Stamp */}
                  <div className="flex justify-end px-5 pb-4">
                    <div className="text-center border-2 border-green-500 text-green-600 text-[10px] font-bold uppercase rounded-lg px-4 py-1 rotate-[-5deg] opacity-70">
                      PAGO
                    </div>
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
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-transparent rounded-[32px] blur-2xl" />
              <div className="relative bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl">
                {/* Mini Dashboard */}
                <div className="space-y-4">
                  {/* Summary cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                      <p className="text-[10px] text-emerald-600 uppercase tracking-wider font-medium">Entradas</p>
                      <p className="text-xl font-bold text-emerald-700" style={{ fontFamily: 'var(--font-mono)' }}>185.400 MT</p>
                      <p className="text-[10px] text-emerald-500">+12% este mês</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                      <p className="text-[10px] text-red-600 uppercase tracking-wider font-medium">Saídas</p>
                      <p className="text-xl font-bold text-red-700" style={{ fontFamily: 'var(--font-mono)' }}>92.150 MT</p>
                      <p className="text-[10px] text-red-500">+8% este mês</p>
                    </div>
                  </div>

                  {/* Pie Chart SVG */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-xs font-medium text-slate-600 mb-3">Despesas por Categoria</p>
                    <div className="flex items-center gap-6">
                      <svg viewBox="0 0 36 36" className="w-28 h-28">
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                        <path d="M18 2.1 a15.9 15.9 0 0 1 13.8 7.8" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M31.8 9.9 a15.9 15.9 0 0 1 2.1 11.4" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M33.9 21.3 a15.9 15.9 0 0 1 -8.1 11.4" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M25.8 32.7 a15.9 15.9 0 0 1 -15.6 0" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M10.2 32.7 a15.9 15.9 0 0 1 -8.1 -11.4" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      <div className="space-y-1.5 flex-1">
                        {[
                          { label: 'Operacional', color: '#3b82f6', value: '35%' },
                          { label: 'Insumos', color: '#f59e0b', value: '25%' },
                          { label: 'Logística', color: '#10b981', value: '20%' },
                          { label: 'Salários', color: '#ef4444', value: '12%' },
                          { label: 'Outros', color: '#8b5cf6', value: '8%' },
                        ].map(item => (
                          <div key={item.label} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                              <span className="text-slate-600">{item.label}</span>
                            </div>
                            <span className="font-medium text-slate-800">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Monthly bar */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-xs font-medium text-slate-600 mb-3">Fluxo Mensal</p>
                    <div className="flex items-end gap-2 h-24">
                      {['Jan','Fev','Mar','Abr','Mai','Jun'].map((m, i) => (
                        <div key={m} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full bg-blue-100 rounded-t relative" style={{ height: `${40 + Math.random() * 40}%` }}>
                            <div className="absolute bottom-0 w-full bg-blue-500 rounded-t transition-all hover:bg-blue-600" style={{ height: `${60 + Math.random() * 30}%` }} />
                          </div>
                          <span className="text-[10px] text-slate-400">{m}</span>
                        </div>
                      ))}
                    </div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                Finanças
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Dashboard financeiro completo
              </h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                Tenha uma visão clara das suas receitas e despesas com relatórios detalhados e gráficos interactivos.
              </p>
              <ul className="space-y-4">
                {[
                  'Receitas e Despesas organizadas por categoria',
                  'Gráfico de despesas com análise percentual',
                  'Fluxo de caixa mensal com projecções',
                  'Relatórios exportáveis para análise',
                  'Alertas de contas a pagar e receber'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href="/testar"
                className="btn-primary"
                eventName="cta_click"
                metadata={{ location: 'finance_section' }}
              >
                Experimentar Agora <ArrowRight className="w-4 h-4" />
              </TrackedLink>
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
                <img src="/logo.svg" alt="Biz-flow" className="w-10 h-10" />
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
                  href="https://www.facebook.com/share/18nRmHfT53/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@biz-flow-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/biz-flow-60457b398"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bizflow.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
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
          <Route path="/testar" element={<DemoEditor />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
