import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants/business";

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      data-testid="testimonials-section"
      className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12"
    >
      <div className="mb-16 max-w-2xl">
        <span className="overline">Quem confia</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-light tracking-tight leading-tight mt-5">
          A palavra de quem
          <br />
          <span className="italic text-[#D4AF37]">já viveu o detalhe</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            data-testid={`testimonial-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="bg-[#0a0a0a] p-9 md:p-11 flex flex-col"
          >
            <span className="font-heading text-6xl text-[#D4AF37] leading-none mb-4">
              “
            </span>
            <blockquote className="text-white/85 text-base leading-relaxed">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 pt-6 border-t border-white/10">
              <div className="text-white text-sm font-medium">{t.name}</div>
              <div className="text-white/50 text-xs mt-1 tracking-wide">{t.car}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
