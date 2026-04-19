export default function Page() {
  const features = [
    {
      eyebrow: "One calendar",
      title: "Classes and private sessions in one place",
      copy: "Run timetabled classes, one-to-one appointments, and mixed offerings without splitting your business across multiple tools.",
    },
    {
      eyebrow: "Client journey",
      title: "A calmer booking experience for clients",
      copy: "Make it easy for clients to discover sessions, choose times, and book without friction on mobile or desktop.",
    },
    {
      eyebrow: "Built for smaller practices",
      title: "Designed for the way real studios actually operate",
      copy: "Aura is for studios, centres, and independent practitioners who need something elegant, focused, and manageable.",
    },
  ];

  const audience = [
    {
      title: "Studios",
      copy: "For practices running regular classes alongside premium private bookings.",
    },
    {
      title: "Centres",
      copy: "For shared wellness spaces managing multiple practitioners, rooms, and service types.",
    },
    {
      title: "Solo practitioners",
      copy: "For independent businesses offering both appointments and small group sessions.",
    },
  ];

  const highlights = [
    "Classes",
    "Appointments",
    "Clients",
    "Payments",
    "Simple admin",
    "Beautiful UX",
  ];

  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(224,205,190,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(210,219,200,0.28),transparent_30%),linear-gradient(180deg,#f8f2ed_0%,#f6efe9_38%,#f4ede7_100%)]" />
        <div className="absolute left-[-6rem] top-[-4rem] -z-10 h-48 w-48 rounded-full bg-white/40 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute right-[-4rem] top-[8rem] -z-10 h-40 w-40 rounded-full bg-[var(--glow)] blur-3xl sm:h-64 sm:w-64" />

        <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-[rgba(255,250,246,0.8)] px-4 py-3 shadow-[0_12px_30px_rgba(79,60,47,0.10)] backdrop-blur-xl">
            <a href="#" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--button-dark)] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(79,60,47,0.22)]">
                A
              </div>
              <div className="leading-none">
                <div className="brand-serif text-[1.1rem] tracking-[-0.04em]">
                  Aura Studio
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Booking software
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              <a
                href="#product"
                className="text-[14px] text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                Product
              </a>
              <a
                href="#why"
                className="text-[14px] text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                Why Aura
              </a>
              <a
                href="#who"
                className="text-[14px] text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                Who it’s for
              </a>
              <a
                href="#cta"
                className="rounded-full bg-[var(--button-dark)] px-5 py-3 text-[14px] font-medium text-white shadow-[0_10px_24px_rgba(79,60,47,0.18)] transition hover:-translate-y-0.5"
              >
                Request access
              </a>
            </nav>

            <a
              href="#cta"
              className="rounded-full bg-[rgba(255,255,255,0.8)] px-4 py-2.5 text-[13px] font-medium text-[var(--button-dark)] shadow-[0_8px_18px_rgba(79,60,47,0.08)] md:hidden"
            >
              Access
            </a>
          </div>
        </header>

        <section className="px-4 pb-12 pt-8 sm:px-6 sm:pt-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[12px]">
                Booking for independent practices
              </p>

              <h1 className="mt-4 max-w-[10ch] text-[2.95rem] leading-[0.92] tracking-[-0.07em] sm:text-[4.6rem]">
                Classes and private sessions. One system.
              </h1>

              <p className="mt-5 max-w-[34ch] text-[17px] leading-8 text-[var(--ink-soft)] sm:text-[18px]">
                Aura is booking software for studios, centres, and practitioners
                who offer classes, appointments, or both.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--button-dark)] px-6 py-4 text-[15px] font-medium text-white shadow-[0_14px_30px_rgba(79,60,47,0.18)] transition hover:-translate-y-0.5"
                >
                  Request access
                </a>
                <a
                  href="#product"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(79,60,47,0.08)] bg-white/70 px-6 py-4 text-[15px] font-medium text-[var(--button-dark)] shadow-[0_10px_24px_rgba(79,60,47,0.08)] backdrop-blur-sm transition hover:-translate-y-0.5"
                >
                  Explore the product
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/70 bg-white/65 px-3.5 py-2 text-[13px] text-[var(--ink-soft)] shadow-[0_6px_14px_rgba(79,60,47,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/70 bg-[rgba(255,250,246,0.72)] p-3 shadow-[0_25px_60px_rgba(79,60,47,0.14)] backdrop-blur-xl sm:p-4">
                <div className="overflow-hidden rounded-[1.6rem]">
                  <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1400&q=80"
                    alt="Wellness booking experience"
                    className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[380px]"
                  />
                </div>

                <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
                  <div className="rounded-[1.4rem] border border-[rgba(79,60,47,0.08)] bg-white/80 p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Timetable
                    </p>
                    <h2 className="mt-2 brand-serif text-[1.8rem] leading-none tracking-[-0.04em]">
                      This week
                    </h2>
                    <div className="mt-4 space-y-2.5">
                      <div className="rounded-[1rem] bg-[rgba(244,236,229,0.8)] p-3">
                        <p className="brand-serif text-[1.1rem]">
                          Morning Flow
                        </p>
                        <p className="mt-1 text-[14px] text-[var(--ink-soft)]">
                          Tue · 8:30 am · 12 places
                        </p>
                      </div>
                      <div className="rounded-[1rem] bg-white p-3">
                        <p className="brand-serif text-[1.1rem]">Deep Tissue</p>
                        <p className="mt-1 text-[14px] text-[var(--ink-soft)]">
                          Wed · 10:00 am · 45 mins
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-[rgba(79,60,47,0.08)] bg-white/80 p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Booking journey
                    </p>
                    <h3 className="mt-2 brand-serif text-[1.8rem] leading-none tracking-[-0.04em]">
                      Client details
                    </h3>

                    <div className="mt-4 rounded-[1rem] bg-[rgba(244,236,229,0.8)] p-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        Selected
                      </p>
                      <p className="mt-2 brand-serif text-[1.05rem]">
                        Private Session · Fri 1:00 pm
                      </p>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      <div className="rounded-[1rem] border border-[rgba(79,60,47,0.08)] bg-white px-3 py-3 text-[14px] text-[var(--ink-soft)]">
                        Name
                      </div>
                      <div className="rounded-[1rem] border border-[rgba(79,60,47,0.08)] bg-white px-3 py-3 text-[14px] text-[var(--ink-soft)]">
                        Email
                      </div>
                    </div>

                    <button className="mt-3 w-full rounded-[1rem] bg-[var(--button-dark)] px-4 py-3 text-[14px] font-medium text-white shadow-[0_10px_24px_rgba(79,60,47,0.18)]">
                      Complete booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-[rgba(255,250,246,0.7)] p-5 shadow-[0_20px_50px_rgba(79,60,47,0.08)] backdrop-blur-xl sm:p-8">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Product direction
              </p>
              <h2 className="mt-4 text-[2rem] leading-[0.98] tracking-[-0.05em] sm:text-[3rem]">
                A calmer system for practices that do more than one thing.
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-8 text-[var(--ink-soft)] sm:text-[17px]">
                The goal isn’t feature bloat. It’s clarity. Aura should feel
                premium on the surface and sensible underneath for the people
                actually running the business.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {features.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[rgba(79,60,47,0.08)] bg-white/80 p-5 shadow-[0_14px_30px_rgba(79,60,47,0.06)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 brand-serif text-[1.7rem] leading-[1.02] tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto max-w-6xl grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/70 bg-[rgba(255,250,246,0.72)] p-6 shadow-[0_20px_50px_rgba(79,60,47,0.08)] backdrop-blur-xl sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Why Aura
              </p>
              <h2 className="mt-4 text-[2rem] leading-[0.98] tracking-[-0.05em] sm:text-[3rem]">
                Most booking tools still make smaller practices compromise.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_20px_50px_rgba(79,60,47,0.08)] sm:p-8">
              <p className="text-[16px] leading-8 text-[var(--ink-soft)] sm:text-[17px]">
                Studios and independent practitioners often need both class
                scheduling and appointment booking, but most systems are built
                for one or the other. Aura is moving toward a cleaner middle
                ground: thoughtful, elegant, and practical.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-[rgba(244,236,229,0.7)] p-4">
                  <p className="brand-serif text-[1.2rem]">Less patchwork</p>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--ink-soft)]">
                    Fewer disconnected tools behind the scenes.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-[rgba(244,236,229,0.7)] p-4">
                  <p className="brand-serif text-[1.2rem]">Mobile first</p>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--ink-soft)]">
                    A polished experience where most clients actually book.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-[rgba(244,236,229,0.7)] p-4">
                  <p className="brand-serif text-[1.2rem]">Premium feel</p>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--ink-soft)]">
                    Calm visuals that suit wellness and service brands.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-[rgba(244,236,229,0.7)] p-4">
                  <p className="brand-serif text-[1.2rem]">
                    Operational clarity
                  </p>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--ink-soft)]">
                    Simpler admin for real working businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="who" className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
              Who it’s for
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {audience.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/70 bg-[rgba(255,250,246,0.78)] p-6 shadow-[0_18px_42px_rgba(79,60,47,0.08)] backdrop-blur-xl"
                >
                  <h3 className="brand-serif text-[2rem] leading-none tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="px-4 pb-28 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,250,246,0.92),rgba(244,236,229,0.92))] p-6 shadow-[0_24px_60px_rgba(79,60,47,0.10)] sm:p-10">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Early access
              </p>
              <h2 className="mt-4 text-[2.1rem] leading-[0.98] tracking-[-0.05em] sm:text-[3.2rem]">
                Booking software for practices that have outgrown the usual
                tools.
              </h2>
              <p className="mt-5 max-w-[42ch] text-[16px] leading-8 text-[var(--ink-soft)] sm:text-[17px]">
                Aura is being shaped for modern wellness businesses that want a
                better client experience and a calmer operational system.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@aurastudio.co"
                className="inline-flex items-center justify-center rounded-full bg-[var(--button-dark)] px-6 py-4 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(79,60,47,0.18)] transition hover:-translate-y-0.5"
              >
                Request access
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-4 text-[15px] font-medium text-[var(--button-dark)] shadow-[0_10px_24px_rgba(79,60,47,0.08)] transition hover:-translate-y-0.5"
              >
                Preview the product
              </a>
            </div>
          </div>
        </section>

        <nav className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
          <div className="mx-auto flex max-w-md items-center justify-between rounded-full border border-white/70 bg-[rgba(255,250,246,0.88)] px-3 py-2 shadow-[0_18px_40px_rgba(79,60,47,0.16)] backdrop-blur-xl">
            <a
              href="#"
              className="flex min-w-[64px] flex-col items-center gap-1 rounded-full px-3 py-2 text-[11px] text-[var(--ink-soft)]"
            >
              <span className="text-[16px]">○</span>
              <span>Home</span>
            </a>
            <a
              href="#product"
              className="flex min-w-[64px] flex-col items-center gap-1 rounded-full px-3 py-2 text-[11px] text-[var(--ink-soft)]"
            >
              <span className="text-[16px]">□</span>
              <span>Product</span>
            </a>
            <a
              href="#who"
              className="flex min-w-[64px] flex-col items-center gap-1 rounded-full px-3 py-2 text-[11px] text-[var(--ink-soft)]"
            >
              <span className="text-[16px]">△</span>
              <span>Who</span>
            </a>
            <a
              href="#cta"
              className="flex min-w-[78px] flex-col items-center gap-1 rounded-full bg-[var(--button-dark)] px-4 py-2 text-[11px] text-white shadow-[0_8px_18px_rgba(79,60,47,0.18)]"
            >
              <span className="text-[16px]">✦</span>
              <span>Access</span>
            </a>
          </div>
        </nav>
      </div>
    </main>
  );
}
