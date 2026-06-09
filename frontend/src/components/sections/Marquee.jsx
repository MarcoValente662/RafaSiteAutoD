const brands = [
  "Porsche", "Ferrari", "Lamborghini", "BMW M", "Mercedes-AMG", "Audi RS",
  "Range Rover", "Bentley", "Aston Martin", "McLaren", "Maserati", "Tesla",
];

export default function Marquee() {
  return (
    <section
      data-testid="brands-marquee"
      className="border-y border-white/5 bg-[#0a0a0a] py-5 sm:py-7 overflow-hidden"
    >
      <div className="marquee-track">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="font-heading text-lg sm:text-xl md:text-2xl text-white/30 hover:text-[#D4AF37] transition-colors tracking-wide whitespace-nowrap"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
