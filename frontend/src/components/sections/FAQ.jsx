import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants/business";

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-24 md:py-32 bg-[#080808] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="overline">Dúvidas frequentes</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-light tracking-tight leading-tight mt-5">
            Respostas <br />
            <span className="italic text-[#D4AF37]">diretas</span>.
          </h2>
          <p className="text-white/55 text-sm mt-6 leading-relaxed max-w-xs">
            Não encontrou sua pergunta? Fale conosco no WhatsApp — respondemos em
            minutos durante o horário comercial.
          </p>
        </div>

        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left text-white text-base md:text-lg font-medium hover:text-[#D4AF37] hover:no-underline py-6 [&[data-state=open]]:text-[#D4AF37]"
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i}`}
                  className="text-white/65 text-sm md:text-base leading-relaxed pb-7"
                >
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
