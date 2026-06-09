// Informações da empresa - edite aqui para personalizar
export const BUSINESS = {
  name: "AutoDetail Pro",
  tagline: "Estética Automóvel Premium",
  city: "Lisboa, Portugal",
  address: "Rua dos Detalhes, 1200 — Parque das Nações",
  hours: "Seg. a Sáb. · 09h00 às 22h00",
  phone: "+351 962 737 604",
  whatsapp: "351962737604", // sem símbolos, formato internacional
  whatsappMessage: "Olá! Vim através do site e gostaria de pedir um orçamento.",
  email: "geral@",
  instagram: "@novelux.auto",
  founded: "2026",
};

export const whatsappUrl = (msg) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg || BUSINESS.whatsappMessage)}`;

export const SERVICES = [
  {
    id: "limpeza-interior",
    name: "Limpeza Interior",
    price: "Desde € 80",
    duration: "Até 3h",
    description: "Aspiração profunda e limpeza detalhada do habitáculo, painéis e estofos, para devolver o conforto original ao seu veículo.",
    features: [
      "Aspiração completa do interior", 
      "Limpeza e condicionamento de couro", 
      "Lavagem e extração de tapetes", 
      "Limpeza de painéis e plásticos"
    ],
    image: "https://images.unsplash.com/photo-1732357624591-f2137085659b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 6,
  },
  {
    id: "lavagem-externa",
    name: "Lavagem Externa à Mão",
    price: "Desde € 70",
    duration: "Até 2h30",
    description: "Lavagem segura com descontaminação química profunda, remoção de impurezas e aplicação de selante para um acabamento brilhante e protegido.",
    features: [
      "Lavagem com descontaminação", 
      "Remoção de alcatrão e ferro", 
      "Secagem segura a ar e microfibra", 
      "Aplicação de selante em spray"
    ],
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 6,
  },
  {
    id: "combo-completo",
    name: "Combo Completo",
    price: "Desde € 135",
    duration: "Até 5h",
    description: "A junção perfeita da Limpeza Interior com a Lavagem Externa à Mão. A escolha ideal para uma renovação profunda do seu veículo com poupança combinada.",
    features: [
      "Serviço de Limpeza Interior completo", 
      "Lavagem Externa à Mão detalhada", 
      "Atenção máxima a todos os pormenores", 
      "Melhor relação custo-benefício"
    ],
    image: "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
    span: 12,
    featured: true,
  },
  // {
  //   id: "higienizacao",
  //   name: "Higienização Interior",
  //   price: "€ 110",
  //   duration: "4h",
  //   description: "Limpeza profunda de estofos, alcatifa, tecto e plásticos com oxi-sanitização.",
  //   features: ["Limpeza de estofos", "Revitalização de plásticos", "Oxi-sanitização", "Limpeza do tecto"],
  //   image: "https://images.unsplash.com/photo-1732357624591-f2137085659b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
  //   span: 7,
  // },
  // {
  //   id: "couro",
  //   name: "Revitalização de Pele",
  //   price: "€ 80",
  //   duration: "3h",
  //   description: "Limpeza profunda e hidratação premium para preservar o toque original e a cor da pele.",
  //   features: ["Limpeza profunda", "Hidratação premium", "Toque mate original", "Proteção UV"],
  //   image: "https://images.unsplash.com/photo-1687634366070-c06d3f037154?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
  //   span: 5,
  // },
  // {
  //   id: "vidros",
  //   name: "Cristalização de Vidros",
  //   price: "€ 35",
  //   duration: "1h",
  //   description: "Tratamento hidrofóbico que repele a água e melhora drasticamente a visibilidade em dias de chuva.",
  //   features: ["Remoção de chuva ácida", "Repelência de água", "Maior visibilidade", "Mais segurança"],
  //   image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwc3BvcnRzJTIwY2FyJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwwfHx8fDE3ODA5OTcyNDZ8MA&ixlib=rb-4.1.0&q=85",
  //   span: 12,
  // },
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
    a: "A nossa vitrificação tem uma durabilidade média de 1 a 2 anos, dependendo dos cuidados de manutenção. Recomendamos uma revisão semestral para garantir o melhor desempenho do coating.",
  },
  {
    q: "Trabalham com marcação ou por ordem de chegada?",
    a: "Trabalhamos exclusivamente com marcação prévia e serviço ao domicílio. A nossa equipa desloca-se até à sua casa ou garagem com todo o equipamento necessário, garantindo um atendimento VIP sem que tenha de sair de casa."
  },
  {
    q: "Quanto tempo demora o serviço?",
    a: "O tempo de execução depende sempre do estado atual do veículo e do tratamento escolhido. Contacte-nos pelo WhatsApp com o modelo do seu carro e teremos todo o gosto em dar-lhe uma estimativa exata para o seu projeto."
  },
  {
    q: "Posso lavar o carro logo após a vitrificação?",
    a: "Depois do período de cura e absorção (cerca de 7 dias), sim, à vontade. Durante a primeira semana, o revestimento cerâmico ainda se está a fixar ao verniz. Após essa fase, a lavagem torna-se muito mais fácil, bastando uma manutenção suave."
  },
  {
    q: "Trabalham com carros blindados ou clássicos?",
    a: "Sim. Indique-nos na marcação.",
  },
  // {
  //   q: "É possível pagar em prestações?",
  //   a: "Sim. Aceitamos MB Way, multibanco e cartão de crédito até 6x sem juros para serviços a partir de € 180. Consulte as condições especiais para pacotes.",
  // },
];

export const DIFFERENTIALS = [
  { icon: "ShieldCheck", title: "Produtos certificados", text: "Trabalhamos apenas com marcas premium homologadas internacionalmente." },
  { icon: "Sparkles", title: "Acabamento concours", text: "Padrão de detalhe inspirado em concursos de elegância automóvel." },
  { icon: "Clock", title: "Processo Transparente", text: "Mantemos a comunicação aberta durante todo o processo, respeitando o tempo que a verdadeira arte automóvel exige." },
  { icon: "Award", title: "Dedicação Exclusiva", text: "Nascemos da exigência extrema. Tratamos cada projeto como uma verdadeira obra de arte automóvel." },
];

export const STATS = [
  { value: "Novo", label: "No Mercado" },
  { value: "2", label: "Carros tratados" },
  //{ value: "98%", label: "Clientes recorrentes" },
  //{ value: "32", label: "Marcas atendidas" },
];
