// Jedno miejsce na dane, które będą się zmieniać (data premiery, ceny).

// Data premiery — zmień tu, a zaktualizuje się cała strona.
export const PREMIERE_LONG = "6 grudnia 2026";
export const PREMIERE_SHORT = "06.12.2026";

// Ceny w złotych: w przedsprzedaży i po premierze.
export const PRICES = {
  ebook: { presale: 77, regular: 99 },
  audiobook: { presale: 77, regular: 99 },
  bundle: { presale: 99, regular: 129 },
} as const;

export type ProductKey = keyof typeof PRICES;
