/**
 * Constantes do conceito comercial (demonstração não oficial).
 *
 * WHATSAPP_MODE = "demo": nenhum link wa.me é renderizado.
 * Para ativar após revalidar o número oficial no Google Business/Maps:
 *   1. WHATSAPP_MODE = "live"
 *   2. WHATSAPP_NUMBER = "<somente dígitos com DDI+DDD>"
 *   3. redeploy
 */
export const WHATSAPP_MODE = "demo" as const;
export const WHATSAPP_NUMBER = "" as const;

export const BUSINESS_NAME = "Pedra Belli";
export const BUSINESS_SUFFIX = "Marmoraria · São Carlos/SP";
export const ADDRESS_SHORT = "Vila Prado — São Carlos/SP";
export const ADDRESS_FULL = "Rua Antônio de Almeida Leite, 186 — Vila Prado, São Carlos/SP";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Ant%C3%B4nio%20de%20Almeida%20Leite%20186%20Vila%20Prado%20S%C3%A3o%20Carlos%20SP";

export const ORCAMENTO_MESSAGE = `Olá! Vi o catálogo e quero um orçamento.
Ambiente: (ex.: cozinha)
Medidas aproximadas: (ex.: 2,40 m x 0,65 m)
Material desejado: (ex.: granito / mármore / quartzo / quartzito / lâmina ultracompacta)
Tenho foto ou planta para enviar.`;

export type Material = {
  nome: string;
  nota: string;
  usos: string;
};

export const MATERIAIS: Material[] = [
  {
    nome: "Mármore",
    nota: "Veios marcados, leitura clássica.",
    usos: "Lavabos, revestimentos e detalhes.",
  },
  {
    nome: "Granito",
    nota: "Grão fechado, rotina intensa.",
    usos: "Cozinhas e áreas gourmet.",
  },
  {
    nome: "Quartzo",
    nota: "Superfície uniforme e previsível.",
    usos: "Bancadas e lavatórios.",
  },
  {
    nome: "Quartzito",
    nota: "Textura natural de alta variação.",
    usos: "Bancadas de destaque e painéis.",
  },
  {
    nome: "Lâminas ultracompactas",
    nota: "Grandes formatos, juntas discretas.",
    usos: "Revestimentos e bancadas sob consulta.",
  },
];

export const APLICACOES = [
  {
    titulo: "Cozinhas",
    texto: "Bancadas contínuas, frontões e ilhas — medidas e recortes organizados num só pedido.",
    variante: "cozinha",
  },
  {
    titulo: "Banheiros",
    texto: "Bancadas, lavatórios, nichos e revestimentos com leitura limpa.",
    variante: "banheiro",
  },
  {
    titulo: "Áreas gourmet",
    texto: "Balcões e apoios para uso frequente, com acabamento fácil de cuidar.",
    variante: "gourmet",
  },
  {
    titulo: "Escadas",
    texto: "Pisos e espelhos com paginação pensada antes do corte.",
    variante: "escada",
  },
  {
    titulo: "Revestimentos",
    texto: "Paredes, painéis e soleiras que amarram o ambiente.",
    variante: "revestimento",
  },
] as const;
