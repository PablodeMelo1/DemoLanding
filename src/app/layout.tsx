import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaLux Lighting Solutions - Iluminación Inteligente Premium",
  description: "Transformamos espacios con soluciones de iluminación premium que combinan elegancia, tecnología y eficiencia energética para crear ambientes únicos.",
  keywords: "iluminación, lighting, smart home, diseño, premium, LED, automatización",
  authors: [{ name: "NovaLux Lighting Solutions" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
