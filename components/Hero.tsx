import Image from "next/image";
import { PREMIERE_LONG } from "@/lib/config";

type Props = { preorderMode: boolean; onCtaClick: () => void };

export default function Hero({ preorderMode, onCtaClick }: Props) {
  return (
    <section className="bg-paper px-6 py-14 md:px-16 lg:px-[120px] lg:py-20">
      <div className="mx-auto flex max-w-content flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-6 lg:flex-[0_0_500px]">
          <div className="kicker text-center lg:text-left">
            {preorderMode ? `Premiera ${PREMIERE_LONG}` : "Już dostępne"}
          </div>
          <h1 className="text-center font-script text-[88px] leading-[0.85] text-ink md:text-[120px] lg:text-left">
            Dom
            <br />
            Wszędzie
          </h1>
          <div className="flex flex-col gap-1 text-center text-lg leading-relaxed text-ink-soft lg:text-left">
            <p>Stwórz swój bezpieczny zakątek.</p>
            <p>Czerp z niego przyjemność.</p>
            <p>A jeśli życie zaprowadzi Cię w nowe miejsce, nie bój się.</p>
          </div>
          <p className="text-center font-script text-4xl leading-tight text-crimson lg:text-left">
            Potrafisz wielokrotnie
            <br />
            stworzyć dla siebie dom.
          </p>
          <div className="text-center text-xs uppercase tracking-widest text-muted lg:text-left">
            Danuta Stefankiewicz
          </div>
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <button type="button" onClick={onCtaClick} className="btn-sky">
              {preorderMode ? "Zamów w przedsprzedaży" : "Kup teraz"}
              <span aria-hidden>→</span>
            </button>
            <span className="text-xs text-muted">
              E-book i audiobook — dostawa {PREMIERE_LONG}
            </span>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center gap-6 py-6">
          {/* miękki cień/światłocień za książką */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-[55%] -translate-y-[45%] rounded-full bg-black/25 blur-3xl"
          />
          <div className="relative w-[210px] rotate-[-3deg] overflow-hidden rounded-[3px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.45),0_10px_20px_rgba(0,0,0,0.2)] sm:w-[260px]">
            <Image
              src="/book-cover.jpg"
              alt="Okładka książki Dom Wszędzie, Danuta Stefankiewicz"
              width={480}
              height={672}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="relative hidden w-[170px] flex-col items-center gap-3 rounded-[3px] border border-line bg-white px-5 py-8 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.35)] sm:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-crimson">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7-11-7z" fill="#A3224F" />
              </svg>
            </div>
            <div className="font-script text-3xl text-ink">Audiobook</div>
            <div className="text-center text-[11px] font-semibold uppercase tracking-wider text-muted">
              Wkrótce dostępny
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
