export default function FloatingNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <div className="mx-auto flex w-fit min-w-[320px] max-w-[920px] items-center justify-between gap-4 border border-[var(--line)] soft-panel editorial-shadow px-3 py-3 sm:min-w-[760px] sm:px-4">
        <a href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center bg-[var(--plum)] text-[15px] font-medium tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(122,61,90,0.22)]">
            A
          </div>

          <div className="leading-none">
            <div className="brand-serif text-[1.35rem] tracking-[-0.05em] text-[var(--ink)]">
              Aura
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              booking for independent practices
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#why"
            className="hidden px-3 py-2 text-[13px] text-[var(--ink-soft)] md:inline-block"
          >
            Why Aura
          </a>

          <a
            href="#for"
            className="hidden px-3 py-2 text-[13px] text-[var(--ink-soft)] md:inline-block"
          >
            Who it’s for
          </a>

          <a
            href="#cta"
            className="border border-[rgba(45,34,29,0.08)] bg-[var(--ink)] px-4 py-2.5 text-[13px] font-medium text-[var(--paper)] transition hover:-translate-y-0.5"
          >
            Request access
          </a>
        </div>
      </div>
    </header>
  );
}
