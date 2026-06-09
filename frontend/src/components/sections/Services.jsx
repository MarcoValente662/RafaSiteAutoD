import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { SERVICES, whatsappUrl } from "@/constants/business";

export default function Services() {
  return (
    <section
      id="servicos"
      data-testid="services-section"
      className="py-24 md:py-32 bg-[#080808] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="overline">Serviços & preços</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-light tracking-tight leading-tight mt-5">
              Catálogo completo de
              <br />
              estética automotiva.
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-sm">
            Valores de referência para carros de porte médio. Pickups, SUVs grandes
            e blindados podem ter acréscimo. Solicite seu orçamento exato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              data-testid={`service-card-${s.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className={`service-card md:col-span-${s.span} group`}
              style={{ gridColumn: `span ${s.span} / span ${s.span}` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="img-wrap aspect-[4/3] lg:aspect-auto lg:min-h-[280px]">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 md:p-9 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
                      {s.name}
                    </h3>
                    {s.featured && (
                      <span className="overline whitespace-nowrap">Mais procurado</span>
                    )}
                  </div>
                  <p className="text-sm text-white/60 mt-3 leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="mt-[7px] inline-block w-1 h-1 bg-[#D4AF37]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7 flex items-end justify-between border-t border-white/5 mt-7">
                    <div>
                      <div className="text-[0.65rem] uppercase tracking-[0.22em] text-white/40">
                        A partir de
                      </div>
                      <div className="font-heading text-4xl font-light text-white mt-1">
                        {s.price}
                      </div>
                      <div className="text-xs text-white/40 mt-1">
                        Tempo médio · {s.duration}
                      </div>
                    </div>
                    <a
                      href={whatsappUrl(
                        `Olá! Tenho interesse no serviço de ${s.name}. Pode me passar mais detalhes?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`service-cta-${s.id}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-[#D4AF37] transition-colors"
                    >
                      Agendar
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-xs text-white/40 mt-12 tracking-wide">
          * Valores sujeitos a avaliação presencial. Trabalhamos somente com hora marcada.
        </p>
      </div>
    </section>
  );
}
