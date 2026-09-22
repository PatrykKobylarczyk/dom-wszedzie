import Image from "next/image";

type Props = {
  preorderMode: boolean;
  onCtaClick: () => void;
};

export default function Hero({ preorderMode, onCtaClick }: Props) {
  return (
    <section className="bg-cream px-6 py-16 md:px-16 lg:px-[120px] lg:py-24">
      <div className="mx-auto flex max-w-content flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex flex-col gap-7 lg:flex-[0_0_480px]">
          <div className="kicker text-center lg:text-left">
            Premiera 21 października 2026
          </div>
          <h1 className="text-center font-serif text-5xl font-medium italic leading-[1.05] text-ink md:text-6xl lg:text-left lg:text-7xl">
            Dom
            <br />
            Wszędzie
          </h1>
          <div className="flex flex-col gap-1 text-center text-lg leading-relaxed text-ink-soft lg:text-left lg:text-xl">
            <p>Stwórz swój bezpieczny zakątek.</p>
            <p>Czerp z niego przyjemność.</p>
            <p>A jeśli życie zaprowadzi Cię w nowe miejsce, nie bój się.</p>
            <p className="mt-1 font-serif italic text-accent-deep">
              Potrafisz wielokrotnie stworzyć dla siebie dom.
            </p>
          </div>
          <div className="text-center text-sm uppercase tracking-wider text-muted lg:text-left">
            Danuta Stefankiewicz
          </div>
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <button onClick={onCtaClick} className="btn-accent">
              {preorderMode ? "Zamów w przedsprzedaży" : "Kup teraz"}
            </button>
            <span className="text-xs text-muted">
              E-book i audiobook — dostawa 21.10.2026
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-center gap-8">
          <div className="w-[200px] -rotate-3 overflow-hidden rounded-sm shadow-[0_40px_70px_-30px_rgba(28,24,21,0.35)] sm:w-[240px]">
            <Image
              src="/book-cover.jpg"
              alt="Okładka książki Dom Wszędzie, Danuta Stefankiewicz"
              width={480}
              height={672}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="hidden translate-y-6 rotate-3 flex-col items-center justify-center gap-3 rounded-sm border border-line bg-white px-5 py-6 shadow-[0_30px_60px_-28px_rgba(28,24,21,0.28)] sm:flex sm:w-[180px]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7-11-7z" fill="#B85C74" />
              </svg>
            </div>
            <div className="text-center font-serif italic text-ink">Audiobook</div>
            <div className="text-center text-[11px] uppercase tracking-wider text-muted">
              Mockup produktu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
