export default function FinalCTA() {
  return (
    <section className="bg-white px-6 pb-24 pt-24 md:px-16 lg:px-[120px] lg:pb-24 lg:pt-36">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="font-serif text-4xl font-medium italic text-ink">
          A gdzie jest Twój dom?
        </h2>
        <div className="flex flex-col gap-1 text-lg leading-relaxed text-ink-soft">
          <p>Być może tam, gdzie mieszkasz dzisiaj.</p>
          <p>Być może gdzieś, za czym tęsknisz.</p>
          <p>A być może dopiero uczysz się go tworzyć.</p>
        </div>
        <div className="mt-6 flex flex-col items-center gap-1">
          <div className="font-serif text-2xl italic text-ink">
            Dom Wszędzie
          </div>
          <div className="text-xs uppercase tracking-wider text-muted">
            Danuta Stefankiewicz
          </div>
          <div className="mt-1 text-xs text-accent">Premiera: 21.10.2026</div>
        </div>
        <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <button type="button" className="btn-outline">
            E-book — [cena] zł
          </button>
          <button type="button" className="btn-outline">
            Audiobook — [cena] zł
          </button>
          <button type="button" className="btn-accent">
            E-book + audiobook — [cena] zł
          </button>
        </div>
      </div>
    </section>
  );
}
