"use client";

import { useState } from "react";
import { ORCAMENTO_MESSAGE } from "@/lib/site";

/** CTA em modo demonstração: copia o modelo de mensagem, não dispara WhatsApp. */
export function DemoCta() {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(ORCAMENTO_MESSAGE);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2500);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <div className="rounded-2xl border border-linha bg-carvao p-6 text-offwhite sm:p-8">
      <p className="inline-flex items-center rounded-full border border-bronze/60 px-3 py-1 text-xs font-semibold tracking-wide text-travertino uppercase">
        WhatsApp em modo demonstração
      </p>
      <h3 className="mt-4 font-display text-2xl font-medium">Solicitar orçamento</h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-offwhite/80">
        Nenhuma mensagem foi enviada e nenhum número foi acionado. O contato oficial ainda não foi
        revalidado no Google Business/Maps, por isso esta demo não aponta para nenhum telefone.
      </p>
      <ol className="mt-5 space-y-2 text-sm text-offwhite/90">
        <li>
          <span className="font-semibold text-travertino">1.</span> Copie o modelo abaixo.
        </li>
        <li>
          <span className="font-semibold text-travertino">2.</span> Preencha ambiente, medidas e
          material desejado.
        </li>
        <li>
          <span className="font-semibold text-travertino">3.</span> Envie junto com foto ou planta
          quando o número oficial for ativado.
        </li>
      </ol>
      <pre className="mt-5 overflow-x-auto rounded-xl bg-granito p-4 text-xs leading-relaxed whitespace-pre-wrap text-travertino">
        {ORCAMENTO_MESSAGE}
      </pre>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={copiar}
          className="rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-carvao transition hover:bg-travertino"
        >
          {copiado ? "Modelo copiado ✓" : "Copiar modelo de mensagem"}
        </button>
        <a
          href="#catalogo"
          className="rounded-full border border-offwhite/40 px-6 py-3 text-sm font-semibold text-offwhite transition hover:border-offwhite"
        >
          Revisar materiais
        </a>
      </div>
      <p className="mt-4 text-xs text-offwhite/60">
        Para ativar: validar o número no Google Business/Maps, definir WHATSAPP_NUMBER em
        lib/site.ts e republicar.
      </p>
    </div>
  );
}
