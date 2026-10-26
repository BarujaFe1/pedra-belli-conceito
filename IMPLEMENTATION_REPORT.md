# IMPLEMENTATION_REPORT — Pedra Belli Marmoraria (conceito comercial demo)

Data: 2026-09-03 · Projeto: `vercel-sites/pedra-belli-conceito` · Stack: Next.js 16.3.4 + React 19 + TS + Tailwind 4 (App Router, rota `/` estática)

## O que foi feito
- Landing page / catálogo visual premium em PT-BR, mobile-first, com as 8 seções pedidas: hero (`Pedras que definem o espaço.` + CTA `Solicitar orçamento`), aplicações (cozinha, banheiro, área gourmet, escadas, revestimentos), catálogo conceitual (mármore, granito, quartzo, quartzito, lâminas ultracompactas), acabamentos, como pedir orçamento (foto/planta → medidas → material), galeria conceitual, por que a especificação importa (estética/manutenção/uso, sem absolutos), CTA final.
- Direção visual material library + editorial: travertino `#E8E0D3`, off-white `#FAF8F4`, carvão `#1C1B19`, granito `#2E2D2B`, bronze discreto `#9A7B4F`; tipografia Fraunces + Inter; sem glassmorphism/WebGL/animação pesada.
- CTA em **modo demo** (decisão confirmada pelo solicitante): nenhum link `wa.me`/`api.whatsapp` ativo; painel `#orcamento` com modelo de mensagem copiável + passos de ativação. Ativação futura = validar número no Google Business/Maps → `WHATSAPP_NUMBER` em `lib/site.ts` → redeploy.
- Guardas demo: `robots index:false follow:false` + `robots.txt disallow /`; nenhum schema LocalBusiness/ProfessionalService; wordmark tipográfico (sem logo copiado); rodapé declara conceito não oficial; galeria/catálogo selados "imagem conceitual".
- Visuais: SVG procedurais gerados localmente (`components/stone.tsx`, 15 variantes). O solicitante optou por "imagens geradas"; sem ferramenta de geração fotográfica neste ambiente, o executado foi o equivalente honesto em vetor — registrado aqui, e a troca por fotos reais está preparada (`public/fotos-reais/README.md`, prioridade às fotos reais quando chegarem).
- Sem backend/auth/CMS/banco, conforme regra.

## Fontes revalidadas (web, início da execução)
- Razão social, fantasia, CNPJ 57.264.679/0001-43, ativa desde 12/09/2024, CNAEs 4744006/2391502/2391503/4330405 — Casa dos Dados, CNPJá, BaseCNPJ, CadastroEmpresa.
- Endereço Rua Antônio de Almeida Leite, 186 — Vila Prado, São Carlos/SP — recorrente em agregadores + post próprio do Instagram (jan/2025).
- Materiais mármore/granito/quartzo/quartzito/lâminas ultracompactas — texto do próprio Facebook do negócio.

## Dados omitidos por incerteza (não aparecem como fato na página)
- Telefones/WhatsApp: `(16) 3372-6182` só em agregador; `(16) 99717-8071` auto-publicado no Instagram mas **não** revalidado no Google Business/Maps; `(19) 99**` mascarado. → CTA demo, zero `wa.me`.
- Horários, anos de tradição, nº de obras/clientes, avaliações, premiações, marcas/parceiros, porcelanato (só "sob consulta"), meia-esquadria 45° (só nota "confirmar disponibilidade"). Nada de "pedras nobres".

## Testes (evidência observada)
- `npm run typecheck` → OK (tsc sem erros).
- `npm run lint` (eslint-config-next) → OK, sem warnings/erros.
- `npm run build` (Turbopack) → OK, `/` estática, 5 rotas.
- Links/âncoras: `#aplicacoes #catalogo #acabamentos #orcamento #galeria #especificacao #contato` presentes; `grep wa.me` só encontra comentário em código — **nenhum link ativo**. Mapa = link de busca Google Maps (sem telefone).
- Smoke test (`next start` :4317): HTTP 200, ~122 KB, todas as seções encontradas no HTML, `robots.txt = Disallow: /`.
- Viewports 390/768/1440: verificação estática — 25 usos de breakpoints `sm/md/lg`, grids colapsam para 1 coluna no mobile. **NOT PROVEN visualmente** (sem browser no ambiente).
- Lighthouse: **NOT PROVEN** (sem Chrome/navegador no ambiente). Mitigações aplicadas: página estática, zero imagens remotas, SVG inline, fontes auto-hospedadas via next/font, um único componente cliente pequeno.

## Verdict
**COMPLETE como demo apresentável** — pronta para mostrar ao prospect com o enquadramento correto ("conceito, WhatsApp demo, imagens conceituais"). **Não é site oficial e não deve ser publicada como tal.**
Próximos passos para virar presença real: (1) revalidar WhatsApp no Google Business/Maps e ativar `WHATSAPP_NUMBER`; (2) receber fotos autorizadas e trocar os `StoneFigure`; (3) confirmar porcelanato/45°/horários; (4) então remover noindex e publicar como oficial com autorização.

## Deploy
- URL: https://pedra-belli-conceito.vercel.app (deploy via Vercel CLI com token do solicitante; token usado só como env var, nunca gravado em arquivo).
- Nota: o CLI publicou como production (alias automático) em vez de preview; a página carrega `noindex,nofollow` + `robots.txt Disallow`, então não será indexada. Verificação live: HTTP 200 + hero presente.
- Observação de ambiente: as vars globais `VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` apontam para outro projeto — foram desvinculadas somente no processo do deploy; o sistema segue intacto.
