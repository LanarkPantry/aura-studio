import Container from "@/components/ui/Container";

export default function WhyAura() {
  return (
    <section id="why" className="relative pt-16 sm:pt-24">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-t border-[var(--ink)] pt-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Why Aura
            </p>
          </div>

          <div className="grid gap-5">
            <div className="border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_16px_40px_rgba(58,42,34,0.08)] sm:p-7">
              <h2 className="max-w-[18ch] font-serif text-[2rem] leading-[1.02] tracking-[-0.04em] text-[var(--ink)] sm:text-[2.4rem]">
                Most tools force smaller businesses into the wrong shape.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="border border-[var(--line)] bg-[rgba(255,255,255,0.62)] p-5 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Class-first tools
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                  Great for recurring group bookings. Less useful when your
                  business also depends on private care.
                </p>
              </article>

              <article className="translate-y-5 border border-[rgba(110,61,90,0.18)] bg-[rgba(110,61,90,0.06)] p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--plum)]">
                  Aura
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[var(--ink)]">
                  Built for businesses running both classes and appointments —
                  in one system, with one booking experience.
                </p>
              </article>

              <article className="border border-[var(--line)] bg-[rgba(255,255,255,0.62)] p-5 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Appointment tools
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                  Fine for one-to-one scheduling. Not built around classes,
                  capacity, recurring group sessions, and mixed timetables.
                </p>
              </article>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
              <div className="border border-[var(--line)] bg-[rgba(123,139,90,0.08)] p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--sage)]">
                  What Aura brings together
                </p>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[var(--ink)]">
                  <li>Classes and private sessions in the same system</li>
                  <li>A client experience that matches a premium brand</li>
                  <li>
                    Scheduling that works for smaller, more flexible businesses
                  </li>
                </ul>
              </div>

              <div className="border border-[var(--line)] bg-[rgba(201,122,74,0.08)] p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--clay)]">
                  What disappears
                </p>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[var(--ink)]">
                  <li>Splitting bookings across different tools</li>
                  <li>Patchwork admin workflows behind the scenes</li>
                  <li>
                    A client journey that feels disconnected from your business
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
