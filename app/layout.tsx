import type { Metadata } from "next";
import { Allura, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { PREMIERE_LONG } from "@/lib/config";

// Czcionka „pisana ręcznie” w nagłówkach — zmiana na inną to jedna linia tutaj.
const script = Allura({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const sans = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dom Wszędzie — Danuta Stefankiewicz",
  description: `Stwórz swój bezpieczny zakątek. E-book i audiobook „Dom Wszędzie”. Premiera ${PREMIERE_LONG}.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${script.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
