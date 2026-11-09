import Section from "./Section";
import { PREMIERE_LONG } from "@/lib/config";

const faqs = [
  { q: "Kiedy premiera „Dom Wszędzie”?", a: `${PREMIERE_LONG}.` },
  { q: "Co oznacza przedsprzedaż?", a: "Kupujesz swoją wersję już teraz, a e-book lub dostęp do audiobooka otrzymasz w dniu premiery." },
  { q: "W jakim formacie będzie e-book?", a: "[PDF / EPUB — do uzupełnienia]" },
  { q: "Jak otrzymam audiobook?", a: "[Do uzupełnienia zgodnie z wybranym systemem sprzedaży]" },
  { q: "Czy mogę kupić e-book i audiobook razem?", a: "Tak. Dostępny jest również pakiet zawierający obie wersje." },
  { q: "Czy będzie wersja papierowa?", a: "Na ten moment „Dom Wszędzie” dostępny jest jako e-book i audiobook." },
];

export default function FAQ() {
  return (
    <Section tone="light">
      <div className="mx-auto flex max-w-content flex-col items-center gap-12">
        <div className="text-center">
          <div className="kicker">Pytania</div>
          <h2 className="mt-3 font-script text-6xl text-ink md:text-7xl">Najczęstsze pytania</h2>
        </div>
        <div className="w-full max-w-2xl">
          {faqs.map((f, i) => (
            <div key={f.q} className={`py-6 ${i < faqs.length - 1 ? "border-b border-line" : ""}`}>
              <div className="mb-2 text-lg font-semibold text-ink">{f.q}</div>
              <div className="leading-relaxed text-muted">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
