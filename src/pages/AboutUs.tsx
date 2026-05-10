import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, ShieldCheck, Globe } from 'lucide-react';
import Seo from '../components/Seo';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Seo
        title="Sobre Nós | Biz-flow"
        description="Conheça a história do Biz-flow, a missão do Ruchan Group e a equipa que apoia a transformação digital de PMEs."
        canonicalPath="/sobre"
        breadcrumb={[{ name: 'Sobre', url: '/sobre' }]}
      />

      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0D47A1] font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar para o Início
        </Link>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#0D47A1] font-bold">Sobre Nós</p>
            <h1 className="text-5xl md:text-6xl font-bold font-display mt-4">Transformando a gestão financeira de negócios moçambicanos.</h1>
            <p className="text-[#6B7280] text-lg mt-4 max-w-2xl">O Biz-flow nasceu para ajudar microempresas, pequenos negócios e freelancers a abandonar o papel e gerir receitas, despesas e documentos fiscais de forma profissional.</p>

            <div className="mt-12 space-y-8 text-[#374151] leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-4">Nossa missão</h2>
                <p>
                  A missão do Biz-flow é tornar a gestão financeira acessível, confiável e eficiente para o empreendedor moçambicano. Trabalhamos para que a sua empresa tenha mais tempo para vender e menos tempo para organizar papéis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">A força por trás</h2>
                <p>
                  O Biz-flow é uma solução do Ruchan Group, desenvolvida em Maputo por uma equipa multidisciplinar de produto, design e engenharia. Somos um grupo que entende os desafios locais e oferece tecnologia pensada para o mercado africano.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Compromisso com a confiança</h2>
                <p>
                  Confiamos na transparência: termos claros, política de privacidade dedicada e suporte direto via WhatsApp. O nosso objetivo é construir uma marca digital forte e reconhecida em Moz.
                </p>
              </section>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] bg-[#E1F5FE] p-10 shadow-sm border border-[#BBDEFB]">
              <div className="flex items-center gap-4 text-[#0D47A1] mb-4">
                <Users className="w-6 h-6" />
                <span className="font-bold text-[#1F2937]">Equipa local</span>
              </div>
              <p className="text-[#374151]">Equipa de produto e suporte em Maputo preparada para responder a necessidades reais do mercado.</p>
            </div>
            <div className="rounded-[2rem] bg-[#F5F7FA] p-10 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-4 text-[#0D47A1] mb-4">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-bold text-[#1F2937]">Segurança</span>
              </div>
              <p className="text-[#374151]">Dados protegidos com boas práticas de segurança e apenas processados quando necessários para o funcionamento do serviço.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-10 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-4 text-[#0D47A1] mb-4">
                <Globe className="w-6 h-6" />
                <span className="font-bold text-[#1F2937]">Presença digital</span>
              </div>
              <p className="text-[#374151]">Marca construída com consistência online: site, LinkedIn, YouTube e Facebook alinhados para reforçar a autoridade da Biz-flow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
