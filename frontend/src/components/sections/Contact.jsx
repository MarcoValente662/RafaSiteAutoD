import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { BUSINESS, whatsappUrl } from "@/constants/business";

export default function Contact() {
  return (
    <section
      id="contato"
      data-testid="contact-section"
      className="py-20 md:py-40 bg-black relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
          <div className="lg:col-span-7">
            <span className="overline">Vamos conversar</span>
            <h2 className="font-heading text-[2.4rem] sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.05] mt-4 sm:mt-5">
              O seu carro merece <br />
              <span className="italic text-[#D4AF37]">o melhor.</span>
            </h2>
            <p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed mt-6 sm:mt-8 max-w-xl">
              Atendimento exclusivamente com marcação prévia. Envie-nos uma
              mensagem pelo WhatsApp e o nosso especialista responde em
              minutos com avaliação e orçamento personalizados para a sua
              viatura.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-cta"
                className="btn-gold w-full sm:w-auto"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                Contactar
              </a>
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                data-testid="contact-call-cta"
                className="btn-outline w-full sm:w-auto"
              >
                <Phone size={18} strokeWidth={1.5} />
                Ligar agora
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-white/10 space-y-6 sm:space-y-8">
            <Info
              icon={<MapPin size={18} strokeWidth={1.3} />}
              label="Local"
              content={
                <>
                  {BUSINESS.address}
                  {/* <br />
                  {BUSINESS.city} */}
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
              content={
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="hover:text-[#D4AF37] transition-colors break-all">
                  {BUSINESS.phone}
                </a>
              }
            />
            <Info
              icon={<Mail size={18} strokeWidth={1.3} />}
              label="E-mail"
              content={
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-[#D4AF37] transition-colors break-all">
                  {BUSINESS.email}
                </a>
              }
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
