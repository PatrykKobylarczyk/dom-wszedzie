export default function AuthorNote() {
  return (
    <section className="bg-ink px-6 py-24 md:px-16 lg:px-[120px] lg:py-36">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <div className="kicker text-[#C98A9D]">Od autorki</div>
        <p className="font-serif text-2xl italic leading-relaxed text-cream md:text-3xl">
          Nazywam się Danuta Stefankiewicz i napisałam „Dom Wszędzie” dla
          wszystkich, którzy choć raz poczuli się obco w nowym miejscu.
        </p>
        <p className="text-base leading-loose text-[#C9C2B8] md:text-lg">
          Przez lata pracy jako agentka nieruchomości widziałam, jak mocno
          przestrzeń wpływa na nasze emocje i poczucie bezpieczeństwa.
          Dlatego chcę pokazać Ci, że dom to coś więcej niż adres, metraż czy
          własność. To coś, co możemy stworzyć sami.
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-[#C9C2B8]">
          <span>Pierwsze mieszkania.</span>
          <span>Przeprowadzki.</span>
          <span>Pożegnania.</span>
          <span>Rozwody.</span>
          <span>Powroty.</span>
          <span>Nowe początki.</span>
        </div>
        <p className="font-serif text-xl italic text-white md:text-2xl">
          „To jest moje miejsce”.
        </p>
        <p className="text-base text-[#C9C2B8]">
          Dla nich powstała ta książka. I być może również dla Ciebie.
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a href="#fragment" className="btn-outline-light">
            Czytaj fragment
          </a>
          <a href="#fragment-audio" className="btn-outline-light">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7-11-7z" fill="#FAF6F1" />
            </svg>
            Posłuchaj fragmentu
          </a>
        </div>
      </div>
    </section>
  );
}
