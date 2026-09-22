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
- `app/globals.css` — tokeny kolorów/przyciski jako klasy pomocnicze (`.btn-accent`, `.btn-outline`…).
- `tailwind.config.ts` — paleta (`ink`, `cream`, `accent`…) i fonty (Fraunces + Work Sans przez `next/font/google`).
- `public/book-cover.jpg` — okładka książki użyta w sekcji hero.

## Co jeszcze do zrobienia przed publikacją

- **Ceny** — wszystkie miejsca z `[cena]` (w `Pricing.tsx` i `FinalCTA.tsx`) trzeba uzupełnić.
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
