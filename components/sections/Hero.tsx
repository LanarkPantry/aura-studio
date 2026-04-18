export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6rem] top-[8rem] h-[18rem] w-[18rem] rounded-full bg-[var(--rose)]/30 blur-3xl" />
        <div className="absolute right-[-5rem] top-[10rem] h-[16rem] w-[16rem] rounded-full bg-[var(--olive)]/20 blur-3xl" />
        <div className="absolute bottom-[4rem] left-[30%] h-[14rem] w-[14rem] rounded-full bg-[var(--plum)]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="relative z-10 max-w-[520px] pt-4">
            <div className="mb-5 inline-block border border-[var(--line)] bg-white/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">
              For studios, centres, and solo practitioners
            </div>

            <h1 className="max-w-[10ch] text-[3rem] leading-[0.88] tracking-[-0.07em] text-[var(--ink)] sm:text-[4.5rem]">
              Built for businesses that run both.
            </h1>

            <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-[var(--ink-soft)] sm:text-[16px]">
              Aura brings classes, appointments, and client flow into one system
              for practices that do not fit neatly into a single booking model.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="bg-[var(--plum)] px-5 py-3 text-[14px] font-medium text-white shadow-[0_14px_32px_rgba(122,61,90,0.24)] transition hover:-translate-y-0.5"
              >
                Request access
              </a>

              <a
                href="#why"
                className="border border-[var(--line)] bg-white/55 px-5 py-3 text-[14px] text-[var(--ink)] backdrop-blur-sm"
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
                  className="border border-[var(--line)] bg-white/35 px-3 py-1.5 text-[12px] text-[var(--ink-soft)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[38rem] sm:min-h-[46rem] lg:min-h-[48rem]">
            <div
              className="absolute right-[4%] top-0 h-[58%] w-[68%] overflow-hidden border border-[rgba(255,255,255,0.48)] shadow-[0_26px_70px_rgba(70,48,38,0.14)]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(45,34,29,0.10), rgba(45,34,29,0.18)), url("https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute left-[2%] top-[5.5rem] w-[52%] border border-[var(--line)] bg-[rgba(255,252,248,0.82)] p-3 shadow-[0_20px_50px_rgba(70,48,38,0.10)] backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    Timetable
                  </p>
                  <p className="mt-1 text-[14px] text-[var(--ink)]">
                    This week
                  </p>
                </div>
                <div className="h-9 w-9 bg-[rgba(125,135,101,0.25)]" />
              </div>

              <div className="space-y-2.5">
                <div className="border border-[rgba(45,34,29,0.08)] bg-white p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[var(--ink)]">
                      Morning Flow
                    </p>
                    <span className="text-[11px] text-[var(--olive)]">
                      Class
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">
                    Tue · 8:30 am · 12 places
                  </p>
                </div>

                <div className="border border-[rgba(45,34,29,0.08)] bg-[rgba(251,244,237,0.9)] p-3">
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

                <div className="border border-[rgba(45,34,29,0.08)] bg-white p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[var(--ink)]">Restore</p>
                    <span className="text-[11px] text-[var(--olive)]">
                      Class
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">
                    Thu · 6:00 pm · 16 places
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[3rem] right-[0] w-[66%] border border-[var(--line)] bg-[rgba(255,255,255,0.94)] p-4 shadow-[0_26px_70px_rgba(70,48,38,0.12)]">
              <div className="border-b border-[rgba(45,34,29,0.08)] pb-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                  Booking journey
                </p>
                <h3 className="mt-1 text-[1.6rem] leading-none tracking-[-0.05em] text-[var(--ink)]">
                  Client details
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                <div className="border border-[rgba(45,34,29,0.08)] bg-[var(--paper-2)] p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Selected
                  </p>
                  <p className="mt-2 text-[14px] text-[var(--ink)]">
                    Deep Tissue · Fri 1:00 pm
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="border border-[rgba(45,34,29,0.08)] bg-white px-3 py-3 text-[13px] text-[var(--muted)]">
                    Name
                  </div>
                  <div className="border border-[rgba(45,34,29,0.08)] bg-white px-3 py-3 text-[13px] text-[var(--muted)]">
                    Email
                  </div>
                </div>

                <button className="w-full bg-[var(--ink)] px-4 py-3 text-[13px] font-medium text-[var(--paper)]">
                  Complete booking
                </button>
              </div>
            </div>

            <div className="absolute left-[12%] top-[62%] w-[34%] bg-[var(--plum)] p-4 text-white shadow-[0_24px_50px_rgba(122,61,90,0.24)]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                Built for mixed models
              </p>
              <p className="mt-2 text-[14px] leading-6 text-white/92">
                One booking experience across classes, private sessions, and the
                admin behind both.
              </p>
            </div>

            <div className="absolute left-[56%] top-[18%] h-24 w-24 border border-white/40 bg-white/18 backdrop-blur-xl" />
            <div className="absolute bottom-[1.2rem] right-[14%] h-20 w-20 bg-[var(--clay)] shadow-[0_18px_40px_rgba(199,123,77,0.24)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
