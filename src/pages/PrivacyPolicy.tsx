import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Voltar para o Início
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Política de Privacidade</h1>
        <p className="text-slate-500 mb-10">Última atualização: 01 de Março de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introdução</h2>
            <p>
              O Biz-flow.cloud ("nós", "nosso") está comprometido em proteger a sua privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos as suas informações quando utiliza o nosso software e website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Informações que Recolhemos</h2>
            <p>Recolhemos informações que nos fornece diretamente:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dados de conta (nome, e-mail, senha).</li>
              <li>Dados comerciais (nome da empresa, NUIT, endereço, logótipo).</li>
              <li>Dados de clientes e produtos que insere no sistema.</li>
              <li>Informações de faturação e transações financeiras.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Como Utilizamos as Suas Informações</h2>
            <p>Utilizamos os seus dados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer e manter as funcionalidades do software.</li>
              <li>Gerar documentos profissionais (faturas, recibos).</li>
              <li>Processar pagamentos e gerir a sua subscrição.</li>
              <li>Melhorar a nossa plataforma através de análises de uso.</li>
              <li>Enviar comunicações importantes sobre a sua conta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Partilha de Dados</h2>
            <p>
              Não vendemos os seus dados pessoais. Podemos partilhar informações com fornecedores de serviços terceiros (como Supabase para base de dados e Stripe para pagamentos) apenas na medida necessária para o funcionamento do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados, incluindo encriptação e autenticação segura via Supabase. No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Os Seus Direitos</h2>
            <p>
              Tem o direito de aceder, corrigir ou eliminar os seus dados pessoais a qualquer momento através das definições da sua conta ou contactando o nosso suporte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contacto</h2>
            <p>
              Se tiver dúvidas sobre esta política, contacte-nos através do WhatsApp: +258 840 636 794.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
