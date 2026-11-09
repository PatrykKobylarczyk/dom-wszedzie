import Section from "./Section";

const items = [
  ["Masz gdzie mieszkać, ale nie czujesz, że jesteś u siebie.", "Brakuje Ci czegoś, czego nie potrafisz nazwać."],
  ["Zaczynasz nowy rozdział życia.", "Przeprowadzasz się, zmieniasz miasto, kończysz związek albo próbujesz odnaleźć siebie w nowej rzeczywistości."],
  ["Marzysz o domu, który będzie Twoim azylem.", "Miejscem, w którym naprawdę odpoczywasz, odzyskujesz równowagę i możesz być sobą."],
  ["Chcesz, żeby Twoje wnętrze miało duszę.", "Nie było tylko zbiorem pięknych mebli, ale opowiadało Twoją historię, przechowywało wspomnienia i budziło dobre emocje."],
  ["Mieszkasz w wynajętym mieszkaniu lub tymczasowej przestrzeni", "i chcesz poczuć się w niej jak u siebie, bez czekania na własne cztery ściany."],
  ["Czujesz, że coś w Twoim otoczeniu Ci nie służy.", "Chcesz zrozumieć, jak światło, kolory, zapachy wpływają na Twój dobrostan."],
  ["Wiesz, że szczęście nie zależy od metrażu ani tym bardziej od pieniędzy.", "Szukasz prostych sposobów, by stworzyć miejsce pełne spokoju, ciepła i autentyczności."],
];

export default function ForWhom() {
  return (
    <Section tone="dark">
      <div className="mx-auto flex max-w-content flex-col items-center gap-14">
        <div className="text-center">
          <div className="kicker">Dla kogo</div>
          <h2 className="mt-3 font-script text-6xl text-white md:text-7xl">
            Ta książka jest dla Ciebie, jeśli…
          </h2>
        </div>
        <ul className="grid w-full max-w-4xl grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
          {items.map(([lead, rest]) => (
            <li key={lead} className="flex gap-4 leading-relaxed">
              <span aria-hidden className="text-sky">—</span>
              <span className="text-white/80">
                <strong className="font-semibold text-white">{lead}</strong> {rest}
              </span>
            </li>
          ))}
        </ul>
        <div className="max-w-2xl text-center text-lg leading-relaxed text-white/80">
          <p>
            Nie musisz mieć swojego mieszkania, wielkiego budżetu ani poukładanego życia, żeby
            stworzyć miejsce, w którym poczujesz się dobrze.
          </p>
          <p className="mt-4 font-script text-5xl text-white">
            Bo dom nie ma być idealny. Wystarczy, że będzie Twój.
          </p>
        </div>
      </div>
    </Section>
  );
}
