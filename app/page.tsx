import { DemoCta } from "@/components/demo-cta";
import { StoneFigure } from "@/components/stone";
import { ADDRESS_FULL, ADDRESS_SHORT, APLICACOES, MAPS_URL, MATERIAIS } from "@/lib/site";

const CATALOGO_VISUAL = ["marmore", "granito", "quartzo", "quartzito", "lamina"] as const;

const GALERIA = [
  { variant: "chapa", titulo: "Chapa — leitura de veios" },
  { variant: "corte", titulo: "Corte — precisão de medida" },
  { variant: "quina", titulo: "Quina — detalhe de borda" },
  { variant: "ambiente", titulo: "Ambiente — composição final" },
  { variant: "banheiro", titulo: "Lavatório — conceito" },
  { variant: "gourmet", titulo: "Balcão — conceito" },
] as const;

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-linha bg-offwhite/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-[0.18em]">
              PEDRA BELLI
            </span>
            <span className="mt-1 block text-[11px] font-medium tracking-[0.14em] text-carvao-suave uppercase">
              Marmoraria · São Carlos/SP · Conceito
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Navegação">
            <a href="#aplicacoes" className="hover:underline">
              Aplicações
            </a>
            <a href="#catalogo" className="hover:underline">
              Catálogo
            </a>
            <a href="#acabamentos" className="hover:underline">
              Acabamentos
            </a>
            <a href="#galeria" className="hover:underline">
              Galeria
            </a>
          </nav>
          <a
            href="#orcamento"
            className="rounded-full bg-carvao px-5 py-2.5 text-sm font-semibold text-offwhite transition hover:bg-granito"
          >
            Solicitar orçamento
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* 1 · HERO */}
        <section className="border-b border-linha">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <p className="inline-flex items-center rounded-full border border-linha bg-travertino-fundo px-3 py-1 text-xs font-semibold tracking-wide text-carvao-suave uppercase">
                Catálogo visual · Demonstração não oficial
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] font-medium sm:text-5xl lg:text-6xl">
                Pedras que definem o espaço.
              </h1>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-carvao-suave sm:text-lg">
                Em vez de dezenas de fotos soltas no WhatsApp: um catálogo organizado de bancadas,
                revestimentos e acabamentos — e um pedido de orçamento com foto, medidas e material
                em uma conversa só.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#orcamento"
                  className="rounded-full bg-carvao px-7 py-3.5 text-sm font-semibold text-offwhite transition hover:bg-granito"
                >
                  Solicitar orçamento
                </a>
                <a
                  href="#aplicacoes"
                  className="rounded-full border border-carvao/30 px-7 py-3.5 text-sm font-semibold transition hover:border-carvao"
                >
                  Ver aplicações
                </a>
              </div>
              <p className="mt-6 text-sm text-carvao-suave">
                {ADDRESS_SHORT} ·{" "}
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="underline">
                  Ver no mapa
                </a>
              </p>
            </div>
            <StoneFigure variant="hero" label="Slab de pedra em ambiente" ratio="4 / 3" />
          </div>
        </section>

        {/* 2 · APLICAÇÕES */}
        <section id="aplicacoes" className="scroll-mt-24 border-b border-linha bg-travertino-fundo">
          <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.16em] text-bronze uppercase">
              01 — Aplicações
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              Um lugar para cada medida.
            </h2>
            <p className="mt-3 max-w-prose text-carvao-suave">
              Categorias que organizam a conversa: o cliente encontra o ambiente, vê referências
              conceituais e chega ao orçamento com as informações certas.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {APLICACOES.map((a) => (
                <article
                  key={a.titulo}
                  className="overflow-hidden rounded-2xl border border-linha bg-offwhite"
                >
                  <StoneFigure variant={a.variante} label={a.titulo} ratio="16 / 9" />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-medium">{a.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-carvao-suave">{a.texto}</p>
                  </div>
                </article>
              ))}
              <article className="flex flex-col justify-between rounded-2xl bg-carvao p-6 text-offwhite">
                <div>
                  <h3 className="font-display text-xl font-medium">Não achou o seu ambiente?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-offwhite/75">
                    Descreva a peça com foto e medidas — o orçamento parte do seu caso concreto.
                  </p>
                </div>
                <a
                  href="#orcamento"
                  className="mt-6 inline-flex w-fit rounded-full bg-offwhite px-5 py-2.5 text-sm font-semibold text-carvao transition hover:bg-travertino"
                >
                  Descrever meu caso
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* 3 · CATÁLOGO CONCEITUAL */}
        <section id="catalogo" className="scroll-mt-24 border-b border-linha">
          <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.16em] text-bronze uppercase">
              02 — Catálogo conceitual
            </p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-2xl font-display text-3xl font-medium sm:text-4xl">
                Materiais, sem adivinhação.
              </h2>
              <p className="inline-flex items-center rounded-full border border-bronze/50 px-3 py-1 text-xs font-semibold text-carvao-suave">
                Seleção conceitual — não representa estoque
              </p>
            </div>
            <p className="mt-3 max-w-prose text-carvao-suave">
              Famílias de materiais para comparar visual, uso típico e acabamento antes de falar de
              preço. A disponibilidade de cada chapa é confirmada no orçamento.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MATERIAIS.map((m, i) => (
                <article
                  key={m.nome}
                  className="overflow-hidden rounded-2xl border border-linha bg-offwhite"
                >
                  <StoneFigure variant={CATALOGO_VISUAL[i]} label={m.nome} ratio="16 / 10" />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-medium">{m.nome}</h3>
                    <p className="mt-1 text-sm text-carvao-suave">{m.nota}</p>
                    <p className="mt-3 border-t border-linha pt-3 text-sm">
                      <span className="font-semibold">Uso típico:</span> {m.usos}
                    </p>
                  </div>
                </article>
              ))}
              <article className="rounded-2xl border border-dashed border-carvao/30 bg-travertino-fundo p-6">
                <h3 className="font-display text-xl font-medium">Porcelanato e outros formatos</h3>
                <p className="mt-2 text-sm leading-relaxed text-carvao-suave">
                  Não confirmados para esta demonstração — entram no orçamento somente sob consulta.
                </p>
                <a href="#orcamento" className="mt-4 inline-block text-sm font-semibold underline">
                  Consultar disponibilidade
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* 4 · ACABAMENTOS */}
        <section id="acabamentos" className="scroll-mt-24 border-b border-linha bg-granito text-offwhite">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-travertino uppercase">
                03 — Acabamentos
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
                O detalhe que o olho percebe.
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="border-t border-offwhite/15 pt-5">
                  <h3 className="font-semibold">Corte reto</h3>
                  <p className="mt-1 text-sm leading-relaxed text-offwhite/75">
                    Leitura limpa para bancadas e prateleiras; a base de um orçamento bem medido.
                  </p>
                </li>
                <li className="border-t border-offwhite/15 pt-5">
                  <h3 className="font-semibold">Bordas e quinas</h3>
                  <p className="mt-1 text-sm leading-relaxed text-offwhite/75">
                    O encontro entre topo e lateral define o acabamento — informe o perfil desejado
                    no pedido.
                  </p>
                </li>
                <li className="border-t border-offwhite/15 pt-5">
                  <h3 className="font-semibold">Recortes sob projeto</h3>
                  <p className="mt-1 text-sm leading-relaxed text-offwhite/75">
                    Cubas, tomadas e passagens saem da planta e das medidas — quanto mais exato o
                    desenho, mais exato o corte.
                  </p>
                </li>
              </ul>
              <p className="mt-6 rounded-xl border border-bronze/50 p-4 text-sm text-travertino">
                Meia-esquadria 45° e perfis especiais: confirmar disponibilidade no orçamento — não
                inclusos como padrão nesta demo.
              </p>
            </div>
            <div className="grid content-start gap-5">
              <StoneFigure variant="quina" label="Detalhe de quina" ratio="16 / 9" />
              <StoneFigure variant="corte" label="Detalhe de corte" ratio="16 / 9" />
            </div>
          </div>
        </section>

        {/* 5 · COMO PEDIR ORÇAMENTO */}
        <section id="orcamento" className="scroll-mt-24 border-b border-linha">
          <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.16em] text-bronze uppercase">
              04 — Como pedir orçamento
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              Três informações, zero vai-e-volta.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  n: "1",
                  t: "Foto ou planta",
                  d: "Uma foto do local ou a planta com as marcações já resolve metade da conversa.",
                },
                {
                  n: "2",
                  t: "Medidas",
                  d: "Comprimento, profundidade e altura — mesmo aproximadas, com uma foto de referência.",
                },
                {
                  n: "3",
                  t: "Material desejado",
                  d: "Aponte uma família do catálogo acima; a chapa exata é confirmada no atendimento.",
                },
              ].map((p) => (
                <article key={p.n} className="rounded-2xl border border-linha bg-travertino-fundo p-6">
                  <p className="font-display text-3xl text-bronze">{p.n}</p>
                  <h3 className="mt-2 font-semibold">{p.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-carvao-suave">{p.d}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <DemoCta />
            </div>
          </div>
        </section>

        {/* 6 · GALERIA */}
        <section id="galeria" className="scroll-mt-24 border-b border-linha bg-travertino-fundo">
          <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-bronze uppercase">
                  05 — Galeria
                </p>
                <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
                  Textura, corte, ambiente.
                </h2>
              </div>
              <p className="max-w-sm text-sm text-carvao-suave">
                Visuais conceituais gerados para esta demonstração — não representam obras
                executadas. A troca por fotos reais autorizadas já está preparada.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {GALERIA.map((g) => (
                <article key={g.titulo}>
                  <StoneFigure variant={g.variant} label={g.titulo} ratio="4 / 3" />
                  <p className="mt-2 text-sm font-medium">{g.titulo}</p>
                  <p className="text-xs text-carvao-suave">Imagem conceitual</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · ESPECIFICAÇÃO */}
        <section id="especificacao" className="scroll-mt-24 border-b border-linha">
          <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.16em] text-bronze uppercase">
              06 — Por que a especificação importa
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              A pedra certa para o uso certo.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-linha p-6">
                <h3 className="font-display text-xl font-medium">Estética</h3>
                <p className="mt-2 text-sm leading-relaxed text-carvao-suave">
                  Veios, fundo e escala mudam com a luz e o tamanho da peça. Comparar no catálogo
                  evita surpresa na instalação.
                </p>
              </article>
              <article className="rounded-2xl border border-linha p-6">
                <h3 className="font-display text-xl font-medium">Manutenção</h3>
                <p className="mt-2 text-sm leading-relaxed text-carvao-suave">
                  Cada família pede um cuidado de rotina diferente. Entender isso antes ajuda a
                  escolher com tranquilidade.
                </p>
              </article>
              <article className="rounded-2xl border border-linha p-6">
                <h3 className="font-display text-xl font-medium">Uso</h3>
                <p className="mt-2 text-sm leading-relaxed text-carvao-suave">
                  Cozinha de uso intenso, lavabo de baixo tráfego, área externa: o ambiente orienta
                  a indicação do material.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 8 · CTA FINAL */}
        <section id="contato" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
            <div className="rounded-3xl bg-carvao px-6 py-12 text-center text-offwhite sm:px-12">
              <p className="text-xs font-semibold tracking-[0.16em] text-travertino uppercase">
                Pronto quando você estiver
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
                Substitua as fotos soltas por um pedido organizado.
              </h2>
              <p className="mx-auto mt-3 max-w-prose text-sm leading-relaxed text-offwhite/75 sm:text-base">
                {ADDRESS_FULL}. Traga foto, medidas e material desejado — o resto a conversa
                resolve.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="#orcamento"
                  className="rounded-full bg-offwhite px-7 py-3.5 text-sm font-semibold text-carvao transition hover:bg-travertino"
                >
                  Solicitar orçamento
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-offwhite/40 px-7 py-3.5 text-sm font-semibold text-offwhite transition hover:border-offwhite"
                >
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-linha bg-travertino-fundo">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="font-display text-lg font-semibold tracking-[0.18em]">PEDRA BELLI</p>
          <p className="mt-1 text-sm text-carvao-suave">{ADDRESS_FULL}</p>
          <p className="mt-4 max-w-prose text-xs leading-relaxed text-carvao-suave">
            Conceito comercial não oficial, preparado para apresentação ao prospect. Não é o site
            oficial do negócio. Imagens e catálogo conceituais — sem fotos de obras, avaliações ou
            números inventados. Contato via WhatsApp desativado nesta demo até a revalidação do
            número oficial. Página com noindex/nofollow.
          </p>
        </div>
      </footer>
    </>
  );
}
