export default function AboutBook() {
  return (
    <section id="o-ksiazce" className="bg-cream px-6 py-20 md:px-16 lg:px-[120px] lg:py-32">
      <div className="mx-auto flex max-w-content flex-col gap-10 lg:flex-row lg:gap-24">
        <div className="lg:flex-[0_0_320px]">
          <div className="kicker">O książce</div>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-ink md:text-4xl">
            O czym jest
            <br />
            „Dom Wszędzie”?
          </h2>
        </div>
        <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-soft">
          <p>
            Przez ponad dekadę pracy na rynku nieruchomości obserwowałam
            ludzi, którzy kupowali, sprzedawali, opuszczali i tworzyli swoje
            domy.
          </p>
          <p>
            Zrozumiałam, że rzadko szukamy wyłącznie odpowiedniego metrażu
            czy lokalizacji. Szukamy bezpieczeństwa, spokoju i poczucia, że
            jesteśmy u siebie.
          </p>
          <p>
            „Dom Wszędzie” pokazuje, jak oswoić nową przestrzeń — wizualnie i
            emocjonalnie — oraz sprawić, żeby nawet miejsce wynajęte czy
            tymczasowe zaczęło być naprawdę Twoje.
          </p>
          <p className="mt-2 border-l-2 border-accent pl-6 font-serif text-xl italic text-ink">
            To książka o przestrzeni.
            <br />
            Ale jeszcze bardziej — o człowieku, który w niej mieszka.
          </p>
        </div>
      </div>
    </section>
  );
}
