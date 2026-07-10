// src/pages/Blog.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, MessageCircle, AlertCircle } from 'lucide-react';
import Seo from '../components/Seo';
import { getPublishedPosts, type BlogPost } from '../services/blogService';

const fallbackPosts: BlogPost[] = [
  {
    id: '1', slug: 'faturacao-digital-acelera-negocio',
    title: 'Como a faturação digital acelera o seu negócio',
    summary: 'Descubra os passos para trocar papel por processos mais rápidos e menos erros financeiros.',
    category: 'Faturação', author: 'Biz-flow', content: '', image_url: null,
    read_time_min: 4, published: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: '2', slug: '5-dicas-otimizar-fluxo-caixa-pme',
    title: '5 dicas para otimizar fluxo de caixa em PME',
    summary: 'Acompanhe receitas, despesas e mantenha a liquidez saudável com automação simples.',
    category: 'Finanças', author: 'Biz-flow', content: '', image_url: null,
    read_time_min: 4, published: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: '3', slug: 'whatsapp-canal-preferido-clientes-mocambicanos',
    title: 'Por que o WhatsApp é o canal preferido dos clientes moçambicanos',
    summary: 'Use WhatsApp e Biz-flow juntos para fechar vendas mais rápido e encantar quem compra online.',
    category: 'Vendas', author: 'Biz-flow', content: '', image_url: null,
    read_time_min: 4, published: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPublishedPosts()
      .then(data => { if (data.length > 0) setPosts(data); })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-20 px-6">
      <Seo
        title="Blog | Biz-flow"
        description="Novidades e artigos sobre gestão financeira, faturação digital e crescimento de negócios em Moçambique."
        canonicalPath="/blog"
        breadcrumb={[{ name: 'Blog', url: '/blog' }]}
      />

      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0D47A1] font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar para o Início
        </Link>

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-[#0D47A1] font-bold">Blog</p>
          <h1 className="text-5xl md:text-6xl font-bold font-display mt-4">Insights para crescer com gestão digital.</h1>
          <p className="text-[#6B7280] text-lg mt-4 max-w-2xl mx-auto">Leia artigos com dicas práticas para empreendedores, contadores e gestores que querem resultados rápidos.</p>
        </div>

        {error && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 text-sm mb-8 max-w-xl mx-auto">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            Não foi possível carregar os artigos mais recentes. A mostrar versão offline.
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full text-center py-20 text-slate-400">
              <div className="w-10 h-10 rounded-full border-[3px] border-slate-200 border-t-blue-500 animate-spin mx-auto mb-4" />
              A carregar artigos...
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="rounded-[2rem] bg-white p-10 border border-[#E5E7EB] shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 text-[#0D47A1] mb-4">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-[0.35em] font-bold">{post.category}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-[#6B7280] leading-relaxed mb-8">{post.summary}</p>
                <div className="flex items-center justify-between text-[#6B7280] text-sm font-medium">
                  <span>Leitura rápida</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.read_time_min} min</span>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
