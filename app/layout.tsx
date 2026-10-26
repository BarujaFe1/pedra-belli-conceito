import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pedra Belli — Pedras que definem o espaço (Conceito demonstrativo)",
  description:
    "Conceito comercial não oficial: catálogo visual de bancadas, revestimentos e acabamentos em São Carlos/SP. Solicite orçamento com foto, medidas e material.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Pedra Belli — Pedras que definem o espaço (Demonstração)",
    description:
      "Catálogo visual para cozinhas, banheiros, áreas gourmet, escadas e revestimentos. Orçamento simples pelo WhatsApp.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-offwhite font-sans text-carvao">{children}</body>
    </html>
  );
}
