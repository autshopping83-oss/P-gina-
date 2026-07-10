// src/components/NewsletterForm.tsx
import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { subscribeNewsletter } from '../services/contactService';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Informe o seu email.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');

    try {
      await subscribeNewsletter({ email: email.trim() });
      setStatus('success');
      setEmail('');
      setName('');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao subscrever.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 text-green-600 font-medium"
      >
        <CheckCircle2 className="w-5 h-5" />
        Inscrição confirmada! Bem-vindo(a) à newsletter Biz-flow.
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 text-sm w-full">
          <AlertCircle className="w-4 h-4" /> {errorMsg}
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu melhor email"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
        <button type="submit" disabled={status === 'submitting'}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl transition cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'submitting' ? 'Aguarde...' : 'Inscrever'}
        </button>
      </div>
    </form>
  );
};
