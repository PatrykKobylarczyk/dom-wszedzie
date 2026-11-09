import type { ReactNode } from "react";

type Props = {
  tone: "light" | "dark";
  id?: string;
  className?: string;
  children: ReactNode;
};

// Sekcje na przemian: biała / czarna (zamiast beżu).
export default function Section({ tone, id, className = "", children }: Props) {
  const toneClass = tone === "dark" ? "on-dark bg-ink text-white" : "bg-paper text-ink";
  return (
    <section id={id} className={`${toneClass} px-6 py-20 md:px-16 lg:px-[120px] lg:py-32 ${className}`}>
      {children}
    </section>
  );
}
