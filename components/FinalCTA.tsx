import Section from "./Section";
import { PRICES } from "@/lib/config";

export default function FinalCTA({ preorderMode }: { preorderMode: boolean }) {
  const p = (k: keyof typeof PRICES) => (preorderMode ? PRICES[k].presale : PRICES[k].regular);
  return (
    <Section tone="dark">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center text-lg leading-relaxed text-white/80">
        <h2 className="font-script text-6xl text-white md:text-7xl">Gdzie jest Twój dom?</h2>
        <div className="flex flex-col gap-1">
          <p>Być może tam, gdzie mieszkasz od lat.</p>
          <p>Być może w miejscu, do którego nie możesz już wrócić.</p>
          <p>A może dopiero go szukasz?</p>
        </div>
        <p>
          Nie zawsze możemy wybrać, dokąd zaprowadzi nas życie. Ale możemy nauczyć się tworzyć dom
          tam, gdzie jesteśmy.
        </p>
        <div className="flex flex-col gap-1">
          <p>Nie idealny. Nie urządzony na pokaz. Nie taki, jakiego oczekują od nas inni.</p>
          <p className="font-script text-5xl text-sky">Tylko nasz.</p>
        </div>
        <p>
          Pełen wspomnień, bliskości, spokoju i drobnych rzeczy, które nadają codzienności znaczenie.
        </p>
        <p className="font-script text-4xl text-white">
          Bo dom to nie tylko miejsce, do którego wracasz. To miejsce, w którym wracasz do siebie.
        </p>
        <div className="mt-4 flex flex-col items-center gap-1">
          <div className="font-script text-5xl text-white">„Dom Wszędzie”</div>
          <div className="text-xs uppercase tracking-widest text-white/60">Danuta Stefankiewicz</div>
        </div>
        <p className="font-semibold text-white">Odkryj, jak stworzyć swoje miejsce na świecie.</p>
        <ul className="flex flex-col gap-1 text-white">
          <li>E-book — {p("ebook")} zł</li>
          <li>Audiobook — {p("audiobook")} zł</li>
          <li>E-book + audiobook — {p("bundle")} zł</li>
        </ul>
        <p className="text-base">
          Dwie formy jednej opowieści. Czytaj, kiedy potrzebujesz chwili dla siebie. Słuchaj, kiedy
          jesteś w drodze.
        </p>
        <a href="#wybierz" className="btn-sky mt-2">Chcę stworzyć swój dom</a>
      </div>
    </Section>
  );
}
