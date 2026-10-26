type StoneVariant =
  | "hero"
  | "cozinha"
  | "banheiro"
  | "gourmet"
  | "escada"
  | "revestimento"
  | "marmore"
  | "granito"
  | "quartzo"
  | "quartzito"
  | "lamina"
  | "corte"
  | "quina"
  | "chapa"
  | "ambiente";

const BASE: Record<StoneVariant, { fundo: string; veio: string; fio: string }> = {
  hero: { fundo: "#2E2D2B", veio: "#E8E0D3", fio: "#9A7B4F" },
  cozinha: { fundo: "#3A3733", veio: "#E8E0D3", fio: "#9A7B4F" },
  banheiro: { fundo: "#E8E0D3", veio: "#8A8177", fio: "#9A7B4F" },
  gourmet: { fundo: "#262522", veio: "#D8CDB8", fio: "#9A7B4F" },
  escada: { fundo: "#4A4640", veio: "#E8E0D3", fio: "#C9B992" },
  revestimento: { fundo: "#DDD3C2", veio: "#6E675C", fio: "#9A7B4F" },
  marmore: { fundo: "#F2EDE2", veio: "#8A8177", fio: "#9A7B4F" },
  granito: { fundo: "#2E2D2B", veio: "#B9AE9C", fio: "#6E675C" },
  quartzo: { fundo: "#FAF8F4", veio: "#C9C0AE", fio: "#9A7B4F" },
  quartzito: { fundo: "#3A3733", veio: "#E8E0D3", fio: "#C9B992" },
  lamina: { fundo: "#1C1B19", veio: "#8A8177", fio: "#9A7B4F" },
  corte: { fundo: "#4A4640", veio: "#E8E0D3", fio: "#9A7B4F" },
  quina: { fundo: "#E8E0D3", veio: "#4A4640", fio: "#9A7B4F" },
  chapa: { fundo: "#262522", veio: "#C9C0AE", fio: "#9A7B4F" },
  ambiente: { fundo: "#3A3733", veio: "#DDD3C2", fio: "#C9B992" },
};

/**
 * Visual vetorial conceitual gerado localmente (SVG procedural).
 * NÃO representa obra executada nem estoque real — placeholder premium
 * até a troca por fotos autorizadas (ver public/fotos-reais/README.md).
 */
export function StoneFigure({
  variant,
  label,
  ratio = "4 / 3",
}: {
  variant: StoneVariant;
  label: string;
  ratio?: string;
}) {
  const c = BASE[variant];
  const gid = `g-${variant}`;
  return (
    <figure
      role="img"
      aria-label={`${label} (imagem conceitual)`}
      className="overflow-hidden rounded-xl border border-linha bg-travertino-fundo"
      style={{ aspectRatio: ratio }}
    >
      <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c.fundo} />
            <stop offset="0.55" stopColor={c.fundo} stopOpacity="0.82" />
            <stop offset="1" stopColor={c.fundo} stopOpacity="0.66" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${gid})`} />
        <path
          d="M-10 210 C 60 190, 90 130, 160 128 S 250 90, 320 84 S 380 40, 420 44"
          stroke={c.veio}
          strokeWidth="7"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        <path
          d="M-10 240 C 70 220, 120 170, 200 165 S 300 130, 410 120"
          stroke={c.veio}
          strokeWidth="3"
          fill="none"
          opacity="0.4"
          strokeLinecap="round"
        />
        <path
          d="M-10 120 C 80 110, 140 70, 230 66 S 340 30, 410 36"
          stroke={c.fio}
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M40 -10 C 60 60, 30 140, 70 210 S 90 280, 80 320"
          stroke={c.veio}
          strokeWidth="2.5"
          fill="none"
          opacity="0.3"
          strokeLinecap="round"
        />
        <path
          d="M300 -10 C 290 70, 320 150, 300 220 S 310 290, 305 320"
          stroke={c.fio}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          strokeLinecap="round"
        />
        <rect x="24" y="238" width="150" height="34" rx="17" fill="#1C1B19" opacity="0.72" />
        <text x="36" y="260" fontFamily="Inter, sans-serif" fontSize="12" fill="#FAF8F4" opacity="0.95">
          Imagem conceitual
        </text>
      </svg>
    </figure>
  );
}
