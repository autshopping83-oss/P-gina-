import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';

const posts = [
  {
    title: 'Como a faturação digital acelera o seu negócio',
    summary: 'Descubra os passos para trocar papel por processos mais rápidos e menos erros financeiros.',
    category: 'Faturação',
  },
  {
    title: '5 dicas para otimizar fluxo de caixa em PME',
    summary: 'Acompanhe receitas, despesas e mantenha a liquidez saudável com automação simples.',
    category: 'Finanças',
  },
  {
    title: 'Por que o WhatsApp é o canal preferido dos clientes moçambicanos',
    summary: 'Use WhatsApp e Biz-flow juntos para fechar vendas mais rápido e encantar quem compra online.',
    category: 'Vendas',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <Seo
        title="Blog | Biz-flow"
        description="Novidades e artigos sobre gestão financeira, faturação digital e crescimento de negócios em Moçambique."
        canonicalPath="/blog"
        breadcrumb={[{ name: 'Blog', url: '/blog' }]}
      />

      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar para o Início
        </Link>

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-bold">Blog</p>
          <h1 className="text-5xl md:text-6xl font-bold font-display mt-4">Insights para crescer com gestão digital.</h1>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">Leia artigos com dicas práticas para empreendedores, contadores e gestores que querem resultados rápidos.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[2rem] bg-white p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 text-emerald-600 mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.35em] font-bold">{post.category}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{post.summary}</p>
              <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
                <span>Leitura rápida</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 4 min</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
