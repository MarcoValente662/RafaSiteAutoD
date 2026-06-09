import { motion } from "framer-motion";
import { STATS } from "@/constants/business";

export default function About() {
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <span className="overline">Sobre nós</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-light tracking-tight leading-tight mt-5">
            Um estúdio, não <br />
            <span className="italic text-[#D4AF37]">uma lavagem rápida</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Há mais de uma década que transformamos a forma como os apaixonados
            por automóveis cuidam dos seus carros. Aqui, cada viatura é tratada
            como uma peça única: análise de pintura sob luz LED de inspeção,
            escolha milimétrica do composto certo e acabamento feito à mão por
            profissionais certificados.
          </p>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mt-6">
            Não fazemos volume. Fazemos detalhe — e é a única coisa que importa
            quando o assunto é preservar o seu carro.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10">
            {STATS.map((s) => (
              <div key={s.label} data-testid={`stat-${s.label}`}>
                <div className="font-heading text-4xl md:text-5xl font-light text-white">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/50 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
