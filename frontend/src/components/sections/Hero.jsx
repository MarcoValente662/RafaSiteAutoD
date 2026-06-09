import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { BUSINESS, whatsappUrl } from "@/constants/business";

const HERO_IMG =
  "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={HERO_IMG}
        alt="Carro esportivo escuro em iluminação dramática"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <span className="overline">{BUSINESS.tagline}</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-none mt-6 mb-8">
              Cada detalhe,
              <br />
              <span className="italic font-extralight text-[#D4AF37]">obsessão</span>.
              <br />
              Cada carro, uma joia.
            </h1>
            <p className="max-w-xl text-white/70 text-base md:text-lg leading-relaxed">
              Estúdio de estética automotiva especializado em superesportivos, SUVs
              de luxo e clássicos. Polimento, vitrificação cerâmica e cuidado
              artesanal — do verniz ao último ponto do couro.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-whatsapp"
                className="btn-gold"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                Solicitar orçamento
              </a>
              <a href="#servicos" data-testid="hero-cta-services" className="btn-outline">
                Ver serviços
                <ArrowDown size={18} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-white/10"
          >
            <div className="space-y-6">
              <div>
                <div className="overline">Onde nos encontrar</div>
                <p className="text-white text-sm mt-2 leading-relaxed">
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.city}
                </p>
              </div>
              <div className="gold-line" />
              <div>
                <div className="overline">Horário</div>
                <p className="text-white text-sm mt-2">{BUSINESS.hours}</p>
              </div>
              <div className="gold-line" />
              <div>
                <div className="overline">Desde</div>
                <p className="font-heading text-3xl font-light mt-2">{BUSINESS.founded}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase z-10 hidden md:block">
        Role para descobrir
      </div>
    </section>
  );
}
