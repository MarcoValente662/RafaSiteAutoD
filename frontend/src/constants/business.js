// Informações da empresa - edite aqui para personalizar
export const BUSINESS = {
  name: "AutoDetail Pro",
  tagline: "Estética Automóvel Premium",
  city: "Lisboa, Portugal",
  address: "Rua dos Detalhes, 1200 — Parque das Nações",
  hours: "Seg. a Sáb. · 09h00 às 19h00",
  phone: "+351 910 000 000",
  whatsapp: "351910000000", // sem símbolos, formato internacional
  whatsappMessage: "Olá! Vim através do site e gostaria de pedir um orçamento.",
  email: "geral@autodetailpro.pt",
  instagram: "@autodetailpro",
  founded: "2014",
};

export const whatsappUrl = (msg) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg || BUSINESS.whatsappMessage)}`;

export const SERVICES = [
  {
    id: "lavagem",
    name: "Lavagem Detalhada",
    price: "€ 45",
    duration: "2h",
    description: "Pré-lavagem com snow foam, descontaminação química e finalização com cera de carnaúba.",
    features: ["Snow foam premium", "Limpeza das cavas das rodas", "Secagem por ar comprimido", "Cera de carnaúba"],
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 6,
  },
  {
    id: "polimento",
    name: "Polimento Técnico",
    price: "€ 180",
    duration: "6h",
    description: "Correção em até 3 etapas para devolver o brilho profundo à pintura e remover microriscos.",
    features: ["Correção de verniz", "Remoção de riscos ligeiros", "Mascaramento completo", "Brilho espelhado"],
    image: "https://images.unsplash.com/photo-1708805282695-ef186db20192?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwzfHxjYXIlMjBwb2xpc2hpbmclMjBhdXRvJTIwZGV0YWlsaW5nJTIwY2xvc2UlMjB1cHxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 6,
  },
  {
    id: "vitrificacao",
    name: "Vitrificação Cerâmica",
    price: "€ 380",
    duration: "2 dias",
    description: "Coating cerâmico 9H com proteção até 3 anos contra UV, chuva ácida e contaminantes.",
    features: ["Proteção até 3 anos", "Hidrorrepelência extrema", "Resistência UV", "Brilho cristalino"],
    image: "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 12,
    featured: true,
  },
  {
    id: "higienizacao",
    name: "Higienização Interior",
    price: "€ 110",
    duration: "4h",
    description: "Limpeza profunda de estofos, alcatifa, tecto e plásticos com oxi-sanitização.",
    features: ["Limpeza de estofos", "Revitalização de plásticos", "Oxi-sanitização", "Limpeza do tecto"],
    image: "https://images.unsplash.com/photo-1732357624591-f2137085659b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 7,
  },
  {
    id: "couro",
    name: "Revitalização de Pele",
    price: "€ 80",
    duration: "3h",
    description: "Limpeza profunda e hidratação premium para preservar o toque original e a cor da pele.",
    features: ["Limpeza profunda", "Hidratação premium", "Toque mate original", "Proteção UV"],
    image: "https://images.unsplash.com/photo-1687634366070-c06d3f037154?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 5,
  },
  {
    id: "vidros",
    name: "Cristalização de Vidros",
    price: "€ 35",
    duration: "1h",
    description: "Tratamento hidrofóbico que repele a água e melhora drasticamente a visibilidade em dias de chuva.",
    features: ["Remoção de chuva ácida", "Repelência de água", "Maior visibilidade", "Mais segurança"],
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 12,
  },
];

export const TESTIMONIALS = [
  {
    name: "Rafael Andrade",
    car: "Porsche 911 Carrera",
    quote: "Sempre achei que polimento era tudo igual. Trouxe o meu 911 e levei-o praticamente como novo. A atenção ao detalhe é inacreditável.",
  },
  {
    name: "Camila Mendes",
    car: "Range Rover Velar",
    quote: "Vitrificação impecável. Já são oito meses e a água continua a escorrer como no primeiro dia. Vale cada cêntimo.",
  },
  {
    name: "Lucas Oliveira",
    car: "BMW M3 Competition",
    quote: "A higienização interior devolveu o cheiro a carro novo. Equipa extremamente técnica e pontual na entrega.",
  },
];

export const FAQS = [
  {
    q: "Quanto tempo dura uma vitrificação cerâmica?",
    a: "A nossa vitrificação tem uma durabilidade média de 2 a 3 anos, dependendo dos cuidados de manutenção. Recomendamos uma revisão semestral para garantir o melhor desempenho do coating.",
  },
  {
    q: "Trabalham com marcação ou por ordem de chegada?",
    a: "Trabalhamos exclusivamente com marcação prévia. Isso garante o tempo necessário para entregar cada serviço com o padrão que prometemos. Marque pelo WhatsApp.",
  },
  {
    q: "Quanto tempo é que o carro fica nas instalações?",
    a: "Depende do serviço. A lavagem detalhada demora cerca de 2h. O polimento com vitrificação completa pode demorar de 1 a 2 dias úteis. Indicamos sempre o prazo no orçamento.",
  },
  {
    q: "Posso lavar o carro logo após a vitrificação?",
    a: "Recomendamos aguardar 7 dias para que o coating cure por completo. Após esse período, basta uma lavagem por imersão suave a cada 2 ou 3 semanas.",
  },
  {
    q: "Trabalham com carros blindados ou clássicos?",
    a: "Sim. Temos protocolo específico para blindados (cuidado com pinos e vedações) e para clássicos (pintura original, sem máquinas agressivas). Indique-nos na marcação.",
  },
  {
    q: "É possível pagar em prestações?",
    a: "Sim. Aceitamos MB Way, multibanco e cartão de crédito até 6x sem juros para serviços a partir de € 180. Consulte as condições especiais para pacotes.",
  },
];

export const DIFFERENTIALS = [
  { icon: "ShieldCheck", title: "Produtos certificados", text: "Trabalhamos apenas com marcas premium homologadas internacionalmente." },
  { icon: "Sparkles", title: "Acabamento concours", text: "Padrão de detalhe inspirado em concursos de elegância automóvel." },
  { icon: "Clock", title: "Prazo garantido", text: "Entregamos na data combinada ou o próximo serviço sai com 20% de desconto." },
  { icon: "Award", title: "Mais de 10 anos", text: "Década de experiência a cuidar de superdesportivos e SUVs de luxo." },
];

export const STATS = [
  { value: "10+", label: "Anos de mercado" },
  { value: "4.200", label: "Carros tratados" },
  { value: "98%", label: "Clientes recorrentes" },
  { value: "32", label: "Marcas atendidas" },
];
