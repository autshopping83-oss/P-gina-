import React from 'react';
import { ArrowLeft, Trash2, MessageSquare, Smartphone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Seo
        title="Eliminar Conta - Biz-flow"
        description="Página para eliminar sua conta na plataforma Biz-flow. Siga os passos para remover permanentemente sua conta e dados."
        canonicalPath="/delete-account"
        breadcrumb={[{ name: 'Eliminar Conta', url: '/delete-account' }]}
      />
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Voltar para o Início
        </Link>
        
        <div className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8 md:p-16 text-center space-y-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <Trash2 className="text-red-600 w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900">Eliminar Conta</h1>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed">
              Para eliminar a sua conta, por favor contacte a nossa linha de apoio. A sua conta e todos os dados associados serão eliminados permanentemente dentro de <span className="font-bold text-red-600">12 horas</span> após o seu pedido.
            </p>
            
            <div className="flex items-center justify-center gap-3 text-slate-500 font-medium">
              <Clock className="w-5 h-5 text-emerald-500" />
              Processamento rápido em até 12h
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <a 
              href="https://wa.me/258840636794" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-500 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <MessageSquare className="text-emerald-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</div>
                <div className="text-lg font-bold text-slate-900">+258 840 636 794</div>
              </div>
            </a>

            <a 
              href="tel:+258840636797" 
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-500 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Smartphone className="text-blue-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Linha de Apoio</div>
                <div className="text-lg font-bold text-slate-900">+258 840 636 797</div>
              </div>
            </a>
          </div>

          <p className="text-slate-400 text-sm pt-8">
            Ao solicitar a eliminação, todos os seus documentos, clientes e histórico financeiro serão removidos de forma irreversível.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
