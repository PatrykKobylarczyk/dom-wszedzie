const points = [
  "jak stworzyć domowe ciepło również w wynajętym mieszkaniu",
  "jak łatwiej odnaleźć się w nowym miejscu",
  "jak urządzić przestrzeń, która daje poczucie bezpieczeństwa",
  "jak nadać wnętrzu własną historię i charakter",
  "jak zachować poczucie domu nawet wtedy, gdy życie zmienia Twój adres",
];

export default function Contents() {
  return (
    <section className="bg-cream px-6 py-20 md:px-16 lg:px-[120px] lg:py-32">
      <div className="mx-auto flex max-w-content flex-col gap-10 lg:flex-row lg:gap-24">
        <div className="lg:flex-[0_0_320px]">
          <div className="kicker">W środku</div>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-ink md:text-4xl">
            Co znajdziesz
            <br />
            w książce?
          </h2>
          <p className="mt-5 max-w-xs text-base leading-relaxed text-muted">
            „Dom Wszędzie” łączy praktyczne spojrzenie na przestrzeń z
            opowieścią o zmianach, emocjach i potrzebie przynależności.
          </p>
        </div>
        <div className="flex max-w-2xl flex-1 flex-col gap-6">
          {points.map((point, i) => (
            <div key={point}>
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-xl italic text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-relaxed text-ink-soft">
                  {point}
                </span>
              </div>
              {i < points.length - 1 && <hr className="hair mt-6" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
