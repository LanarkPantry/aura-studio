export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(247,241,235,0.92) 0%, rgba(247,241,235,0.72) 32%, rgba(247,241,235,0.32) 58%, rgba(247,241,235,0.12) 100%), url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute left-[-5%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-[var(--glow)] blur-3xl" />
          <div className="absolute right-[8%] top-[12%] h-[18rem] w-[18rem] rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-[12%] right-[12%] h-[12rem] w-[12rem] rounded-full bg-white/12 blur-3xl" />
        </div>

        <header className="relative z-30 px-4 pt-4 sm:px-6 sm:pt-5">
          <div className="mx-auto flex max-w-[1100px] items-center justify-between rounded-full border border-white/35 bg-[rgba(255,248,243,0.38)] px-3 py-2.5 shadow-[0_14px_40px_rgba(76,56,46,0.14)] backdrop-blur-xl sm:px-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-[rgba(68,49,41,0.58)] text-[1.45rem] text-white shadow-[0_10px_24px_rgba(68,49,41,0.18)]">
                A
              </div>

              <div className="leading-none">
                <div className="brand-serif text-[1.15rem] tracking-[-0.04em] text-[var(--ink)] sm:text-[1.25rem]">
                  Aura Studio
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              <a href="#why" className="text-[14px] text-[var(--ink-soft)]">
                Why Aura
              </a>
              <a href="#who" className="text-[14px] text-[var(--ink-soft)]">
                Who it’s for
              </a>
            </nav>

            <a
              href="#cta"
              className="rounded-full border border-[rgba(91,63,52,0.08)] bg-[rgba(255,249,244,0.82)] px-5 py-3 text-[14px] font-medium text-[var(--button-dark)] shadow-[0_8px_18px_rgba(91,63,52,0.08)] transition hover:-translate-y-0.5"
            >
              Request access
            </a>
          </div>
        </header>

        <div className="relative z-20 mx-auto grid max-w-[1100px] gap-10 px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-10">
          <div className="max-w-[520px]">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[12px]">
              Booking for independent practices
            </p>

            <h1 className="max-w-[9ch] text-[3.3rem] leading-[0.92] tracking-[-0.07em] text-[var(--ink)] sm:text-[4.35rem]">
              Classes and private sessions. One system.
            </h1>

            <p className="mt-6 max-w-[32ch] text-[17px] leading-8 text-[var(--ink-soft)]">
              Booking software for studios, centres, and practitioners who do
              both.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="rounded-full bg-[rgba(255,248,243,0.88)] px-6 py-3.5 text-[15px] font-medium text-[var(--button-dark)] shadow-[0_12px_28px_rgba(91,63,52,0.12)] transition hover:-translate-y-0.5"
              >
                Request access
              </a>

              <a
                href="#why"
                className="rounded-full bg-[rgba(255,248,243,0.62)] px-6 py-3.5 text-[15px] text-[var(--button-dark)] shadow-[0_10px_22px_rgba(91,63,52,0.08)] backdrop-blur-sm transition hover:-translate-y-0.5"
              >
                See why it’s different
              </a>
            </div>
          </div>

          <div className="relative min-h-[600px] sm:min-h-[720px] lg:min-h-[760px]">
            <div className="absolute bottom-[8%] left-[2%] w-[44%]">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(82,60,48,0.18)]">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80"
                  alt="Studio interior"
                  className="h-[320px] w-full object-cover sm:h-[390px]"
                />
              </div>
            </div>

            <div className="absolute left-[36%] top-[25%] w-[38%] rounded-[2rem] border border-white/55 bg-[rgba(255,251,247,0.82)] p-5 shadow-[0_30px_70px_rgba(82,60,48,0.18)] backdrop-blur-xl">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    Timetable
                  </p>
                  <h2 className="mt-2 brand-serif text-[2rem] leading-none tracking-[-0.04em]">
                    This week
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-sm bg-[var(--olive)]/70" />
              </div>

              <div className="space-y-3">
                <div className="rounded-sm border border-[rgba(84,62,51,0.08)] bg-white/65 p-4">
                  <div className="flex items-center justify-between">
                    <p className="brand-serif text-[1.15rem]">Morning Flow</p>
                    <span className="text-[14px] text-[var(--muted)]">
                      Class
                    </span>
                  </div>
                  <p className="mt-1 text-[15px] text-[var(--ink-soft)]">
                    Tue · 8:30 am · 12 places
                  </p>
                </div>

                <div className="rounded-sm border border-[rgba(84,62,51,0.08)] bg-[rgba(244,226,214,0.72)] p-4">
                  <div className="flex items-center justify-between">
                    <p className="brand-serif text-[1.15rem]">
                      Private Session
                    </p>
                    <span className="text-[14px] text-[var(--muted)]">
                      45 mins
                    </span>
                  </div>
                  <p className="mt-1 text-[15px] text-[var(--ink-soft)]">
                    Wed · 10:00 am
                  </p>
                </div>

                <div className="rounded-sm border border-[rgba(84,62,51,0.08)] bg-white/65 p-4">
                  <div className="flex items-center justify-between">
                    <p className="brand-serif text-[1.15rem]">Restore</p>
                    <span className="text-[14px] text-[var(--muted)]">
                      Class
                    </span>
                  </div>
                  <p className="mt-1 text-[15px] text-[var(--ink-soft)]">
                    Thu · 6:00 pm · 16 places
                  </p>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1rem]">
                <img
                  src="https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=900&q=80"
                  alt="Wellness space"
                  className="h-[120px] w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute right-[1%] top-[34%] w-[36%] rounded-[2rem] border border-white/55 bg-[rgba(255,251,247,0.84)] p-5 shadow-[0_30px_70px_rgba(82,60,48,0.18)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                Booking journey
              </p>
              <h3 className="mt-2 brand-serif text-[2rem] leading-none tracking-[-0.04em]">
                Client details
              </h3>

              <div className="mt-5 rounded-sm border border-[rgba(84,62,51,0.08)] bg-white/55 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Selected
                </p>
                <p className="mt-2 brand-serif text-[1.1rem]">
                  Deep Tissue · Fri 1:00 pm
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-sm border border-[rgba(84,62,51,0.08)] bg-white/55 px-4 py-3.5 text-[15px] text-[var(--ink-soft)]">
                  Name
                </div>
                <div className="rounded-sm border border-[rgba(84,62,51,0.08)] bg-white/55 px-4 py-3.5 text-[15px] text-[var(--ink-soft)]">
                  Email
                </div>
              </div>

              <button className="mt-4 w-full rounded-sm bg-[var(--button-dark)] px-4 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(91,63,52,0.24)]">
                Complete booking
              </button>

              <p className="mt-4 text-[14px] text-[var(--ink-soft)]">
                Secure and seamless
              </p>
            </div>

            <div className="absolute bottom-[3%] left-[0] max-w-[320px]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Designed for how you actually work
              </p>

              <div className="mt-5 flex gap-4">
                {[
                  ["⌘", "Classes"],
                  ["◫", "Appointments"],
                  ["◌", "Clients"],
                  ["≡", "All in one"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-[rgba(255,255,255,0.42)] bg-[rgba(68,49,41,0.28)] text-[1.2rem] text-white backdrop-blur-md">
                      {icon}
                    </div>
                    <span className="text-[13px] text-[var(--ink-soft)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[6%] right-[2%] max-w-[250px] text-right">
              <p className="text-[2rem] leading-[1.2] tracking-[-0.03em] text-[var(--ink-soft)]">
                Beautiful for your clients.
              </p>
              <p className="mt-2 text-[2rem] leading-[1.2] tracking-[-0.03em] text-[var(--ink-soft)]">
                Powerful for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="px-4 pb-20 pt-4 sm:px-6">
        <div className="mx-auto max-w-[1100px] border-t border-[var(--line)] pt-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
            Why Aura
          </p>
          <h2 className="mt-4 max-w-[14ch] text-[2.2rem] leading-[0.98] tracking-[-0.05em] sm:text-[3rem]">
            Most booking tools still force smaller practices into the wrong
            shape.
          </h2>
          <p className="mt-5 max-w-[44ch] text-[17px] leading-8 text-[var(--ink-soft)]">
            Aura is built for practices offering classes, appointments, or both
            — without stitching together multiple systems behind the scenes.
          </p>
        </div>
      </section>

      <section id="who" className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-[1100px] border-t border-[var(--line)] pt-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
            Who it’s for
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Studios",
                copy: "For businesses balancing timetabled classes, memberships, and private bookings without wanting a bloated setup.",
              },
              {
                title: "Centres",
                copy: "For shared spaces with multiple practitioners, mixed service types, and a need for something more coherent than patchwork software.",
              },
              {
                title: "Solo practitioners",
                copy: "For independent practitioners offering both sessions and small group experiences in one brand.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/60 bg-[rgba(255,251,247,0.72)] p-6 shadow-[0_18px_42px_rgba(82,60,48,0.08)] backdrop-blur-xl"
              >
                <h3 className="brand-serif text-[2rem] leading-none tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-[var(--ink-soft)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-[1100px] rounded-[2rem] border border-white/60 bg-[rgba(255,251,247,0.72)] p-8 shadow-[0_20px_50px_rgba(82,60,48,0.1)] backdrop-blur-xl sm:p-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
            Early access
          </p>
          <h2 className="mt-4 max-w-[14ch] text-[2.2rem] leading-[0.98] tracking-[-0.05em] sm:text-[3rem]">
            Booking software for businesses that have outgrown the usual tools.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[17px] leading-8 text-[var(--ink-soft)]">
            If you run classes, appointments, or a mix of both, Aura is being
            shaped for the way smaller practices actually operate.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@aurastudio.co"
              className="rounded-full bg-[var(--button-dark)] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(91,63,52,0.22)]"
            >
              Request access
            </a>
            <a
              href="#"
              className="rounded-full bg-white/65 px-6 py-3.5 text-[15px] text-[var(--button-dark)] shadow-[0_10px_22px_rgba(91,63,52,0.08)]"
            >
              Preview the product
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
