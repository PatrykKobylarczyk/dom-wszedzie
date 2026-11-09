import Section from "./Section";

const situations = [
  "W nowym mieszkaniu",
  "Po przeprowadzce do innego miasta",
  "Po rozstaniu",
  "Kiedy wszystko w życiu się zmieniło",
  "Nawet we własnym domu",
];

export default function ProblemSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <Section tone="dark">
      <div className="mx-auto flex max-w-2xl flex-col gap-7 text-center text-lg leading-relaxed text-white/85">
        <h2 className="font-script text-5xl leading-tight text-white md:text-6xl">
          Można mieć własne cztery ściany i wciąż nie czuć się u siebie.
        </h2>
        <p>
          Można urządzić piękne mieszkanie, mieć klucze w kieszeni, ulubiony kubek na stole… i nadal
          czuć, że czegoś brakuje.
        </p>
        <p className="font-semibold text-white">
          Bo dom to nie tylko miejsce, w którym mieszkasz. To sposób, w jaki się w nim czujesz.
        </p>
        <p className="font-script text-4xl text-sky">
          A Ty? Czy kiedykolwiek zdarzyło Ci się nie czuć u siebie?
        </p>
        <ul className="mx-auto flex flex-col gap-2 text-left">
          {situations.map((s) => (
            <li key={s} className="flex gap-3">
              <span aria-hidden className="text-sky">•</span>
              {s}
            </li>
          ))}
        </ul>
        <p>
          Nie zawsze potrzebujemy nowego adresu. Czasem potrzebujemy odnaleźć poczucie
          bezpieczeństwa, spokoju i przynależności.
        </p>
        <p className="font-semibold text-white">Właśnie o tym jest „Dom Wszędzie”.</p>
        <p>
          O tym, dlaczego jedne miejsca otulają nas od pierwszej chwili, a inne, mimo że piękne,
          pozostają obce.
        </p>
        <p>
          O wspomnieniach, przedmiotach, zapachach i drobnych rytuałach, które sprawiają, że zwykła
          przestrzeń staje się naszym azylem.
        </p>
        <p>
          I o tym, jak stworzyć miejsce, do którego chce się wracać. Niezależnie od tego, gdzie
          jesteśmy i na jakim etapie życia.
        </p>
        <p className="font-script text-4xl text-white">
          Bo najpiękniejszy dom to nie ten, który robi wrażenie na innych. To ten, w którym wreszcie
          możesz być sobą.
        </p>
        <p>Odkryj, co sprawia, że naprawdę czujesz się u siebie.</p>
        <div>
          <button type="button" onClick={onCtaClick} className="btn-sky">
            Chcę poczuć się jak w domu
          </button>
        </div>
      </div>
    </Section>
  );
}
