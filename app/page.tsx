"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import AboutBook from "@/components/AboutBook";
import ForWhom from "@/components/ForWhom";
import Contents from "@/components/Contents";
import Pricing from "@/components/Pricing";
import AuthorNote from "@/components/AuthorNote";
import AboutAuthor from "@/components/AboutAuthor";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  // Ręczny przełącznik na czas premiery: 21.10.2026 zmień na false
  // (albo podłącz tu porównanie z bieżącą datą, gdy strona pójdzie na produkcję).
  const [preorderMode] = useState(true);

  return (
    <main>
      <Hero
        preorderMode={preorderMode}
        onCtaClick={() =>
          document.getElementById("wybierz")?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <hr className="hair" />
      <ProblemSection />
      <AboutBook />
      <ForWhom />
      <Contents />
      <Pricing preorderMode={preorderMode} />
      <AuthorNote />
      <AboutAuthor />
      <FAQ />
      <FinalCTA />
      <hr className="hair" />
      <Footer />
    </main>
  );
}
