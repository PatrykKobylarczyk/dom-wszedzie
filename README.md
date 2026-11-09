# Dom Wszędzie — landing page

Landing page do przedsprzedaży e-booka i audiobooka „Dom Wszędzie” (Danuta Stefankiewicz).
Zbudowany w Next.js (App Router) + TypeScript + Tailwind CSS, na podstawie projektu graficznego.

## Uruchomienie

```bash
npm install
npm run dev
```

Strona wystartuje pod `http://localhost:3000`.

## Struktura

- `app/page.tsx` — strona główna, spina wszystkie sekcje w kolejności z briefu.
- `components/` — jedna sekcja = jeden komponent (Hero, ProblemSection, AboutBook, ForWhom,
  Contents, Pricing, AuthorNote, AboutAuthor, FAQ, FinalCTA, Footer).
- `lib/config.ts` — **data premiery i ceny** (jedno miejsce; zmiana tu aktualizuje całą stronę).
- `components/Section.tsx` — sekcje na przemian białe/czarne.
- `app/globals.css` — przyciski (`.btn-sky` błękit z okładki, `.btn-line`) i `.kicker`.
- `tailwind.config.ts` — paleta (`ink`, `sky`, `crimson`…) i fonty (Allura — pismo ręczne w nagłówkach, Nunito Sans w tekście; `app/layout.tsx`).
- `public/book-cover.jpg` — okładka książki użyta w sekcji hero.

## Co jeszcze do zrobienia przed publikacją

- **Ceny i data** — w `lib/config.ts` (77/77/99 zł w przedsprzedaży, 99/99/129 zł po premierze; premiera 6.12.2026).
- **Płatności** — przyciski CTA są na razie wizualne, bez integracji (zgodnie z ustaleniami). Do podłączenia:
  Stripe / Przelewy24 / PayU, w zależności od wybranego dostawcy.
- **Automatyczne potwierdzenie zakupu** — razem z integracją płatności.
- **Fragmenty** — linki „Czytaj fragment” / „Posłuchaj fragmentu” w `AuthorNote.tsx` prowadzą na razie donikąd (`#fragment`),
  trzeba podpiąć realne pliki/podglądy.
- **Zdjęcie autorki** — obecnie placeholder w `AboutAuthor.tsx`, do podmiany na plik w `public/`.
- **FAQ** — dwie odpowiedzi (format e-booka, sposób dostawy audiobooka) czekają na doprecyzowanie.
- **Regulamin / polityka prywatności / kontakt** — strony w stopce (`/regulamin`, `/polityka-prywatnosci`, `/kontakt`)
  jeszcze nie istnieją, linki są przygotowane pod przyszłe podstrony.
- **Przełącznik PRZEDSPRZEDAŻ → KUP TERAZ** — obecnie ręczna flaga `preorderMode` w `app/page.tsx`
  (ustawiona na `true`). W dniu premiery zmień na `false`, albo zastąp porównaniem daty.
