// src/pages/DemoEditor.tsx
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Download, UserPlus, FileText } from 'lucide-react';
import Seo from '../components/Seo';

type DocType = 'FACTURA' | 'RECIBO' | 'FACTURA_RECIBO' | 'ORCAMENTO';

interface LineItem {
  id: string;
  descricao: string;
  quantidade: number;
  preco: number;
  total: number;
}

const gerarId = () => Math.random().toString(36).substr(2, 9);

const calcularTotal = (itens: LineItem[]) =>
  itens.reduce((s, i) => s + i.quantidade * i.preco, 0);

export const DemoEditor = () => {
  const [tipo, setTipo] = useState<DocType>('FACTURA');
  const [cliente, setCliente] = useState('');
  const [itens, setItens] = useState<LineItem[]>([
    { id: gerarId(), descricao: 'Consultoria de Marketing Digital', quantidade: 1, preco: 15000, total: 15000 },
  ]);
  const [novaDesc, setNovaDesc] = useState('');
  const [novoQtd, setNovoQtd] = useState(1);
  const [novoPreco, setNovoPreco] = useState(0);
  const [gerado, setGerado] = useState(false);

  const adicionarItem = () => {
    if (!novaDesc.trim() || novoPreco <= 0) return;
    setItens(p => [...p, { id: gerarId(), descricao: novaDesc, quantidade: novoQtd, preco: novoPreco, total: novoQtd * novoPreco }]);
    setNovaDesc('');
    setNovoQtd(1);
    setNovoPreco(0);
  };

  const removerItem = (id: string) => setItens(p => p.filter(i => i.id !== id));

  const total = calcularTotal(itens);
  const iva = total * 0.16;
  const totalGeral = total + iva;

  const handleGerar = (e: FormEvent) => {
    e.preventDefault();
    setGerado(true);
  };

  const nomeTipo = {
    FACTURA: 'Factura',
    RECIBO: 'Recibo',
    FACTURA_RECIBO: 'Factura-Recibo',
    ORCAMENTO: 'Orçamento',
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <Seo
        title="Testar Editor | Biz-flow"
        description="Experimente o editor de facturas gratuito do Biz-flow. Crie facturas, recibos e orçamentos sem necessidade de registo."
        canonicalPath="/testar"
        breadcrumb={[{ name: 'Testar Editor', url: '/testar' }]}
      />

      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold mb-6 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar ao Site
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Editor de {nomeTipo[tipo]}</h1>
          <p className="text-slate-500">Preencha os dados abaixo para gerar o seu documento. Nada é guardado — é apenas um teste.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleGerar} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
            {/* Tipo Documento */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Documento</label>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(nomeTipo) as [DocType, string][]).map(([key, label]) => (
                  <button key={key} type="button" onClick={() => { setTipo(key); setGerado(false); }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${tipo === key ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cliente */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Cliente</label>
              <input value={cliente} onChange={e => setCliente(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="Ex: Maria Silva, Lda" />
            </div>

            {/* Itens */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Itens / Serviços</label>
              <div className="space-y-2 max-h-48 overflow-y-auto mb-3">
                {itens.map(item => (
                  <div key={item.id} className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
                    <span className="flex-1 truncate font-medium">{item.descricao}</span>
                    <span className="text-slate-500 w-12 text-right">{item.quantidade}x</span>
                    <span className="text-slate-500 w-20 text-right">{item.preco.toLocaleString()} MT</span>
                    <button type="button" onClick={() => removerItem(item.id)}
                      className="p-1 text-red-500 hover:bg-red-50 rounded transition cursor-pointer">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 items-end">
                <div className="flex-1">
                  <input value={novaDesc} onChange={e => setNovaDesc(e.target.value)} placeholder="Descrição"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
                <div className="w-16">
                  <input type="number" min={1} value={novoQtd} onChange={e => setNovoQtd(Number(e.target.value))}
                    className="w-full px-2 py-2 rounded-lg border border-slate-300 text-sm text-center focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
                <div className="w-24">
                  <input type="number" min={0} value={novoPreco} onChange={e => setNovoPreco(Number(e.target.value))}
                    className="w-full px-2 py-2 rounded-lg border border-slate-300 text-sm text-right focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
                <button type="button" onClick={adicionarItem}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button type="submit"
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Gerar {nomeTipo[tipo]}
              </button>
              <Link to="https://biz-flow.cloud" target="_blank" rel="noopener noreferrer"
                className="py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-2">
                <UserPlus className="w-4 h-4" /> Criar Conta
              </Link>
            </div>
          </form>

          {/* Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            {gerado ? (
              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                  <div>
                    <img src="/logo.svg" alt="Biz-flow" className="h-8 mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{nomeTipo[tipo]}</p>
                    <p className="text-sm text-slate-500">Nº {tipo.substring(0, 3)}-{String(Math.floor(Math.random() * 9999)).padStart(4, '0')}</p>
                  </div>
                  <p className="text-sm text-slate-500">{new Date().toLocaleDateString('pt-PT')}</p>
                </div>
                {cliente && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Cliente</p>
                    <p className="font-medium">{cliente}</p>
                  </div>
                )}
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="text-left py-2 font-medium">Descrição</th>
                      <th className="text-right py-2 font-medium">Qtd</th>
                      <th className="text-right py-2 font-medium">Preço</th>
                      <th className="text-right py-2 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itens.map(item => (
                      <tr key={item.id} className="border-b border-slate-100">
                        <td className="py-2">{item.descricao}</td>
                        <td className="text-right py-2">{item.quantidade}</td>
                        <td className="text-right py-2">{item.preco.toLocaleString()} MT</td>
                        <td className="text-right py-2 font-medium">{(item.quantidade * item.preco).toLocaleString()} MT</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="space-y-1 text-right text-sm border-t border-slate-200 pt-4">
                  <p>Subtotal: <span className="font-bold">{total.toLocaleString()} MT</span></p>
                  <p>IVA (16%): <span className="font-bold">{iva.toLocaleString()} MT</span></p>
                  <p className="text-lg font-bold text-blue-600">Total: {totalGeral.toLocaleString()} MT</p>
                </div>
                <div className="pt-4 flex gap-3">
                  <button onClick={() => window.print()}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl font-medium text-sm transition cursor-pointer">
                    Imprimir
                  </button>
                  <Link to="https://biz-flow.cloud" target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium text-sm transition cursor-pointer text-center flex items-center justify-center gap-2">
                    <UserPlus className="w-4 h-4" /> Criar Conta Gratuita
                  </Link>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 py-20">
                <FileText className="w-20 h-20 mb-6 text-slate-300" />
                <p className="text-lg font-medium text-slate-500 mb-2">Pré-visualização</p>
                <p className="text-sm text-center">Preencha o formulário e clique em "Gerar"<br />para ver o documento aqui.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <p className="text-amber-800 font-bold text-lg mb-2">Gostou do editor?</p>
          <p className="text-amber-700 mb-4">Crie uma conta gratuita para guardar os seus documentos, gerir clientes e emitir facturas ilimitadas.</p>
          <Link to="https://biz-flow.cloud" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition">
            <UserPlus className="w-5 h-5" /> Criar Conta Gratuita
          </Link>
        </div>
      </div>
    </div>
  );
};
