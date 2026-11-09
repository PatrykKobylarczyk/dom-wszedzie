import Section from "./Section";

export default function AuthorNote() {
  return (
    <Section tone="light">
      <div className="mx-auto flex max-w-2xl flex-col gap-6 text-lg leading-relaxed text-ink-soft">
        <div className="kicker text-center">Od autorki</div>
        <p className="text-xl font-semibold text-ink">
          Nazywam się Danuta Stefankiewicz. Od 2014 roku pomagam ludziom znajdować miejsca do życia.
          Ale z czasem zrozumiałam, że znalezienie mieszkania i odnalezienie domu to nie zawsze to
          samo.
        </p>
        <p>
          Przez lata przekraczałam progi setek mieszkań. Widziałam radość, wzruszenie, nadzieję, ale
          też niepewność, tęsknotę i strach przed zmianą.
        </p>
        <p>
          Byłam świadkiem pierwszych wspólnych mieszkań, nowych początków, trudnych rozstań i
          pożegnań z miejscami, w których ktoś przeżył całe życie.
        </p>
        <p>
          I zrozumiałam, że za każdymi drzwiami kryje się coś ważniejszego niż metraż, standard
          wykończenia czy wartość nieruchomości.
        </p>
        <p className="font-script text-4xl text-crimson">
          Kryje się człowiek. Ze swoją historią, wspomnieniami i potrzebą posiadania miejsca, w
          którym może poczuć się bezpiecznie.
        </p>
        <p>Zaczęłam więc zadawać sobie pytania.</p>
        <p>
          Dlaczego niektóre wnętrza otulają nas spokojem, choć są zupełnie zwyczajne? Dlaczego inne,
          nawet najpiękniejsze, pozostają obce? I co sprawia, że pewnego dnia wchodzimy do jakiegoś
          miejsca i myślimy:
        </p>
        <p className="font-script text-4xl text-ink">„Tutaj mogę być sobą. Tutaj jestem u siebie”.</p>
        <p>Z tych pytań, obserwacji i doświadczeń narodził się „Dom Wszędzie”.</p>
        <p>
          Napisałam tę książkę, bo wierzę, że każdy zasługuje na miejsce, w którym może odetchnąć.
          Niezależnie od tego, ile ma metrów kwadratowych, czyje nazwisko widnieje w akcie własności
          i jak bardzo jego życie różni się od tego, które sobie kiedyś wymarzył.
        </p>
        <p>
          Chcę pokazać Ci, że dom można tworzyć świadomie. Z drobnych gestów, wspomnień, przedmiotów,
          światła, zapachów i rytuałów.
        </p>
        <p>Że nie zawsze trzeba zmieniać adres, żeby zacząć czuć się inaczej.</p>
        <p className="border-l-2 border-crimson pl-6 text-xl font-semibold text-ink">
          Bo być może najważniejsze w domu nie jest to, jak wygląda. Ale to, kim możemy się w nim
          stać.
        </p>
        <p className="font-script text-4xl text-ink">Danuta Stefankiewicz</p>
        <p>Przeczytaj fragment i przekonaj się, czy to również Twoja historia.</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#fragment" className="btn-line">Czytaj fragment</a>
          <a href="#fragment-audio" className="btn-line">
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
            </svg>
            Posłuchaj fragmentu
          </a>
        </div>
      </div>
    </Section>
  );
}
