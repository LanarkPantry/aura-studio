export default function Page() {
  const featureCards = [
    {
      eyebrow: "Flexible setup",
      title: "Run classes, appointments, or both",
      copy: "Aura supports businesses with timetabled classes, private bookings, or a mix of both — without forcing you into separate systems.",
      shape: "arch",
    },
    {
      eyebrow: "Built to grow",
      title: "Add teachers, practitioners, and locations with ease",
      copy: "Whether you run solo or manage a growing team, Aura is designed to handle more people, more sessions, and more complexity without becoming awkward.",
      shape: "circle",
    },
    {
      eyebrow: "Fairer growth",
      title: "Grow before pricing becomes a problem",
      copy: "The idea is simple: you should be able to build momentum, grow your client base, and expand your offering before scale starts creating financial penalty.",
      shape: "pill",
    },
  ];

  const audience = [
    {
      title: "Studios",
      copy: "For businesses running regular class schedules alongside private sessions, workshops, or memberships.",
    },
    {
      title: "Centres",
      copy: "For shared spaces coordinating multiple teachers, practitioners, rooms, and booking types.",
    },
    {
      title: "Independent practitioners",
      copy: "For solo businesses that need room to offer one-to-one sessions, classes, or both under one brand.",
    },
  ];

  const adminStats = [
    { label: "Today’s bookings", value: "28" },
    { label: "Active practitioners", value: "6" },
    { label: "Class fill rate", value: "84%" },
    { label: "New clients", value: "5" },
  ];

  const upcoming = [
    {
      title: "Morning Flow",
      time: "8:30 am",
      meta: "12 booked · Maya teaching",
    },
    {
      title: "Private Session",
      time: "11:00 am",
      meta: "1:1 · Lena Patel",
    },
    {
      title: "Evening Restore",
      time: "6:00 pm",
      meta: "18 booked · Waitlist on",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#f7f6f2_0%,#f4f1ec_38%,#f8f5f1_100%)]" />
        <div className="absolute left-[-6rem] top-[-5rem] -z-10 h-56 w-56 rounded-full bg-[rgba(214,228,221,0.9)] blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute right-[-5rem] top-[8rem] -z-10 h-56 w-56 rounded-full bg-[rgba(227,220,236,0.78)] blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-[12rem] left-[12%] -z-10 h-40 w-40 rounded-full bg-[rgba(240,230,210,0.72)] blur-3xl" />

        <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-[rgba(255,255,255,0.7)] px-4 py-3 shadow-[0_14px_34px_rgba(94,109,105,0.10)] backdrop-blur-xl">
            <a href="#" className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(92,122,114,0.95)] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(92,122,114,0.22)]">
                A
              </div>
              <div className="leading-none">
                <div className="brand-serif text-[1.15rem] tracking-[-0.04em] text-[var(--ink)]">
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
                href="#overview"
                className="text-[14px] text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                Studio overview
              </a>
              <a
                href="#who"
                className="text-[14px] text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                Who it’s for
              </a>
              <a
                href="#cta"
                className="rounded-full bg-[rgba(92,122,114,0.95)] px-5 py-3 text-[14px] font-medium text-white shadow-[0_10px_24px_rgba(92,122,114,0.18)] transition hover:-translate-y-0.5"
              >
                Request access
              </a>
            </nav>

            <a
              href="#cta"
              className="rounded-full bg-white/80 px-4 py-2.5 text-[13px] font-medium text-[rgba(92,122,114,1)] shadow-[0_8px_18px_rgba(94,109,105,0.08)] md:hidden"
            >
              Access
            </a>
          </div>
        </header>

        <section className="px-4 pb-12 pt-8 sm:px-6 sm:pt-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[12px]">
                Booking for modern wellness businesses
              </p>

              <h1 className="mt-4 max-w-[11ch] text-[3rem] leading-[0.92] tracking-[-0.075em] text-[var(--ink)] sm:text-[4.9rem]">
                Flexible booking software for classes, appointments, and growth.
              </h1>

              <p className="mt-5 max-w-[34ch] text-[17px] leading-8 text-[var(--ink-soft)] sm:text-[18px]">
                Aura gives studios, centres, and practitioners one system for
                classes, private sessions, multiple team members, and day-to-day
                operations — without making growth feel expensive too early.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-[rgba(92,122,114,0.95)] px-6 py-4 text-[15px] font-medium text-white shadow-[0_14px_30px_rgba(92,122,114,0.18)] transition hover:-translate-y-0.5"
                >
                  Request access
                </a>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/72 px-6 py-4 text-[15px] font-medium text-[var(--ink)] shadow-[0_10px_24px_rgba(94,109,105,0.08)] backdrop-blur-sm transition hover:-translate-y-0.5"
                >
                  View studio overview
                </a>
              </div>

              <div className="mt-8 max-w-[36ch] rounded-[1.4rem] border border-white/80 bg-white/60 p-4 shadow-[0_10px_24px_rgba(94,109,105,0.06)]">
                <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Why it matters
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[var(--ink-soft)]">
                  Many booking tools work well for one model only. Aura is aimed
                  at businesses that need flexibility from the start — and room
                  to grow before pricing starts working against them.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/80 bg-[rgba(255,255,255,0.58)] p-3 shadow-[0_24px_60px_rgba(94,109,105,0.13)] backdrop-blur-xl sm:p-4">
                <div className="overflow-hidden rounded-[2rem_2rem_1.2rem_1.2rem]">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80"
                    alt="Yoga class in a calm studio"
                    className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                  />
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[2rem_2rem_1.2rem_1.2rem] border border-[rgba(92,122,114,0.10)] bg-[rgba(245,250,247,0.92)] p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                      This week
                    </p>
                    <h2 className="mt-2 brand-serif text-[2rem] leading-none tracking-[-0.04em]">
                      Upcoming sessions
                    </h2>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_6px_18px_rgba(94,109,105,0.06)]">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="brand-serif text-[1.15rem]">
                              Morning Flow
                            </p>
                            <p className="mt-1 text-[14px] text-[var(--ink-soft)]">
                              Tue · 8:30 am · 12 places
                            </p>
                          </div>
                          <div className="rounded-full bg-[rgba(214,228,221,0.9)] px-3 py-1 text-[12px] text-[rgba(92,122,114,1)]">
                            Class
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[999px] bg-[rgba(230,221,239,0.52)] px-5 py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="brand-serif text-[1.15rem]">
                              Deep Reset Session
                            </p>
                            <p className="mt-1 text-[14px] text-[var(--ink-soft)]">
                              Wed · 11:00 am · 60 mins
                            </p>
                          </div>
                          <div className="rounded-full bg-white/80 px-3 py-1 text-[12px] text-[var(--ink-soft)]">
                            Private
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[50%_50%_1.4rem_1.4rem/12%_12%_1.4rem_1.4rem] border border-[rgba(92,122,114,0.10)] bg-[rgba(255,255,255,0.88)] p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                      Booking journey
                    </p>
                    <h3 className="mt-2 brand-serif text-[2rem] leading-none tracking-[-0.04em]">
                      Client details
                    </h3>

                    <div className="mt-4 rounded-[1.2rem] bg-[rgba(244,238,229,0.72)] p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        Selected
                      </p>
                      <p className="mt-2 brand-serif text-[1.08rem]">
                        Evening Restore · Fri 6:00 pm
                      </p>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      <div className="rounded-[1rem] border border-[rgba(92,122,114,0.08)] bg-white px-4 py-3 text-[14px] text-[var(--ink-soft)]">
                        Full name
                      </div>
                      <div className="rounded-[999px] border border-[rgba(92,122,114,0.08)] bg-white px-4 py-3 text-[14px] text-[var(--ink-soft)]">
                        Email address
                      </div>
                    </div>

                    <button className="mt-4 w-full rounded-[1.1rem] bg-[rgba(92,122,114,0.95)] px-4 py-3.5 text-[14px] font-medium text-white shadow-[0_10px_24px_rgba(92,122,114,0.18)]">
                      Complete booking
                    </button>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none mt-4 hidden lg:block">
                <div className="ml-auto max-w-[300px] rounded-[999px] border border-white/70 bg-white/60 px-6 py-4 text-right shadow-[0_14px_30px_rgba(94,109,105,0.08)] backdrop-blur-sm">
                  <p className="text-[1.45rem] leading-[1.2] tracking-[-0.04em] text-[var(--ink-soft)]">
                    Flexible for how you work now.
                  </p>
                  <p className="mt-1 text-[1.45rem] leading-[1.2] tracking-[-0.04em] text-[var(--ink-soft)]">
                    Ready for how you grow next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Product direction
              </p>
              <h2 className="mt-4 text-[2rem] leading-[0.98] tracking-[-0.05em] sm:text-[3rem]">
                One system for businesses that do not fit into one box.
              </h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-8 text-[var(--ink-soft)] sm:text-[17px]">
                Aura is being shaped for businesses that need flexibility: class
                schedules, private bookings, multiple practitioners, and room to
                expand without hitting an immediate pricing wall.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {featureCards.map((item) => (
                <article
                  key={item.title}
                  className={
                    item.shape === "arch"
                      ? "rounded-[2rem_2rem_1.2rem_1.2rem] border border-white/80 bg-[rgba(255,255,255,0.76)] p-6 shadow-[0_18px_42px_rgba(94,109,105,0.07)] backdrop-blur-xl"
                      : item.shape === "circle"
                        ? "rounded-[2.2rem] border border-white/80 bg-[rgba(245,250,247,0.82)] p-6 shadow-[0_18px_42px_rgba(94,109,105,0.07)] backdrop-blur-xl"
                        : "rounded-[999px] border border-white/80 bg-[rgba(249,247,252,0.86)] p-6 shadow-[0_18px_42px_rgba(94,109,105,0.07)] backdrop-blur-xl"
                  }
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 brand-serif text-[1.72rem] leading-[1.02] tracking-[-0.04em]">
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

        <section id="overview" className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/80 bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_20px_50px_rgba(94,109,105,0.08)] backdrop-blur-xl sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Studio overview
              </p>
              <h2 className="mt-4 text-[2rem] leading-[0.98] tracking-[-0.05em] sm:text-[3rem]">
                A clearer view of the business behind the bookings.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-[var(--ink-soft)] sm:text-[17px]">
                The operator side should make it easy to manage teachers,
                practitioners, bookings, class occupancy, and client activity
                without feeling cluttered or overbuilt.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-[1.3rem] bg-[rgba(214,228,221,0.56)] p-4">
                  <p className="brand-serif text-[1.15rem]">
                    Built for mixed models
                  </p>
                  <p className="mt-1 text-[14px] leading-7 text-[var(--ink-soft)]">
                    Track classes and one-to-one sessions from the same place,
                    even when multiple people are delivering them.
                  </p>
                </div>

                <div className="rounded-[999px] bg-[rgba(230,221,239,0.44)] px-5 py-4">
                  <p className="brand-serif text-[1.15rem]">
                    Made to scale sensibly
                  </p>
                  <p className="mt-1 text-[14px] leading-7 text-[var(--ink-soft)]">
                    Growth should feel supported, not punished as soon as the
                    business starts gaining momentum.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.1rem] border border-white/85 bg-[rgba(252,252,251,0.86)] p-4 shadow-[0_24px_60px_rgba(94,109,105,0.10)] backdrop-blur-xl sm:p-5">
              <div className="rounded-[1.4rem] border border-[rgba(92,122,114,0.08)] bg-[rgba(247,249,247,0.92)] p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Aura studio
                    </p>
                    <h3 className="mt-2 brand-serif text-[2rem] leading-none tracking-[-0.04em]">
                      Daily overview
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <div className="rounded-full bg-white px-3 py-2 text-[12px] text-[var(--ink-soft)] shadow-[0_4px_12px_rgba(94,109,105,0.06)]">
                      Mon 14 Oct
                    </div>
                    <div className="rounded-full bg-[rgba(92,122,114,0.95)] px-3 py-2 text-[12px] text-white shadow-[0_4px_12px_rgba(92,122,114,0.16)]">
                      Live
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {adminStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={
                        index % 2 === 0
                          ? "rounded-[1.4rem] bg-white p-4 shadow-[0_8px_18px_rgba(94,109,105,0.05)]"
                          : "rounded-[999px] bg-[rgba(214,228,221,0.52)] p-4"
                      }
                    >
                      <p className="text-[12px] text-[var(--muted)]">
                        {stat.label}
                      </p>
                      <p className="mt-2 brand-serif text-[2rem] leading-none tracking-[-0.05em]">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[1.6rem] bg-white p-4 shadow-[0_8px_18px_rgba(94,109,105,0.05)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                          Upcoming
                        </p>
                        <p className="mt-2 brand-serif text-[1.5rem]">
                          Today’s schedule
                        </p>
                      </div>
                      <div className="rounded-full bg-[rgba(244,238,229,0.8)] px-3 py-1.5 text-[12px] text-[var(--ink-soft)]">
                        3 next
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {upcoming.map((item, index) => (
                        <div
                          key={item.title}
                          className={
                            index === 1
                              ? "rounded-[999px] bg-[rgba(230,221,239,0.35)] px-4 py-3"
                              : "rounded-[1.2rem] bg-[rgba(245,250,247,0.9)] p-4"
                          }
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="brand-serif text-[1.1rem]">
                                {item.title}
                              </p>
                              <p className="mt-1 text-[14px] text-[var(--ink-soft)]">
                                {item.meta}
                              </p>
                            </div>
                            <p className="text-[14px] text-[var(--ink-soft)]">
                              {item.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem_2rem_1.2rem_1.2rem] bg-[rgba(248,246,243,0.96)] p-4 shadow-[0_8px_18px_rgba(94,109,105,0.05)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                          Occupancy
                        </p>
                        <p className="mt-2 brand-serif text-[1.5rem]">
                          Session performance
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-[rgba(214,228,221,0.9)]" />
                    </div>

                    <div className="mt-5 space-y-4">
                      {[
                        { name: "Morning Flow", value: "82%" },
                        { name: "Lunch Reset", value: "64%" },
                        { name: "Evening Restore", value: "93%" },
                      ].map((item) => (
                        <div key={item.name}>
                          <div className="mb-2 flex items-center justify-between">
                            <p className="text-[14px] text-[var(--ink-soft)]">
                              {item.name}
                            </p>
                            <p className="text-[14px] text-[var(--ink-soft)]">
                              {item.value}
                            </p>
                          </div>
                          <div className="h-3 overflow-hidden rounded-full bg-white">
                            <div
                              className="h-full rounded-full bg-[rgba(92,122,114,0.9)]"
                              style={{ width: item.value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.2rem] bg-white p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        Notes
                      </p>
                      <p className="mt-2 text-[14px] leading-7 text-[var(--ink-soft)]">
                        Waitlist enabled for Evening Restore. Two new clients
                        booked on mobile this morning.
                      </p>
                    </div>
                  </div>
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
              {audience.map((item, index) => (
                <article
                  key={item.title}
                  className={
                    index === 0
                      ? "rounded-[2rem_2rem_1.2rem_1.2rem] border border-white/80 bg-[rgba(255,255,255,0.76)] p-6 shadow-[0_18px_42px_rgba(94,109,105,0.08)] backdrop-blur-xl"
                      : index === 1
                        ? "rounded-[999px] border border-white/80 bg-[rgba(245,250,247,0.82)] p-6 shadow-[0_18px_42px_rgba(94,109,105,0.08)] backdrop-blur-xl"
                        : "rounded-[2rem] border border-white/80 bg-[rgba(249,247,252,0.86)] p-6 shadow-[0_18px_42px_rgba(94,109,105,0.08)] backdrop-blur-xl"
                  }
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
          <div className="mx-auto max-w-6xl rounded-[2rem_2rem_1.2rem_1.2rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(242,247,244,0.92),rgba(247,243,250,0.88))] p-6 shadow-[0_24px_60px_rgba(94,109,105,0.10)] sm:p-10">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Early access
              </p>
              <h2 className="mt-4 text-[2.1rem] leading-[0.98] tracking-[-0.05em] sm:text-[3.2rem]">
                Booking software that fits the business you have now — and the
                one you are building.
              </h2>
              <p className="mt-5 max-w-[44ch] text-[16px] leading-8 text-[var(--ink-soft)] sm:text-[17px]">
                Aura is for businesses that need flexibility from day one:
                classes, appointments, multiple practitioners, and room to grow
                without immediate financial penalty.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@aurastudio.co"
                className="inline-flex items-center justify-center rounded-full bg-[rgba(92,122,114,0.95)] px-6 py-4 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(92,122,114,0.18)] transition hover:-translate-y-0.5"
              >
                Request access
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full bg-white/85 px-6 py-4 text-[15px] font-medium text-[var(--ink)] shadow-[0_10px_24px_rgba(94,109,105,0.08)] transition hover:-translate-y-0.5"
              >
                Explore the product
              </a>
            </div>
          </div>
        </section>

        <nav className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
          <div className="mx-auto flex max-w-md items-center justify-between rounded-full border border-white/80 bg-[rgba(255,255,255,0.82)] px-3 py-2 shadow-[0_18px_40px_rgba(94,109,105,0.16)] backdrop-blur-xl">
            <a
              href="#"
              className="flex min-w-[64px] flex-col items-center gap-1 rounded-full px-3 py-2 text-[11px] text-[var(--ink-soft)]"
            >
              <span className="text-[18px]">☼</span>
              <span>Home</span>
            </a>

            <a
              href="#product"
              className="flex min-w-[64px] flex-col items-center gap-1 rounded-full px-3 py-2 text-[11px] text-[var(--ink-soft)]"
            >
              <span className="text-[18px]">◐</span>
              <span>Product</span>
            </a>

            <a
              href="#overview"
              className="flex min-w-[64px] flex-col items-center gap-1 rounded-full px-3 py-2 text-[11px] text-[var(--ink-soft)]"
            >
              <span className="text-[18px]">✺</span>
              <span>Overview</span>
            </a>

            <a
              href="#cta"
              className="flex min-w-[78px] flex-col items-center gap-1 rounded-full bg-[rgba(92,122,114,0.95)] px-4 py-2 text-[11px] text-white shadow-[0_8px_18px_rgba(92,122,114,0.18)]"
            >
              <span className="text-[18px]">✦</span>
              <span>Access</span>
            </a>
          </div>
        </nav>
      </div>
    </main>
  );
}
