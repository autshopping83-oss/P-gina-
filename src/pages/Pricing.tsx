import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, CreditCard } from 'lucide-react';
import Seo from '../components/Seo';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Seo
        title="Planos e Preços | Gestão Financeira Biz-flow"
        description="Planos a partir de 250 MT/mês. Comece grátis e evolua para o plano ideal para o seu negócio em Moçambique."
        canonicalPath="/precos"
        breadcrumb={[{ name: 'Preços', url: '/precos' }]}
      />

      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0D47A1] font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar para o Início
        </Link>

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-[#0D47A1] font-bold">Planos</p>
          <h1 className="text-5xl md:text-6xl font-bold font-display mt-4">Planos que acompanham o crescimento da sua empresa.</h1>
          <p className="text-[#6B7280] text-lg mt-4 max-w-2xl mx-auto">Escolha entre um plano gratuito ideal para começar ou uma solução completa para contas profissionais e equipes.</p>
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
              price: '250 MT/mês',
              features: ['Todas as do Starter', 'Gestão de clientes', 'Relatórios avançados', 'Multi-moeda', 'Suporte prioritário WhatsApp'],
              highlight: true,
            },
            {
              name: 'Empresarial',
              price: '500 MT/mês',
              features: ['Todas as do Pro', 'Contabilidade simplificada', 'Acesso para equipa', 'Suporte prioritário'],
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-10 shadow-sm transition-all ${plan.highlight ? 'border-[#BBDEFB] bg-[#E1F5FE] shadow-[#BBDEFB]' : 'border-[#E5E7EB] bg-white hover:shadow-xl'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#6B7280]">{plan.name}</p>
                  <p className="text-5xl font-bold text-[#1F2937] mt-4">{plan.price}</p>
                </div>
                <div className="w-14 h-14 rounded-3xl bg-white shadow flex items-center justify-center text-[#1A73E8]">
                  <CreditCard className="w-7 h-7" />
                </div>
              </div>
              <ul className="space-y-4 mb-10 text-[#374151]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1A73E8]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://biz-flow.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full rounded-3xl px-6 py-4 text-sm font-bold transition-all ${plan.highlight ? 'bg-[#0D47A1] text-white hover:bg-[#0B3A85]' : 'bg-[#0F172A] text-white hover:bg-[#0B3A85]'}`}
              >
                {plan.price === 'Grátis' ? 'Começar Grátis' : 'Assinar Agora'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
