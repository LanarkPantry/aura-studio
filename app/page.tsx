export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6efe7] text-[#2f241f]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[8rem] h-[20rem] w-[20rem] rounded-full bg-[#d7a49d]/30 blur-3xl" />
        <div className="absolute right-[-6rem] top-[12rem] h-[18rem] w-[18rem] rounded-full bg-[#7d8b67]/20 blur-3xl" />
        <div className="absolute bottom-[10rem] left-[20%] h-[18rem] w-[18rem] rounded-full bg-[#7c3f58]/15 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between border border-[#4a352c]/10 bg-[rgba(247,240,232,0.78)] px-3 py-2.5 shadow-[0_12px_40px_rgba(74,53,44,0.08)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center bg-[#7c3f58] text-sm font-medium tracking-[0.2em] text-white">
              A
            </div>
            <div>
              <div className="font-serif text-[1.1rem] leading-none tracking-[-0.03em]">
                Aura
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#7f6b61]">
                booking for independent practices
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <a
              href="#why"
              className="hidden px-3 py-2 text-[13px] text-[#5e4b42] md:inline-block"
            >
              Why Aura
            </a>
            <a
              href="#for"
              className="hidden px-3 py-2 text-[13px] text-[#5e4b42] md:inline-block"
            >
              Who it’s for
            </a>
            <a
              href="#cta"
              className="bg-[#2f241f] px-4 py-2.5 text-[13px] font-medium text-[#f6efe7] transition hover:-translate-y-0.5"
            >
              Request access
            </a>
          </nav>
        </div>
      </header>

      <section className="relative px-4 pb-14 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="relative z-10 max-w-[34rem]">
            <div className="mb-4 inline-block border border-[#4a352c]/12 bg-white/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#7f6b61]">
              For studios, centres, and solo practitioners
            </div>

            <h1 className="max-w-[11ch] font-serif text-[2.65rem] leading-[0.92] tracking-[-0.055em] sm:text-[3.8rem]">
              Booking built for businesses that run both.
            </h1>

            <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-[#5e4b42] sm:text-[16px]">
              Aura brings classes, appointments, and client flow into one system
              for smaller practices that do not fit neatly into a single booking
              model.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="bg-[#7c3f58] px-5 py-3 text-[14px] font-medium text-white shadow-[0_14px_28px_rgba(124,63,88,0.22)] transition hover:-translate-y-0.5"
              >
                Request access
              </a>
              <a
                href="#why"
                className="border border-[#4a352c]/12 bg-white/60 px-5 py-3 text-[14px] text-[#2f241f] backdrop-blur-sm"
              >
                See why it’s different
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Classes",
                "Appointments",
                "Client management",
                "Mixed-format businesses",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[#4a352c]/12 bg-white/40 px-3 py-1.5 text-[12px] text-[#6d5a51]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[34rem] sm:min-h-[42rem]">
            <div className="absolute left-[2%] top-0 w-[58%] border border-[#4a352c]/10 bg-[rgba(255,252,248,0.78)] p-3 shadow-[0_20px_60px_rgba(74,53,44,0.1)] backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a776e]">
                    Timetable
                  </p>
                  <p className="mt-1 text-[14px] text-[#2f241f]">This week</p>
                </div>
                <div className="h-8 w-8 bg-[#d8e0cd]" />
              </div>

              <div className="space-y-2.5">
                <div className="border border-[#4a352c]/8 bg-white p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px]">Morning Flow</p>
                    <span className="text-[11px] text-[#778465]">Class</span>
                  </div>
                  <p className="mt-1 text-[12px] text-[#8a776e]">
                    Tue · 8:30 am · 12 places
                  </p>
                </div>

                <div className="border border-[#4a352c]/8 bg-[#fbf4ed] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px]">Private Session</p>
                    <span className="text-[11px] text-[#c07447]">
                      Appointment
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[#8a776e]">
                    Wed · 10:00 am · 45 mins
                  </p>
                </div>

                <div className="border border-[#4a352c]/8 bg-white p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px]">Restore</p>
                    <span className="text-[11px] text-[#778465]">Class</span>
                  </div>
                  <p className="mt-1 text-[12px] text-[#8a776e]">
                    Thu · 6:00 pm · 16 places
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-[2%] top-[6.5rem] w-[64%] border border-[#4a352c]/10 bg-white p-4 shadow-[0_22px_60px_rgba(74,53,44,0.12)]">
              <div className="border-b border-[#e3d7ca] pb-3">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a776e]">
                  Booking journey
                </p>
                <h3 className="mt-1 font-serif text-[1.45rem] tracking-[-0.04em]">
                  Client details
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                <div className="border border-[#e3d7ca] bg-[#f8f1ea] p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a776e]">
                    Selected
                  </p>
                  <p className="mt-2 text-[14px] text-[#2f241f]">
                    Deep Tissue · Fri 1:00 pm
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="border border-[#e3d7ca] bg-white px-3 py-3 text-[13px] text-[#8a776e]">
                    Name
                  </div>
                  <div className="border border-[#e3d7ca] bg-white px-3 py-3 text-[13px] text-[#8a776e]">
                    Email
                  </div>
                </div>

                <button className="w-full bg-[#2f241f] px-4 py-3 text-[13px] font-medium text-[#f6efe7]">
                  Complete booking
                </button>
              </div>
            </div>

            <div className="absolute bottom-[4rem] left-[8%] w-[40%] bg-[#7c3f58] p-4 text-white shadow-[0_20px_50px_rgba(124,63,88,0.22)]">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                Built for mixed models
              </p>
              <p className="mt-2 text-[14px] leading-6 text-white/90">
                One booking experience across classes, private care, and the
                admin behind both.
              </p>
            </div>

            <div className="absolute bottom-[1rem] right-[8%] h-20 w-20 bg-[#c07447] shadow-[0_18px_40px_rgba(192,116,71,0.24)]" />

            <div className="absolute left-[30%] top-[4.5rem] h-24 w-24 border border-white/50 bg-white/20 backdrop-blur-xl" />
          </div>
        </div>
      </section>

      <section id="why" className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-t border-[#2f241f] pt-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a776e]">
                Why Aura
              </p>
            </div>

            <div className="space-y-5">
              <div className="border border-[#4a352c]/10 bg-white/70 p-5 shadow-[0_16px_40px_rgba(74,53,44,0.06)] sm:p-7">
                <h2 className="max-w-[18ch] font-serif text-[2rem] leading-[1.02] tracking-[-0.045em] sm:text-[2.5rem]">
                  Most booking tools force smaller businesses into the wrong
                  shape.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <article className="border border-[#4a352c]/10 bg-white/45 p-5 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a776e]">
                    Class-first tools
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-[#5e4b42]">
                    Fine for timetables. Less useful when your business also
                    depends on one-to-one bookings.
                  </p>
                </article>

                <article className="translate-y-4 border border-[#7c3f58]/20 bg-[#7c3f58]/6 p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#7c3f58]">
                    Aura
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-[#2f241f]">
                    Built around the reality of smaller practices running
                    classes, appointments, and client flow together.
                  </p>
                </article>

                <article className="border border-[#4a352c]/10 bg-white/45 p-5 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a776e]">
                    Appointment tools
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-[#5e4b42]">
                    Good for one-to-one scheduling. Not built for classes,
                    recurring sessions, capacity, and mixed schedules.
                  </p>
                </article>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="border border-[#4a352c]/10 bg-[#d8e0cd]/35 p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#778465]">
                    What Aura brings together
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#2f241f]">
                    <li>Classes and private sessions in one system</li>
                    <li>A more considered booking experience for clients</li>
                    <li>Admin that fits smaller, more flexible businesses</li>
                  </ul>
                </div>

                <div className="border border-[#4a352c]/10 bg-[#f0d9cb]/45 p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#c07447]">
                    What disappears
                  </p>
                  <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#2f241f]">
                    <li>Patchwork workarounds across different tools</li>
                    <li>Disconnected client journeys</li>
                    <li>
                      Software that does not reflect the business you built
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="for" className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-t border-[#2f241f] pt-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a776e]">
                Who it’s for
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Studios",
                  color: "#7c3f58",
                  copy: "For businesses balancing timetabled classes, memberships, and private bookings without wanting a bloated setup.",
                },
                {
                  title: "Centres",
                  color: "#c07447",
                  copy: "For shared spaces with multiple practitioners, mixed service types, and a need for something more coherent than patchwork software.",
                },
                {
                  title: "Solo practitioners",
                  color: "#7d8b67",
                  copy: "For independent practitioners offering both sessions and small group experiences in one brand.",
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className={`relative overflow-hidden border border-[#4a352c]/10 p-5 shadow-[0_14px_36px_rgba(74,53,44,0.05)] ${
                    index === 1 ? "bg-white/85" : "bg-white/60"
                  }`}
                >
                  <div
                    className="absolute right-[-1rem] top-[-1rem] h-24 w-24 blur-2xl"
                    style={{ backgroundColor: item.color, opacity: 0.22 }}
                  />
                  <div
                    className="mb-10 h-10 w-10"
                    style={{ backgroundColor: item.color }}
                  />
                  <h3 className="font-serif text-[1.8rem] tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#5e4b42]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="relative overflow-hidden border border-[#4a352c]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.36))] p-6 shadow-[0_22px_70px_rgba(74,53,44,0.08)] backdrop-blur-sm sm:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-2rem] top-[1rem] h-40 w-40 rounded-full bg-[#d7a49d]/20 blur-3xl" />
              <div className="absolute right-[8%] top-[-1rem] h-44 w-44 rounded-full bg-[#7c3f58]/14 blur-3xl" />
              <div className="absolute bottom-[-2rem] right-[18%] h-36 w-36 rounded-full bg-[#c07447]/14 blur-3xl" />
            </div>

            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[700px]">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a776e]">
                  Early access
                </p>
                <h2 className="mt-3 max-w-[16ch] font-serif text-[2.1rem] leading-[1] tracking-[-0.05em] sm:text-[2.9rem]">
                  Booking software for businesses that have outgrown the usual
                  tools.
                </h2>
                <p className="mt-4 max-w-[44ch] text-[15px] leading-7 text-[#5e4b42]">
                  If you run classes, appointments, or a mix of both, Aura is
                  being shaped for the way smaller practices actually operate.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@aura-studio.co"
                  className="bg-[#2f241f] px-5 py-3 text-[14px] font-medium text-[#f6efe7] transition hover:-translate-y-0.5"
                >
                  Request access
                </a>
                <a
                  href="#"
                  className="border border-[#4a352c]/12 bg-white/70 px-5 py-3 text-[14px] text-[#2f241f]"
                >
                  Preview the product
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
