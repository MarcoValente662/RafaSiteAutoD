import { whatsappUrl } from "@/constants/business";

export default function FloatingWhatsApp() {
  return (
    <a
      data-testid="floating-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar via WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 wa-pulse flex items-center gap-3 group"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span className="hidden md:inline-block bg-black/80 backdrop-blur border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-all">
        Contactar
      </span>
      <span
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg"
        style={{ background: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" width="24" height="24" fill="#050505" aria-hidden="true" className="md:w-[26px] md:h-[26px]">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.7.315-.402.43-1.18 1.376-1.18 2.937 0 1.526.93 3.003 2.05 4.193 1.91 2.218 4.382 3.566 6.745 3.967.617.115 1.218.215 1.834.215.617 0 1.234-.2 1.69-.43.5-.275.99-.815.99-1.39 0-.214-.043-.358-.143-.444-.215-.215-1.575-.872-1.776-.945-.114-.043-.243-.072-.358-.072z"/>
          <path d="M16.04 4C9.952 4 5 8.962 5 15.05c0 2.046.572 4.06 1.668 5.79L5 28l7.32-1.918a11.04 11.04 0 0 0 3.708.643h.012C22.128 26.725 27.08 21.762 27.08 15.674 27.08 8.962 22.128 4 16.04 4zm0 20.5h-.01a9.16 9.16 0 0 1-4.673-1.28l-.336-.2-3.484.915.93-3.396-.22-.35a9.115 9.115 0 0 1-1.402-4.876c0-5.043 4.104-9.147 9.146-9.147 5.043 0 9.147 4.104 9.147 9.147.001 5.042-4.103 9.146-9.098 9.187z"/>
        </svg>
      </span>
    </a>
  );
}
