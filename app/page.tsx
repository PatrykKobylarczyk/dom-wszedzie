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
  // W dniu premiery zmień na false (przyciski i ceny przełączą się na „Kup teraz”).
  const [preorderMode] = useState(true);
  const goToPricing = () =>
    document.getElementById("wybierz")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <Hero preorderMode={preorderMode} onCtaClick={goToPricing} />
      <ProblemSection onCtaClick={goToPricing} />
      <AboutBook />
      <ForWhom />
      <Contents />
      <Pricing preorderMode={preorderMode} />
      <AuthorNote />
      <AboutAuthor />
      <FAQ />
      <FinalCTA preorderMode={preorderMode} />
      <Footer />
    </main>
  );
}
