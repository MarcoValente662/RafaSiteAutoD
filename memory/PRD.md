# AutoDetail Pro — Marketing Site

## Original Problem Statement
"preciso de um site que vai ser usado para expor informações e preçes apenas de uma empresa que faz autodetailing nos carros, ou seja vai ser utilizado para visualizar serviços e informaçoes"

## User Choices
- Nome: placeholder "AutoDetail Pro" (editável em `/app/frontend/src/constants/business.js`)
- Serviços: padrão (lavagem, polimento, vitrificação, higienização, couro, vidros) com preços de exemplo
- Contato: apenas WhatsApp (sem formulário funcional)
- Estilo: escuro premium (preto/dourado)
- Idioma: **Português de Portugal (pt-PT)**
- Moeda: **Euros (€)**

## Architecture
- Frontend SPA (React + Tailwind + Framer Motion + Shadcn Accordion)
- Sem rotas custom de backend (apenas template `/api/`)
- Tudo é single-page com âncoras (#sobre, #servicos, #galeria, #depoimentos, #faq, #contato)
- Conteúdo centralizado em `/app/frontend/src/constants/business.js`

## What's Been Implemented (Dec 2025)
- Navbar sticky com glassmorphism + menu mobile responsivo
- Hero cinematográfico com CTA "Contactar" e dados da loja
- Marquee de marcas atendidas
- Seção Sobre + estatísticas (10+ anos, 4.200 carros, etc.)
- Catálogo de 6 serviços em bento grid asimétrico com preços em €, features, duração média e CTA "Contactar" pré-preenchido por serviço
- Seção de diferenciais com ícones lucide
- Galeria masonry com 5 imagens automotivas
- Depoimentos (3 cards com aspas grandes douradas)
- FAQ usando Shadcn Accordion (6 perguntas em pt-PT)
- Seção de contacto com morada, horário, telefone, e-mail, instagram
- Footer minimalista
- Botão flutuante "Contactar" com pulsação verde
- SEO básico (title pt-PT, meta description, lang="pt-PT")
- **Atualização Dez 2025: site agora em Português de Portugal, preços em € (Euros), CTAs renomeados para "Contactar"**

## Mobile Responsiveness Pass (Jan 2026)
- Corrigido bug crítico CSS: `.btn-gold`/`.btn-outline` movidos para `@layer components` para que utilitários Tailwind como `hidden` consigam sobrepor (antes o botão "Contactar" da navbar aparecia indevidamente em telemóvel)
- Tipografia responsiva: H1/H2 com `text-[2rem]/[2.4rem]` em <640px, `sm:text-5xl/6xl` em ≥640px (evita texto demasiado grande em ecrãs pequenos)
- Cards de serviço: forçados a `grid-column: 1 / -1` em <768px para corrigir layout quebrado por causa do `style.gridColumn` inline (cada serviço ocupa agora largura total no telemóvel)
- Padding lateral reduzido em mobile: `px-4 sm:px-6 md:px-12` em todas as secções
- Padding vertical reduzido em mobile: `py-20 md:py-32`
- Botões empilham em coluna no mobile (`flex-col sm:flex-row`) com `w-full sm:w-auto` para tap targets confortáveis
- Logo da navbar com `whitespace-nowrap` e tamanho responsivo (`text-lg sm:text-xl`); navbar mais baixa em mobile (`h-16 md:h-20`)
- Marquee com `gap: 2.5rem` em mobile (era 4rem) e texto mais pequeno
- FAB WhatsApp: tamanho menor em mobile (`w-12 h-12 md:w-14 md:h-14`), `bottom-4 right-4` e `safe-area-inset-bottom` para iPhone
- Galeria: legendas visíveis sempre em mobile (não dependem de hover) com gradiente bottom-up
- Telefone e e-mail no Contact agora clicáveis (`tel:` / `mailto:`)
- Adicionado `scroll-padding-top: 80px` para anchor links não ficarem por baixo da navbar sticky
- Cap `img { max-width: 100%; height: auto }` e `-webkit-text-size-adjust: 100%` para prevenir overflow em iOS

## Next Action Items
- Substituir o placeholder `BUSINESS` em `/app/frontend/src/constants/business.js` pelo nome, endereço, telefone e número de WhatsApp REAIS da empresa
- Trocar imagens da galeria por fotos reais antes/depois dos próprios trabalhos da empresa
- (Opcional P1) Adicionar página de blog ou seção de "antes & depois" com slider comparativo
- (Opcional P1) Integrar Google Maps embed na seção de contato
- (Opcional P2) Tracking de cliques no WhatsApp (Google Analytics / Meta Pixel) para medir conversões
- (Opcional P2) Versão internacional (PT/EN) caso atenda turistas

## Backlog
- P0: nenhum bloqueante
- P1: galeria com fotos reais; mapa Google; reviews integrados (Google Business)
- P2: blog/conteúdo SEO; tracking de conversões; multilíngue
