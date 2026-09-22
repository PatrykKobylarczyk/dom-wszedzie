import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dom Wszędzie — Danuta Stefankiewicz",
  description:
    "Stwórz swój bezpieczny zakątek. Przedsprzedaż e-booka i audiobooka „Dom Wszędzie”. Premiera 21 października 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
