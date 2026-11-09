export default function Footer() {
  return (
    <footer className="bg-paper px-6 py-8 md:px-16 lg:px-[120px]">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="text-xs text-muted">© 2026 Danuta Stefankiewicz — „Dom Wszędzie”</div>
        <div className="flex gap-6 text-xs text-muted">
          <a href="/regulamin" className="hover:text-ink">Regulamin</a>
          <a href="/polityka-prywatnosci" className="hover:text-ink">Polityka prywatności</a>
          <a href="/kontakt" className="hover:text-ink">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
