import { motion } from "framer-motion";

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    cls: "md:col-span-7 aspect-[16/10]",
    cap: "Vitrificação cerâmica · 9H",
  },
  {
    url: "https://images.unsplash.com/photo-1708805282695-ef186db20192?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwzfHxjYXIlMjBwb2xpc2hpbmclMjBhdXRvJTIwZGV0YWlsaW5nJTIwY2xvc2UlMjB1cHxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    cls: "md:col-span-5 aspect-[4/5]",
    cap: "Polimento técnico · 3 etapas",
  },
  {
    url: "https://images.unsplash.com/photo-1732357624591-f2137085659b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    cls: "md:col-span-5 aspect-[4/3]",
    cap: "Higienização interna premium",
  },
  {
    url: "https://images.unsplash.com/photo-1687634366070-c06d3f037154?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    cls: "md:col-span-7 aspect-[16/10]",
    cap: "Revitalização de couro",
  },
  {
    url: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    cls: "md:col-span-12 aspect-[21/9]",
    cap: "Detalhamento completo · acabamento concours",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      data-testid="gallery-section"
      className="py-24 md:py-32 bg-[#080808] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <span className="overline">Portfólio</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-light tracking-tight leading-tight mt-5">
            Resultados que falam
            <br />
            <span className="italic text-[#D4AF37]">por nós</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {IMAGES.map((img, i) => (
            <motion.figure
              key={i}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
              className={`${img.cls} relative overflow-hidden group`}
            >
              <img
                src={img.url}
                alt={img.cap}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-white/0 group-hover:text-white transition-all duration-500">
                {img.cap}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
