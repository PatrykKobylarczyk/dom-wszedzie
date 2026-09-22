const situations = [
  "Nowe mieszkanie",
  "Inne miasto",
  "Rozstanie",
  "Studia",
  "Pierwsze własne cztery ściany",
  "Nowy etap życia",
];

export default function ProblemSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 lg:px-[120px] lg:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <h2 className="font-serif text-3xl font-medium italic leading-tight text-ink md:text-4xl">
          Dom nie zawsze zaczyna się od kluczy
        </h2>
        <p className="text-lg leading-relaxed text-ink-soft">
          Czy zdarzyło Ci się przeprowadzić do nowego miejsca i przez długi
          czas czuć się tam jak gość?
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {situations.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-4 py-2 text-sm text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="text-lg leading-relaxed text-ink-soft">
          Zmiana miejsca często oznacza znacznie więcej niż zmianę adresu.
        </p>
        <p className="font-serif text-xl italic leading-relaxed text-accent-deep">
          „Dom Wszędzie” powstał dla tych, którzy chcą nauczyć się czuć u
          siebie — niezależnie od miejsca i okoliczności.
        </p>
        <a href="#o-ksiazce" className="btn-outline mt-2">
          Chcę przeczytać
        </a>
      </div>
    </section>
  );
}
