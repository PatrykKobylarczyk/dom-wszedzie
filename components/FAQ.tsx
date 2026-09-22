const faqs = [
  {
    q: "Kiedy premiera „Dom Wszędzie”?",
    a: "21 października 2026.",
  },
  {
    q: "Co oznacza przedsprzedaż?",
    a: "Kupujesz swoją wersję już teraz, a e-book lub dostęp do audiobooka otrzymasz w dniu premiery.",
  },
  {
    q: "W jakim formacie będzie e-book?",
    a: "[PDF / EPUB — do uzupełnienia]",
  },
  {
    q: "Jak otrzymam audiobook?",
    a: "[Do uzupełnienia zgodnie z wybranym systemem sprzedaży]",
  },
  {
    q: "Czy mogę kupić e-book i audiobook razem?",
    a: "Tak. Dostępny jest również pakiet zawierający obie wersje.",
  },
  {
    q: "Czy będzie wersja papierowa?",
    a: "Na ten moment „Dom Wszędzie” dostępny jest jako e-book i audiobook.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-cream px-6 py-20 md:px-16 lg:px-[120px] lg:py-32">
      <div className="mx-auto flex max-w-content flex-col items-center gap-12">
        <div className="text-center">
          <div className="kicker">Pytania</div>
          <h2 className="mt-4 font-serif text-3xl font-medium italic text-ink md:text-4xl">
            Najczęstsze pytania
          </h2>
        </div>
        <div className="w-full max-w-2xl">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className={`py-6 ${i < faqs.length - 1 ? "border-b border-line" : ""}`}
            >
              <div className="mb-2 text-lg font-medium text-ink">
                {item.q}
              </div>
              <div className="text-base leading-relaxed text-muted">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
