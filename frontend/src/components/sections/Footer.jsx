import { BUSINESS } from "@/constants/business";

export default function Footer() {
  return (
    <footer
      data-testid="main-footer"
      className="bg-[#050505] border-t border-white/5 py-14"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="font-heading text-xl flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#D4AF37]" />
            {BUSINESS.name}
          </div>
          <p className="text-white/45 text-xs mt-3 max-w-xs leading-relaxed">
            Estúdio especializado em estética automotiva premium desde {BUSINESS.founded}.
          </p>
        </div>
        <div className="text-xs text-white/45 leading-relaxed">
          <div className="text-white/70 mb-2 text-sm">Contato</div>
          {BUSINESS.address}<br />
          {BUSINESS.city}<br />
          {BUSINESS.phone}
        </div>
        <div className="text-xs text-white/45 leading-relaxed">
          <div className="text-white/70 mb-2 text-sm">Horário</div>
          {BUSINESS.hours}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/35 tracking-wider">
        <span>© {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.</span>
        <span>Site institucional · Estética automotiva premium</span>
      </div>
    </footer>
  );
}
