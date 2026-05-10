import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Seo
        title="Termos de Uso - Biz-flow"
        description="Termos de uso da plataforma Biz-flow. Leia os termos e condições para o uso do nosso serviço."
        canonicalPath="/terms"
        breadcrumb={[{ name: 'Termos', url: '/terms' }]}
      />
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0D47A1] font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Voltar para o Início
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Termos de Uso</h1>
        <p className="text-[#6B7280] mb-10">Última atualização: 01 de Março de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[#374151] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao aceder e utilizar o Biz-flow, concorda em cumprir e estar vinculado a estes Termos de Uso. Se não concordar com qualquer parte destes termos, não deverá utilizar o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">2. Descrição do Serviço</h2>
            <p>
              O Biz-flow é uma plataforma de gestão empresarial que oferece ferramentas para emissão de documentos, controlo financeiro e gestão de clientes. O serviço é fornecido "como está" e "conforme disponível".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">3. Responsabilidades do Utilizador</h2>
            <p>Como utilizador, compromete-se a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações precisas e completas no registo.</li>
              <li>Manter a confidencialidade das suas credenciais de acesso.</li>
              <li>Não utilizar o serviço para fins ilegais ou não autorizados.</li>
              <li>Garantir que tem o direito de utilizar os dados de terceiros (clientes) que insere no sistema.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">4. Pagamentos e Subscrições</h2>
            <p>
              Algumas funcionalidades podem exigir uma subscrição paga. Os pagamentos são processados de forma segura. Reservamo-nos o direito de alterar os preços mediante aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do Biz-flow, incluindo software, design, logótipos e textos, é propriedade exclusiva nossa ou dos nossos licenciadores e está protegido por leis de direitos de autor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              Não seremos responsáveis por quaisquer danos indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar o serviço, incluindo perda de lucros ou dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">7. Modificações dos Termos</h2>
            <p>
              Podemos atualizar estes termos periodicamente. O uso continuado do serviço após tais alterações constitui a sua aceitação dos novos Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-4">8. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis de Moçambique. Qualquer disputa será resolvida nos tribunais competentes de Maputo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
