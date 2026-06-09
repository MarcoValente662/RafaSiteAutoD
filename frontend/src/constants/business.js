// Informações da empresa - edite aqui para personalizar
export const BUSINESS = {
  name: "AutoDetail Pro",
  tagline: "Estética Automotiva Premium",
  city: "São Paulo, SP",
  address: "Rua dos Detalhes, 1200 — Vila Olímpia",
  hours: "Seg a Sáb · 08h às 19h",
  phone: "+55 (11) 99999-9999",
  whatsapp: "5511999999999", // sem símbolos, formato internacional
  whatsappMessage: "Olá! Vim pelo site e gostaria de um orçamento.",
  email: "contato@autodetailpro.com.br",
  instagram: "@autodetailpro",
  founded: "2014",
};

export const whatsappUrl = (msg) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg || BUSINESS.whatsappMessage)}`;

export const SERVICES = [
  {
    id: "lavagem",
    name: "Lavagem Detalhada",
    price: "R$ 150",
    duration: "2h",
    description: "Pré-lavagem com snow foam, descontaminação química e finalização com cera de carnaúba.",
    features: ["Snow foam premium", "Limpeza das caixas de roda", "Secagem por ar comprimido", "Cera de carnaúba"],
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 6,
  },
  {
    id: "polimento",
    name: "Polimento Técnico",
    price: "R$ 600",
    duration: "6h",
    description: "Correção em até 3 etapas para devolver o brilho profundo da pintura e remover microriscos.",
    features: ["Correção de verniz", "Remoção de riscos leves", "Mascaramento completo", "Brilho espelhado"],
    image: "https://images.unsplash.com/photo-1708805282695-ef186db20192?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwzfHxjYXIlMjBwb2xpc2hpbmclMjBhdXRvJTIwZGV0YWlsaW5nJTIwY2xvc2UlMjB1cHxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 6,
  },
  {
    id: "vitrificacao",
    name: "Vitrificação Cerâmica",
    price: "R$ 1.200",
    duration: "2 dias",
    description: "Coating cerâmico 9H com proteção de até 3 anos contra UV, chuva ácida e contaminantes.",
    features: ["Proteção até 3 anos", "Hidrorrepelência extrema", "Resistência UV", "Brilho cristalino"],
    image: "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 12,
    featured: true,
  },
  {
    id: "higienizacao",
    name: "Higienização Interna",
    price: "R$ 350",
    duration: "4h",
    description: "Limpeza profunda de estofados, carpetes, teto e plásticos com oxi-sanitização.",
    features: ["Limpeza de estofados", "Revitalização de plásticos", "Oxi-sanitização", "Limpeza do teto"],
    image: "https://images.unsplash.com/photo-1732357624591-f2137085659b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 7,
  },
  {
    id: "couro",
    name: "Revitalização de Couro",
    price: "R$ 250",
    duration: "3h",
    description: "Limpeza profunda e hidratação premium para preservar o toque original e a cor do couro.",
    features: ["Limpeza profunda", "Hidratação premium", "Toque fosco original", "Proteção UV"],
    image: "https://images.unsplash.com/photo-1687634366070-c06d3f037154?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 5,
  },
  {
    id: "vidros",
    name: "Cristalização de Vidros",
    price: "R$ 100",
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
    quote: "Sempre achei que polimento era tudo igual. Trouxe meu 911 e voltei com ele praticamente novo. Atenção aos detalhes inacreditável.",
  },
  {
    name: "Camila Mendes",
    car: "Range Rover Velar",
    quote: "Vitrificação impecável. Já são oito meses e a água continua escorrendo como no primeiro dia. Vale cada centavo.",
  },
  {
    name: "Lucas Oliveira",
    car: "BMW M3 Competition",
    quote: "Higienização interna devolveu o cheiro de carro novo. Pessoal extremamente técnico e pontual na entrega.",
  },
];

export const FAQS = [
  {
    q: "Quanto tempo dura uma vitrificação cerâmica?",
    a: "Nossa vitrificação tem durabilidade média de 2 a 3 anos, dependendo dos cuidados de manutenção. Recomendamos uma revisão semestral para garantir o melhor desempenho do coating.",
  },
  {
    q: "Vocês atendem com agendamento ou por ordem de chegada?",
    a: "Atendemos exclusivamente com hora marcada. Isso garante o tempo necessário para entregar cada serviço com o padrão que prometemos. Agende pelo WhatsApp.",
  },
  {
    q: "Quanto tempo o carro fica na oficina?",
    a: "Depende do serviço. Lavagem detalhada leva cerca de 2h. Polimento + vitrificação completa pode levar de 1 a 2 dias úteis. Informamos o prazo no orçamento.",
  },
  {
    q: "Posso lavar o carro logo após a vitrificação?",
    a: "Recomendamos aguardar 7 dias para o coating curar completamente. Após esse período, basta uma lavagem por imersão suave a cada 2 ou 3 semanas.",
  },
  {
    q: "Vocês trabalham com carros blindados ou clássicos?",
    a: "Sim. Temos protocolo específico para blindados (cuidado com pinos e vedações) e para clássicos (pintura original, sem máquinas agressivas). Nos avise no agendamento.",
  },
  {
    q: "É possível parcelar?",
    a: "Sim. Aceitamos pix, débito e crédito em até 6x sem juros para serviços a partir de R$ 600. Consulte condições especiais para pacotes.",
  },
];

export const DIFFERENTIALS = [
  { icon: "ShieldCheck", title: "Produtos certificados", text: "Trabalhamos apenas com marcas premium homologadas internacionalmente." },
  { icon: "Sparkles", title: "Acabamento concours", text: "Padrão de detalhes inspirado em concursos de elegância automotiva." },
  { icon: "Clock", title: "Prazo garantido", text: "Entrega no dia combinado ou seu próximo serviço sai com 20% off." },
  { icon: "Award", title: "Mais de 10 anos", text: "Década de experiência cuidando de superesportivos e SUVs de luxo." },
];

export const STATS = [
  { value: "10+", label: "Anos de mercado" },
  { value: "4.200", label: "Carros detalhados" },
  { value: "98%", label: "Clientes recorrentes" },
  { value: "32", label: "Marcas atendidas" },
];
