const items = [
  "jesteś przed przeprowadzką lub właśnie ją masz za sobą",
  "zaczynasz nowy etap życia",
  "mieszkasz w wynajętym miejscu i trudno Ci poczuć, że jest Twoje",
  "urządzasz swoje pierwsze mieszkanie",
  "zmieniłeś miasto, kraj lub sposób życia",
  "chcesz lepiej czuć się w przestrzeni, w której mieszkasz",
  "szukasz poczucia bezpieczeństwa i bycia „u siebie”",
];

export default function ForWhom() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 lg:px-[120px] lg:py-32">
      <div className="mx-auto flex max-w-content flex-col items-center gap-14">
        <div className="text-center">
          <div className="kicker">Dla kogo</div>
          <h2 className="mt-4 font-serif text-3xl font-medium italic text-ink md:text-4xl">
            Ta książka jest dla Ciebie, jeśli…
          </h2>
        </div>
        <ul className="grid w-full max-w-3xl grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item}
              className={`flex gap-4 text-lg leading-snug text-ink-soft ${
                i === items.length - 1
                  ? "sm:col-span-2 sm:justify-center sm:text-center"
                  : ""
              }`}
            >
              <span className="text-accent">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
