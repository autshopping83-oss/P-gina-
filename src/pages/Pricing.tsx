import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, CreditCard } from 'lucide-react';
import Seo from '../components/Seo';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Seo
        title="Planos e Preços | Gestão Financeira Biz-flow"
        description="Compare os planos do Biz-flow e escolha a solução ideal para gerir faturação, fluxo de caixa e vendas digitais."
        canonicalPath="/precos"
        breadcrumb={[{ name: 'Preços', url: '/precos' }]}
      />

      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar para o Início
        </Link>

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-bold">Planos</p>
          <h1 className="text-5xl md:text-6xl font-bold font-display mt-4">Planos que acompanham o crescimento da sua empresa.</h1>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">Escolha entre um plano gratuito ideal para começar ou uma solução completa para contas profissionais e equipes.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              name: 'Starter',
              price: 'Grátis',
              features: ['Emissão de faturas', 'Controlo de despesas', 'Acesso a 1 utilizador', 'Suporte por WhatsApp'],
              highlight: false,
            },
            {
              name: 'Pro',
              price: '12.990 MZN/mês',
              features: ['Todas as do Starter', 'Gestão de clientes', 'Relatórios avançados', 'Multi-moeda'],
              highlight: true,
            },
            {
              name: 'Empresarial',
              price: '24.990 MZN/mês',
              features: ['Todas as do Pro', 'Contabilidade simplificada', 'Acesso para equipa', 'Suporte prioritário'],
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-10 shadow-sm transition-all ${plan.highlight ? 'border-emerald-200 bg-emerald-50 shadow-emerald-100' : 'border-slate-200 bg-white hover:shadow-xl'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] font-bold text-slate-500">{plan.name}</p>
                  <p className="text-5xl font-bold text-slate-900 mt-4">{plan.price}</p>
                </div>
                <div className="w-14 h-14 rounded-3xl bg-white shadow flex items-center justify-center text-emerald-500">
                  <CreditCard className="w-7 h-7" />
                </div>
              </div>
              <ul className="space-y-4 mb-10 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/258840636794"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full rounded-3xl px-6 py-4 text-sm font-bold transition-all ${plan.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                Falar com um especialista
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
