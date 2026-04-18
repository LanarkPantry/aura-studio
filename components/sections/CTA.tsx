import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden border border-[rgba(58,42,34,0.12)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.42))] p-6 shadow-[0_20px_70px_rgba(58,42,34,0.1)] backdrop-blur-sm sm:p-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-40px] top-[20px] h-[160px] w-[160px] rounded-full bg-[rgba(214,166,161,0.16)] blur-3xl" />
            <div className="absolute right-[8%] top-[-20px] h-[180px] w-[180px] rounded-full bg-[rgba(110,61,90,0.14)] blur-3xl" />
            <div className="absolute bottom-[-30px] right-[18%] h-[140px] w-[140px] rounded-full bg-[rgba(201,122,74,0.14)] blur-3xl" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[700px]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Early access
              </p>
              <h2 className="mt-3 max-w-[16ch] font-serif text-[2.1rem] leading-[1] tracking-[-0.05em] text-[var(--ink)] sm:text-[2.8rem]">
                Booking software for businesses that don’t fit the usual model.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-7 text-[var(--ink-soft)]">
                If you run classes, appointments, or a mix of both, Aura is
                being shaped for the way smaller studios and practices actually
                operate.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@aura-studio.co"
                className="bg-[var(--ink)] px-5 py-3 text-[14px] font-medium text-[var(--paper)] shadow-[0_12px_28px_rgba(58,42,34,0.18)] transition hover:translate-y-[-1px]"
              >
                Request access
              </a>
              <a
                href="/booking"
                className="border border-[var(--line)] bg-[rgba(255,255,255,0.7)] px-5 py-3 text-[14px] text-[var(--ink)]"
              >
                View booking demo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
