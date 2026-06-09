import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { BUSINESS, whatsappUrl } from "@/constants/business";

export default function Contact() {
  return (
    <section
      id="contato"
      data-testid="contact-section"
      className="py-28 md:py-40 bg-black relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <span className="overline">Vamos conversar</span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-none mt-5">
              Seu carro merece <br />
              <span className="italic text-[#D4AF37]">o melhor.</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mt-8 max-w-xl">
              Atendimento exclusivamente com hora marcada. Envie uma mensagem
              pelo WhatsApp e nosso especialista retorna em minutos com
              avaliação e orçamento personalizados para o seu veículo.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-cta"
                className="btn-gold"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                Iniciar conversa no WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                data-testid="contact-call-cta"
                className="btn-outline"
              >
                <Phone size={18} strokeWidth={1.5} />
                Ligar agora
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-white/10 space-y-8">
            <Info
              icon={<MapPin size={18} strokeWidth={1.3} />}
              label="Endereço"
              content={
                <>
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.city}
                </>
              }
            />
            <Info
              icon={<Clock size={18} strokeWidth={1.3} />}
              label="Horário"
              content={BUSINESS.hours}
            />
            <Info
              icon={<Phone size={18} strokeWidth={1.3} />}
              label="Telefone"
              content={BUSINESS.phone}
            />
            <Info
              icon={<Mail size={18} strokeWidth={1.3} />}
              label="E-mail"
              content={BUSINESS.email}
            />
            <Info
              icon={<Instagram size={18} strokeWidth={1.3} />}
              label="Instagram"
              content={BUSINESS.instagram}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, content }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.65rem] uppercase tracking-[0.22em] text-white/40">
          {label}
        </div>
        <div className="text-white text-sm mt-1.5 leading-relaxed">{content}</div>
      </div>
    </div>
  );
}
