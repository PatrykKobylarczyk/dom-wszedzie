import Section from "./Section";

const points = [
  {
    title: "Jak zamienić zwykłe mieszkanie w miejsce, do którego chce się wracać.",
    text: "Odkryjesz, co sprawia, że przestrzeń nabiera ciepła i staje się prawdziwym domem — nawet jeśli jest wynajęta, niewielka lub tylko na chwilę.",
  },
  {
    title: "Jak poczuć się u siebie, kiedy wszystko wokół się zmienia.",
    text: "Dowiesz się, jak oswoić nową przestrzeń i budować poczucie przynależności po przeprowadzce, rozstaniu czy rozpoczęciu kolejnego etapu życia.",
  },
  {
    title: "Jak stworzyć dom, który koi zmysły i daje poczucie bezpieczeństwa.",
    text: "Poznasz znaczenie światła, kolorów, zapachów, dźwięków i codziennych rytuałów. Zrozumiesz, jak świadomie wykorzystywać je, by wprowadzić do swojego otoczenia więcej spokoju i harmonii.",
  },
  {
    title: "Jak nadać wnętrzu duszę, zamiast tylko je urządzać.",
    text: "Przekonasz się, dlaczego przedmioty z historią, wspomnienia i osobiste drobiazgi bywają cenniejsze niż najdroższe dekoracje. I jak stworzyć przestrzeń, która opowiada Twoją historię, a nie naśladuje cudzą.",
  },
  {
    title: "Jak odnaleźć poczucie domu niezależnie od adresu.",
    text: "Odkryjesz, co pomaga zachować poczucie zakorzenienia i bliskości, nawet gdy życie zmusza nas do zmian, a miejsce, które nazywamy domem, nie jest dane raz na zawsze.",
  },
];

export default function Contents() {
  return (
    <Section tone="light">
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:flex-row lg:gap-20">
        <div className="lg:flex-[0_0_360px]">
          <div className="kicker">W środku</div>
          <h2 className="mt-3 font-script text-6xl leading-[0.95] text-ink md:text-7xl">
            Co odkryjesz w „Domu Wszędzie”?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Dom to nie tylko przestrzeń, którą urządzamy. To przestrzeń, która każdego dnia wpływa na
            to, jak się czujemy, odpoczywamy i żyjemy.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            „Dom Wszędzie” pomoże Ci zrozumieć tę zależność i odkryć, jak za pomocą świadomych, często
            niewielkich zmian stworzyć miejsce, które naprawdę Ci służy.
          </p>
        </div>
        <div className="flex max-w-2xl flex-1 flex-col gap-8">
          {points.map((p, i) => (
            <div key={p.title} className="border-b border-line pb-8 last:border-b-0">
              <div className="flex items-baseline gap-5">
                <span className="font-script text-4xl text-crimson">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-ink">{p.title}</h3>
              </div>
              <p className="mt-2 pl-[3.2rem] leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          ))}
          <div className="text-lg leading-relaxed text-ink-soft">
            <p>Nie potrzebujesz kolejnego poradnika o idealnych wnętrzach.</p>
            <p>Potrzebujesz wiedzy, jak stworzyć przestrzeń, w której będzie Ci po prostu dobrze.</p>
            <p className="mt-3 font-script text-4xl text-crimson">I właśnie po to powstał „Dom Wszędzie”.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
