export default function Hero() {
  return (
    <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f6efe7,white)]" />

      <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="max-w-[520px]">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
            Booking for independent practices
          </p>

          <h1 className="font-serif text-[2.8rem] leading-[0.92] tracking-[-0.06em] sm:text-[3.8rem]">
            Classes and private sessions. One system.
          </h1>

          <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-[var(--ink-soft)]">
            Built for studios, centres, and practitioners running both — without
            forcing your business into the wrong shape.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="bg-[var(--plum)] px-5 py-3 text-[14px] text-white shadow-[0_10px_25px_rgba(122,61,90,0.2)]"
            >
              Request access
            </a>

            <a
              href="#why"
              className="border border-[var(--line)] px-5 py-3 text-[14px]"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="relative min-h-[460px] sm:min-h-[540px]">
          <div
            className="absolute right-0 top-0 h-[72%] w-[72%] bg-cover bg-center shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80')",
            }}
          />

          <div className="absolute left-0 top-[120px] w-[58%] border border-[var(--line)] bg-white/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Timetable
            </p>

            <div className="mt-3 space-y-3 text-[14px]">
              <div className="flex items-center justify-between">
                <span>Morning Flow</span>
                <span className="text-[var(--muted)]">Class</span>
              </div>
              <div className="text-[13px] text-[var(--muted)]">
                Tue · 8:30 am · 12 places
              </div>

              <div className="h-px bg-[var(--line)]" />

              <div className="flex items-center justify-between">
                <span>Private Session</span>
                <span className="text-[var(--muted)]">45 min</span>
              </div>
              <div className="text-[13px] text-[var(--muted)]">
                Wed · 10:00 am
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 right-4 w-[52%] border border-[var(--line)] bg-[rgba(255,255,255,0.92)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Booking journey
            </p>

            <h3 className="mt-2 font-serif text-[1.5rem]">Client details</h3>

            <div className="mt-4 space-y-2">
              <div className="border border-[var(--line)] px-3 py-3 text-[13px] text-[var(--muted)]">
                Name
              </div>
              <div className="border border-[var(--line)] px-3 py-3 text-[13px] text-[var(--muted)]">
                Email
              </div>
            </div>

            <button className="mt-4 w-full bg-[var(--ink)] px-4 py-3 text-[13px] text-[var(--paper)]">
              Complete booking
            </button>
          </div>

          <div className="absolute bottom-6 left-[20%] h-16 w-16 bg-[var(--clay)]" />
        </div>
      </div>
    </section>
  );
}
