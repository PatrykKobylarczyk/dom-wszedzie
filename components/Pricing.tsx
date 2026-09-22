type Props = {
  preorderMode: boolean;
};

const tiers = [
  {
    key: "ebook",
    name: "E-book",
    description: "„Dom Wszędzie” w wersji elektronicznej.",
    cta: "Kupuję e-book",
    variant: "outline" as const,
  },
  {
    key: "bundle",
    name: "E-book + audiobook",
    description: "Czytaj i słuchaj wtedy, kiedy masz na to ochotę.",
    cta: "Wybieram pakiet",
    variant: "accent" as const,
    featured: true,
  },
  {
    key: "audiobook",
    name: "Audiobook",
    description:
      "Posłuchaj „Dom Wszędzie” w domu, w drodze albo wtedy, kiedy właśnie zaczynasz coś od nowa.",
    cta: "Kupuję audiobook",
    variant: "outline" as const,
  },
];

export default function Pricing({ preorderMode }: Props) {
  return (
    <section id="wybierz" className="bg-white px-6 py-20 md:px-16 lg:px-[120px] lg:py-32">
      <div className="mx-auto flex max-w-content flex-col items-center gap-14">
        <div className="text-center">
          <div className="kicker">
            {preorderMode ? "Przedsprzedaż" : "Dostępne od premiery"}
          </div>
          <h2 className="mt-4 font-serif text-3xl font-medium italic text-ink md:text-4xl">
            Wybierz swoją wersję
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className={`relative flex flex-col gap-4 rounded border p-8 ${
                tier.featured
                  ? "border-accent bg-accent-soft"
                  : "border-line bg-white"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] uppercase tracking-wider text-white">
                  Polecane
                </div>
              )}
              <div className="font-serif text-xl italic text-ink">
                {tier.name}
              </div>
              <p className="min-h-[48px] text-sm leading-relaxed text-muted">
                {tier.description}
              </p>
              <div className="mt-2">
                <div className="text-xs text-muted">
                  {preorderMode ? "Przedsprzedaż" : "Cena"}
                </div>
                <div className="font-serif text-2xl text-ink">[cena] zł</div>
                {preorderMode && (
                  <div className="mt-0.5 text-xs text-muted/70 line-through">
                    Cena po premierze: [cena] zł
                  </div>
                )}
              </div>
              <button
                type="button"
                className={`mt-2 justify-center ${
                  tier.variant === "accent" ? "btn-accent" : "btn-outline"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted">
          Kupujesz teraz — swoją wersję otrzymasz w dniu premiery, 21
          października 2026.
        </p>
      </div>
    </section>
  );
}
