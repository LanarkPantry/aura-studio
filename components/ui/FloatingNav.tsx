import Container from "@/components/ui/Container";

export default function FloatingNav() {
  return (
    <div className="fixed inset-x-0 top-3 z-50 sm:top-5">
      <Container>
        <div className="mx-auto flex max-w-[760px] items-center justify-between gap-3 rounded-full border border-[rgba(58,42,34,0.12)] bg-[rgba(247,240,232,0.74)] px-3 py-2 shadow-[0_12px_40px_rgba(58,42,34,0.12)] backdrop-blur-xl">
          <a href="/" className="flex items-center gap-3 pl-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--plum)] text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(110,61,90,0.28)]">
              A
            </div>

            <div className="leading-none">
              <p className="font-serif text-[1.15rem] tracking-[-0.03em] text-[var(--ink)]">
                Aura
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                For studios & practitioners
              </p>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="#why"
              className="hidden px-3 py-2 text-[13px] text-[var(--ink-soft)] sm:inline-block"
            >
              Why Aura
            </a>
            <a
              href="#audience"
              className="hidden px-3 py-2 text-[13px] text-[var(--ink-soft)] sm:inline-block"
            >
              Who it’s for
            </a>
            <a
              href="#cta"
              className="rounded-full bg-[var(--ink)] px-4 py-2.5 text-[13px] font-medium text-[var(--paper)] shadow-[0_10px_24px_rgba(58,42,34,0.18)] transition hover:translate-y-[-1px]"
            >
              Request access
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
