export default function FloatingNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex w-fit items-center justify-between gap-6 border border-[rgba(45,34,29,0.08)] bg-[rgba(255,255,255,0.55)] px-4 py-2.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(45,34,29,0.08)]">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 bg-[var(--plum)]" />
          <div className="leading-none">
            <p className="font-serif text-[1.1rem] tracking-[-0.04em]">Aura</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              studio
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#why" className="text-[13px] text-[var(--ink-soft)]">
            Why
          </a>
          <a href="#for" className="text-[13px] text-[var(--ink-soft)]">
            Who
          </a>
        </div>

        <a
          href="#cta"
          className="bg-[var(--ink)] px-4 py-2 text-[13px] text-[var(--paper)] transition hover:-translate-y-0.5"
        >
          Request access
        </a>
      </div>
    </header>
  );
}
