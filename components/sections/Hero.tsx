import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-40px] top-[120px] h-[220px] w-[220px] rounded-full bg-[rgba(214,166,161,0.22)] blur-3xl" />
        <div className="absolute right-[-60px] top-[90px] h-[260px] w-[260px] rounded-full bg-[rgba(110,61,90,0.12)] blur-3xl" />
        <div className="absolute left-[18%] top-[420px] h-[180px] w-[180px] rounded-full bg-[rgba(201,122,74,0.16)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="max-w-[520px] pt-4">
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Booking for studios, centres, and solo practitioners
            </p>

            <h1 className="max-w-[10ch] font-serif text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-[var(--ink)] sm:text-[3.25rem]">
              One system for classes and private sessions.
            </h1>

            <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-[var(--ink-soft)] sm:text-[16px]">
              Aura is built for smaller businesses that don’t fit into a single
              booking model — from group classes to one-to-one care.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="rounded-full bg-[var(--plum)] px-5 py-3 text-[14px] font-medium text-white shadow-[0_12px_28px_rgba(110,61,90,0.24)] transition hover:translate-y-[-1px]"
              >
                Request access
              </a>
              <a
                href="#why"
                className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.7)] px-5 py-3 text-[14px] text-[var(--ink)]"
              >
                See why it’s different
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-[12px] text-[var(--muted)]">
              <span className="rounded-full border border-[var(--line)] px-3 py-1.5">
                Classes
              </span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1.5">
                Appointments
              </span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1.5">
                Client flow
              </span>
            </div>
          </div>

          <div className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[680px]">
            <div className="absolute left-[4%] top-[24px] w-[56%] border border-[rgba(58,42,34,0.12)] bg-[rgba(255,255,255,0.76)] p-3 shadow-[0_18px_50px_rgba(58,42,34,0.12)] backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                This week
              </p>
              <div className="mt-3 space-y-2.5">
                <div className="border border-[rgba(58,42,34,0.08)] bg-[var(--surface)] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[var(--ink)]">
                      Morning Flow
                    </p>
                    <span className="text-[11px] text-[var(--sage)]">
                      Class
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">
                    Tue · 8:30 am · Emma
                  </p>
                </div>

                <div className="border border-[rgba(58,42,34,0.08)] bg-[rgba(245,237,229,0.9)] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[var(--ink)]">
                      Private Session
                    </p>
                    <span className="text-[11px] text-[var(--clay)]">
                      Appointment
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">
                    Wed · 10:00 am · 45 mins
                  </p>
                </div>

                <div className="border border-[rgba(58,42,34,0.08)] bg-[var(--surface)] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[var(--ink)]">
                      Evening Restore
                    </p>
                    <span className="text-[11px] text-[var(--sage)]">
                      Class
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">
                    Thu · 6:00 pm · Sophie
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-[3%] top-[120px] w-[64%] border border-[rgba(58,42,34,0.12)] bg-[var(--surface)] p-4 shadow-[0_22px_60px_rgba(58,42,34,0.14)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Booking flow
                  </p>
                  <h3 className="mt-1 font-serif text-[1.45rem] tracking-[-0.03em] text-[var(--ink)]">
                    Client details
                  </h3>
                </div>
                <div className="h-10 w-10 bg-[var(--olive-wash)]" />
              </div>

              <div className="mt-4 space-y-3">
                <div className="border border-[var(--line)] bg-[rgba(247,240,232,0.75)] p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Selected
                  </p>
                  <p className="mt-2 text-[14px] text-[var(--ink)]">
                    Pilates Foundations · Fri 12:30 pm
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="border border-[var(--line)] bg-white px-3 py-3 text-[13px] text-[var(--muted)]">
                    Name
                  </div>
                  <div className="border border-[var(--line)] bg-white px-3 py-3 text-[13px] text-[var(--muted)]">
                    Email
                  </div>
                </div>

                <button className="w-full bg-[var(--ink)] px-4 py-3 text-[13px] font-medium text-[var(--paper)]">
                  Complete booking
                </button>
              </div>
            </div>

            <div className="absolute bottom-[38px] left-[10%] w-[42%] border border-[rgba(58,42,34,0.1)] bg-[var(--plum)] p-4 text-white shadow-[0_18px_50px_rgba(110,61,90,0.24)]">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                Why it matters
              </p>
              <p className="mt-2 text-[14px] leading-6 text-white/90">
                No patchwork setup. No separate systems for classes and private
                bookings.
              </p>
            </div>

            <div className="absolute bottom-[0] right-[10%] h-[88px] w-[88px] bg-[var(--clay)] shadow-[0_14px_40px_rgba(201,122,74,0.26)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
