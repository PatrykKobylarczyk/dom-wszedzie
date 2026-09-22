export default function AboutAuthor() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 lg:px-[120px] lg:py-32">
      <div className="mx-auto flex max-w-content flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-22 lg:text-left">
        <div className="flex flex-[0_0_240px] justify-center">
          <div className="flex h-60 w-60 items-center justify-center rounded-full border border-line bg-accent-soft">
            <span className="text-center text-xs uppercase tracking-wider text-accent">
              Zdjęcie
              <br />
              autorki
            </span>
          </div>
        </div>
        <div className="max-w-2xl">
          <div className="kicker">O autorce</div>
          <h2 className="mt-3 mb-6 font-serif text-3xl font-medium text-ink">
            Danuta Stefankiewicz
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Agentka nieruchomości, absolwentka Dziennikarstwa i Komunikacji
              Społecznej Uniwersytetu Łódzkiego oraz plastyczka.
            </p>
            <p>
              Przez lata związana z „Gazetą Wyborczą” i Onet.pl. Od 2014 roku
              zawodowo związana z rynkiem nieruchomości.
            </p>
            <p>
              Przez ten czas obserwowała nie tylko mieszkania i domy, ale
              przede wszystkim ludzi stojących przed zmianą: przeprowadzką,
              sprzedażą, nowym początkiem czy pożegnaniem z ważnym miejscem.
            </p>
            <p className="italic text-accent-deep">
              Z tych doświadczeń powstał „Dom Wszędzie” — książka o tym, jak
              stworzyć swoje miejsce nawet wtedy, gdy życie zmienia adres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
