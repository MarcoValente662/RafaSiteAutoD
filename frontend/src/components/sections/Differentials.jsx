import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock, Award } from "lucide-react";
import { DIFFERENTIALS } from "@/constants/business";

const ICONS = { ShieldCheck, Sparkles, Clock, Award };

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      data-testid="differentials-section"
      className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="overline">Por que nós</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-light tracking-tight leading-tight mt-5">
            Padrão concours
            <br />
            <span className="italic text-[#D4AF37]">em cada entrega</span>.
          </h2>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {DIFFERENTIALS.map((d, i) => {
            const Icon = ICONS[d.icon];
            return (
              <motion.div
                key={d.title}
                data-testid={`differential-${d.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-8 md:p-10"
              >
                <div className="w-11 h-11 border border-[#D4AF37]/40 flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.2} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-heading text-xl font-medium mt-6">{d.title}</h3>
                <p className="text-sm text-white/60 mt-3 leading-relaxed">{d.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
