import Section from "./Section";
import { PREMIERE_LONG, PRICES, type ProductKey } from "@/lib/config";

type Props = { preorderMode: boolean };

const tiers: {
  key: ProductKey;
  name: string;
  description: string;
  cta: string;
  featured?: boolean;
}[] = [
  { key: "ebook", name: "E-book", description: "„Dom Wszędzie” w wersji elektronicznej.", cta: "Kupuję e-book" },
  { key: "bundle", name: "E-book + audiobook", description: "Czytaj i słuchaj wtedy, kiedy masz na to ochotę.", cta: "Wybieram pakiet", featured: true },
  { key: "audiobook", name: "Audiobook", description: "Posłuchaj „Dom Wszędzie” w domu, w drodze albo wtedy, kiedy właśnie zaczynasz coś od nowa.", cta: "Kupuję audiobook" },
];

export default function Pricing({ preorderMode }: Props) {
  return (
    <Section tone="dark" id="wybierz">
      <div className="mx-auto flex max-w-content flex-col items-center gap-14">
        <div className="text-center">
          <div className="kicker">{preorderMode ? "Przedsprzedaż" : "Dostępne"}</div>
          <h2 className="mt-3 font-script text-6xl text-white md:text-7xl">Wybierz swoją wersję</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((t) => {
            const price = PRICES[t.key];
            return (
              <div
                key={t.key}
                className={`relative flex flex-col gap-4 rounded p-8 ${
                  t.featured ? "border border-sky bg-white/[0.06]" : "border border-white/20"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-8 rounded-full bg-sky px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                    Polecane
                  </div>
                )}
                <div className="font-script text-4xl text-white">{t.name}</div>
                <p className="min-h-[72px] text-sm leading-relaxed text-white/70">{t.description}</p>
                <div>
                  <div className="text-xs text-white/60">{preorderMode ? "Przedsprzedaż" : "Cena"}</div>
                  <div className="text-3xl font-semibold text-white">
                    {preorderMode ? price.presale : price.regular} zł
                  </div>
                  {preorderMode && (
                    <div className="mt-1 text-xs text-white/50">
                      Cena po premierze: {price.regular} zł
                    </div>
                  )}
                </div>
                <button type="button" className={`mt-2 ${t.featured ? "btn-sky" : "btn-line"}`}>
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-white/70">
          {preorderMode
            ? `Kupujesz teraz — swoją wersję otrzymasz w dniu premiery, ${PREMIERE_LONG}.`
            : "Po opłaceniu zamówienia otrzymasz wersję na swój adres e-mail."}
        </p>
      </div>
    </Section>
  );
}
