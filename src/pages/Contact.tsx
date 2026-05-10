import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe } from 'lucide-react';
import Seo from '../components/Seo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Seo
        title="Contato | Biz-flow"
        description="Fale com o suporte Biz-flow, visite nosso escritório em Maputo ou envie uma mensagem pelo WhatsApp."
        canonicalPath="/contato"
        breadcrumb={[{ name: 'Contato', url: '/contato' }]}
      />

      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0D47A1] font-bold mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Voltar para o Início
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#0D47A1] font-bold">Contato</p>
            <h1 className="text-5xl md:text-6xl font-bold font-display mt-4">Precisa de ajuda para crescer com Biz-flow?</h1>
            <p className="text-[#6B7280] text-lg mt-4 max-w-2xl">Nossa equipa em Maputo está pronta para responder a todas as suas dúvidas e ajudar na implementação do sistema na sua empresa.</p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <a href="https://wa.me/258840636794" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] border border-[#E5E7EB] p-8 hover:border-[#1A73E8] transition-all bg-[#F5F7FA]">
                <div className="flex items-center gap-4 mb-4 text-[#0D47A1]">
                  <Phone className="w-6 h-6" />
                  <span className="font-bold">WhatsApp</span>
                </div>
                <p className="text-[#374151]">+258 840 636 794</p>
              </a>
              <a href="tel:+258840636797" className="rounded-[2rem] border border-[#E5E7EB] p-8 hover:border-[#1A73E8] transition-all bg-[#F5F7FA]">
                <div className="flex items-center gap-4 mb-4 text-[#0D47A1]">
                  <Phone className="w-6 h-6" />
                  <span className="font-bold">Telefone</span>
                </div>
                <p className="text-[#374151]">+258 840 636 797</p>
              </a>
              <a href="mailto:contato@biz-flow.cloud" className="rounded-[2rem] border border-[#E5E7EB] p-8 hover:border-[#1A73E8] transition-all bg-[#F5F7FA]">
                <div className="flex items-center gap-4 mb-4 text-[#0D47A1]">
                  <Mail className="w-6 h-6" />
                  <span className="font-bold">Email</span>
                </div>
                <p className="text-[#374151]">contato@biz-flow.cloud</p>
              </a>
              <div className="rounded-[2rem] border border-[#E5E7EB] p-8 bg-[#F5F7FA]">
                <div className="flex items-center gap-4 mb-4 text-[#0D47A1]">
                  <MapPin className="w-6 h-6" />
                  <span className="font-bold">Escritório</span>
                </div>
                <p className="text-[#374151]">Av. Julius Nyerere 145, Maputo, Moçambique</p>
                <p className="text-[#6B7280] mt-4 text-sm">GPS: -25.9658, 32.5831</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E5E7EB] overflow-hidden shadow-sm">
            <iframe
              title="Mapa do escritório Biz-flow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.874111017048!2d32.5831!3d-25.9658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef747050b43625d%3A0x2c2a4c545b2620e4!2sAv.%20Julius%20Nyerere%20145%2C%20Maputo%2C%20Mo%C3%A7ambique!5e0!3m2!1spt-BR!2sus!4v1700000000000"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
