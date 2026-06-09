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
