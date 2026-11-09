import Section from "./Section";

export default function AboutBook() {
  return (
    <Section tone="light" id="o-ksiazce">
      <div className="mx-auto flex max-w-content flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="lg:flex-[0_0_340px]">
          <div className="kicker">O książce</div>
          <h2 className="mt-3 font-script text-6xl leading-[0.95] text-ink md:text-7xl">
            O czym jest
            <br />
            „Dom Wszędzie”?
          </h2>
        </div>
        <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-soft">
          <p className="text-xl font-semibold text-ink">
            Dlaczego w jednych miejscach czujemy, że pasujemy, a w innych nie potrafimy odnaleźć
            spokoju, choć pozornie niczego nam nie brakuje?
          </p>
          <p>
            Przez ponad dekadę pracy na rynku nieruchomości zaglądałam do setek mieszkań i domów.
            Obserwowałam ludzi, którzy z nadzieją odbierali klucze do nowych miejsc, z sentymentem
            żegnali stare i z odwagą zaczynali wszystko od początku.
          </p>
          <p>Z czasem zrozumiałam coś, czego nie da się zapisać w żadnym akcie notarialnym.</p>
          <p>
            Kupujemy metry kwadratowe, ale tak naprawdę szukamy czegoś, czego nie można zmierzyć.
          </p>
          <p className="font-script text-4xl leading-tight text-crimson">
            Bezpieczeństwa. Bliskości. Spokoju. Poczucia przynależności. Miejsca, w którym nie
            musimy niczego udowadniać.
          </p>
          <p>Tak narodził się „Dom Wszędzie”.</p>
          <p>
            Książka, która pozwala spojrzeć na dom zupełnie inaczej. Odkryć, jak światło, zapachy,
            przedmioty, wspomnienia i codzienne rytuały wpływają na nasze emocje. Zrozumieć,
            dlaczego niektóre przestrzenie nas przytłaczają, a inne przynoszą ukojenie.
          </p>
          <p>
            I przede wszystkim — jak świadomie stworzyć własny azyl, nawet jeśli miejsce, w którym
            dziś jesteśmy, nie jest tym wymarzonym ani docelowym.
          </p>
          <p>
            Nie musisz mieć własnego mieszkania, wielkiego budżetu ani idealnego wnętrza, żeby
            poczuć się dobrze.
          </p>
          <p className="border-l-2 border-crimson pl-6 text-xl font-semibold text-ink">
            Bo dom nie zaczyna się od własności. Zaczyna się od poczucia, że gdzieś na świecie jest
            miejsce, w którym możesz odetchnąć.
          </p>
          <p>
            „Dom Wszędzie” to książka o przestrzeni. Ale jeszcze bardziej o każdym z nas. Bo każdy
            potrzebuje domu.
          </p>
        </div>
      </div>
    </Section>
  );
}
