import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, FileText, TrendingUp, Globe, Smartphone, Cpu } from 'lucide-react';
import Seo from '../components/Seo';

const features = [
  { title: 'Emissão de Documentos', description: 'Faturas, recibos e orçamentos com logotipo, NUIT e envio instantâneo por WhatsApp.', icon: FileText },
  { title: 'Fluxo de Caixa Inteligente', description: 'Registe entradas e saídas com categorização automática para análises claras.', icon: TrendingUp },
  { title: 'Relatórios Detalhados', description: 'Visualize lucros, despesas e tendências com dashboards fáceis de entender.', icon: Cpu },
  { title: 'Gestão de Clientes', description: 'Registe clientes e a sua informação fiscal para faturação e histórico de transações.', icon: Smartphone },
  { title: 'Multi-moeda e Internacional', description: 'Suporte para MZN, AOA, BRL, USD e EUR para vender com facilidade em diferentes mercados.', icon: Globe },
  { title: 'Segurança Profissional', description: 'Dados protegidos com criptografia, autenticação segura e backups confiáveis.', icon: ShieldCheck },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <Seo
        title="Funcionalidades | Biz-flow"
        description="Conheça as funcionalidades do Biz-flow: emissão de documentos, gestão financeira, relatórios, multi-moeda e muito mais."
        canonicalPath="/funcionalidades"
        breadcrumb={[{ name: 'Funcionalidades', url: '/funcionalidades' }]}
      />

      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar para o Início
        </Link>

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-bold">Funcionalidades</p>
          <h1 className="text-5xl md:text-6xl font-bold font-display mt-4">Tudo o que a sua empresa precisa para operar com confiança.</h1>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">Funcionalidades desenhadas para simplificar o dia a dia administrativo e melhorar os resultados do seu negócio.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[2rem] bg-white p-10 shadow-sm border border-slate-200 group hover:shadow-xl transition-all">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
