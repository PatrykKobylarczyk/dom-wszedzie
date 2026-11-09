import Section from "./Section";

export default function AboutAuthor() {
  return (
    <Section tone="dark">
      <div className="mx-auto flex max-w-content flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex h-60 w-60 flex-none items-center justify-center rounded-full border border-white/25 bg-white/[0.06]">
          <span className="text-center text-xs uppercase tracking-wider text-white/60">
            Zdjęcie
            <br />
            autorki
          </span>
        </div>
        <div className="max-w-2xl">
          <div className="kicker">O autorce</div>
          <h2 className="mb-6 mt-2 font-script text-6xl text-white">Danuta Stefankiewicz</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-white/80 md:text-lg">
            <p>
              Absolwentka Dziennikarstwa i Komunikacji Społecznej Uniwersytetu Łódzkiego, plastyczka,
              zawodowo związana wcześniej z „Gazetą Wyborczą” i Onet.pl. Licencjonowana agentka
              nieruchomości, członkini stowarzyszenia MIESZKANICZNIK. Od 2014 roku działa na rynku
              nieruchomości, łącząc wiedzę o przestrzeni z uważnością na ludzkie potrzeby i emocje.
            </p>
            <p>
              Ma przyjemność współtworzyć markę Loft Me by Master House — biuro nieruchomości,
              sprzedające tylko mieszkania, w których serce bije szybciej. To filozofia bliska jej
              przekonaniu, że wyjątkowość miejsca nie zawsze wynika z jego metrażu, lokalizacji czy
              ceny, ale przede wszystkim z emocji, które w nas wywołuje.
            </p>
            <p>
              Przez lata odwiedziła setki mieszkań i domów, poznając historie ludzi stojących u
              progu życiowych zmian. Obserwowała, jak miejsca stają się świadkami miłości,
              dorastania, rozstań, nowych początków i powrotów.
            </p>
            <p>
              To doświadczenie nauczyło ją patrzeć na nieruchomości nie przez pryzmat metrów
              kwadratowych, ale ludzi, którzy wypełniają je życiem.
            </p>
            <p>
              W swojej pracy łączy wrażliwość estetyczną, umiejętność opowiadania historii i
              praktyczną wiedzę o tworzeniu przestrzeni.
            </p>
            <p className="font-script text-4xl text-sky">
              Z tej nieoczywistej perspektywy narodził się „Dom Wszędzie” — książka, w której
              doświadczenie zawodowe spotyka się z refleksją nad tym, co sprawia, że czujemy się
              bezpieczni, spokojni i naprawdę u siebie.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
