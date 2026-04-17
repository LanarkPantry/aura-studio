export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F5F1] text-[#2E2A26]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-[360px] w-[360px] rounded-full bg-[#E8DDD0] blur-3xl opacity-60" />
        <div className="absolute right-[-80px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#DDE3D6] blur-3xl opacity-60" />
        <div className="absolute bottom-[-100px] left-[30%] h-[260px] w-[260px] rounded-full bg-[#EADFD6] blur-3xl opacity-60" />
      </div>

      <header className="sticky top-0 z-30 border-b border-[#E7DED4]/80 bg-[#F8F5F1]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CDC1] bg-white text-sm font-medium text-[#55624A] shadow-sm">
              A
            </div>
            <div>
              <p className="font-serif text-2xl leading-none tracking-tight text-[#2E2A26]">
                Aura Studio
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#7B7269]">
                Booking software
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#6F675F] md:flex">
            <a href="#features" className="transition hover:text-[#2E2A26]">
              Features
            </a>
            <a href="#who-its-for" className="transition hover:text-[#2E2A26]">
              Who it&apos;s for
            </a>
            <a href="#demo" className="transition hover:text-[#2E2A26]">
              Demo
            </a>
            <a href="#pricing" className="transition hover:text-[#2E2A26]">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden rounded-full border border-[#DDD4C8] bg-white px-4 py-2.5 text-sm text-[#5F574F] shadow-sm transition hover:border-[#D0C4B6] hover:bg-[#FCFAF7] md:inline-flex"
            >
              Login
            </a>
            <a
              href="#early-access"
              className="inline-flex rounded-full bg-[#55624A] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(85,98,74,0.22)] transition hover:bg-[#4A5640]"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#DDD3C8] bg-white/90 px-4 py-2 text-sm text-[#6A625A] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#A88163]" />
              Built for classes, appointments, and calm operations
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight text-[#2E2A26] md:text-7xl">
              Simple, beautiful booking for modern studios and practices.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#665E56] md:text-xl">
              Manage classes, appointments, and clients in one calm, easy-to-use
              platform — designed for yoga, pilates, and independent practices.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#early-access"
                className="inline-flex items-center justify-center rounded-full bg-[#55624A] px-7 py-4 text-sm font-medium text-white shadow-[0_16px_36px_rgba(85,98,74,0.22)] transition hover:bg-[#4A5640]"
              >
                Request Early Access
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-[#D7CCBF] bg-white px-7 py-4 text-sm font-medium text-[#514A43] shadow-sm transition hover:bg-[#FCFAF7]"
              >
                View demo
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-sm text-[#6F675F] sm:grid-cols-4">
              {[
                "Weekly classes",
                "1:1 appointments",
                "Client management",
                "Automated emails",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#E7DED4] bg-white/85 px-4 py-3 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-[#DDE3D6] blur-3xl" />
            <div className="relative w-full max-w-2xl rounded-[36px] border border-[#E4D9CC] bg-[linear-gradient(180deg,#FFFDFC_0%,#F5EFE8_100%)] p-4 shadow-[0_40px_100px_rgba(46,42,38,0.12)]">
              <div className="rounded-[30px] border border-[#E7DED4] bg-white/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#7C736A]">Aura Studio</p>
                    <h3 className="font-serif text-3xl tracking-tight text-[#2E2A26]">
                      Weekly Schedule
                    </h3>
                  </div>
                  <div className="rounded-full border border-[#E5DBD0] bg-[#FCFAF7] px-4 py-2 text-sm text-[#6C645C]">
                    April 2026
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      time: "08:30",
                      title: "Morning Flow",
                      meta: "12 spots · Emma",
                      tag: "Class",
                      accent: "bg-[#DDE3D6] text-[#55624A]",
                    },
                    {
                      time: "10:00",
                      title: "Private Session",
                      meta: "1:1 · 45 mins",
                      tag: "Appointment",
                      accent: "bg-[#EADFD6] text-[#8B6548]",
                    },
                    {
                      time: "12:30",
                      title: "Pilates Foundations",
                      meta: "10 spots · Lara",
                      tag: "Class",
                      accent: "bg-[#DDE3D6] text-[#55624A]",
                    },
                    {
                      time: "18:00",
                      title: "Evening Restore",
                      meta: "16 spots · Sophie",
                      tag: "Class",
                      accent: "bg-[#DDE3D6] text-[#55624A]",
                    },
                  ].map((item) => (
                    <div
                      key={`${item.time}-${item.title}`}
                      className="flex items-center justify-between rounded-[24px] border border-[#E8DED3] bg-[#FFFEFD] px-4 py-4 shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-[#F4EEE8] px-3 py-2 text-sm font-medium text-[#574F47]">
                          {item.time}
                        </div>
                        <div>
                          <p className="text-base font-medium text-[#2E2A26]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-[#7C736A]">
                            {item.meta}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${item.accent}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-[#E8DED3] bg-[#FCFAF7] p-5">
                    <p className="text-sm text-[#7A7168]">
                      Today&apos;s bookings
                    </p>
                    <p className="mt-2 font-serif text-4xl text-[#2E2A26]">
                      18
                    </p>
                    <p className="mt-2 text-sm text-[#6C645C]">
                      Classes and appointments in one view.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-[#E8DED3] bg-[#FCFAF7] p-5">
                    <p className="text-sm text-[#7A7168]">Client reminders</p>
                    <p className="mt-2 font-serif text-4xl text-[#2E2A26]">
                      Auto
                    </p>
                    <p className="mt-2 text-sm text-[#6C645C]">
                      Calm admin with confirmations sent automatically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden rounded-[28px] border border-[#E7DED4] bg-white/90 p-4 shadow-[0_20px_50px_rgba(46,42,38,0.1)] lg:block">
                <p className="text-xs uppercase tracking-[0.2em] text-[#857B71]">
                  Client experience
                </p>
                <p className="mt-2 font-serif text-xl text-[#2E2A26]">
                  Beautiful on mobile
                </p>
              </div>

              <div className="pointer-events-none absolute -right-5 top-8 hidden rounded-full border border-[#D9CEC2] bg-[#FCFAF7] px-4 py-2 text-sm text-[#6A6158] shadow-sm lg:block">
                Calm, polished, easy
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Designed for your niche",
              body: "Built for studios and practitioners offering classes, appointments, or both.",
            },
            {
              title: "Simple to set up",
              body: "A clean, focused system without the clutter of bloated booking software.",
            },
            {
              title: "Premium client experience",
              body: "A polished booking flow that feels aligned with the way your brand already looks and feels.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#E5DBCF] bg-white/85 p-7 shadow-[0_14px_40px_rgba(46,42,38,0.05)]"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl bg-[#F1E8DF]" />
              <h3 className="font-serif text-2xl tracking-tight text-[#2E2A26]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-[#665E56]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="border-y border-[#E8DED3] bg-[linear-gradient(180deg,#FCFAF7_0%,#F5EEE7_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#81786F]">
              Features
            </p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight text-[#2E2A26]">
              Everything you need, nothing you don&apos;t.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#665E56]">
              Aura Studio keeps bookings, schedules, and client details in one
              calm place — without feeling heavy or overbuilt.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Class scheduling",
                body: "Create recurring or one-off classes, manage capacity, and keep your weekly timetable beautifully organised.",
              },
              {
                title: "Appointment booking",
                body: "Offer private sessions or treatments with a booking flow that feels polished, clear, and easy for clients to use.",
              },
              {
                title: "Client management",
                body: "See who has booked, track attendance, and keep your client information in one simple central view.",
              },
              {
                title: "Automated emails",
                body: "Confirmations and reminders are handled automatically to reduce admin and support fewer no-shows.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-[32px] border border-[#E6DCCF] bg-white p-8 shadow-[0_18px_45px_rgba(46,42,38,0.06)] transition hover:-translate-y-0.5"
              >
                <div
                  className={`mb-6 h-12 w-12 rounded-2xl ${
                    index % 2 === 0 ? "bg-[#DDE3D6]" : "bg-[#EADFD6]"
                  }`}
                />
                <h3 className="font-serif text-3xl tracking-tight text-[#2E2A26]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-xl leading-8 text-[#665E56]">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="who-its-for"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#81786F]">
              Who it&apos;s for
            </p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight text-[#2E2A26]">
              Built for the way modern practices actually work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#665E56]">
              Whether you run a studio timetable, offer private sessions, or do
              both, Aura Studio fits naturally around the way you already work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] border border-[#E5DBCF] bg-white p-8 shadow-[0_16px_40px_rgba(46,42,38,0.05)]">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-[#DDE3D6]" />
              <h3 className="font-serif text-3xl tracking-tight text-[#2E2A26]">
                Studios running classes
              </h3>
              <p className="mt-4 leading-8 text-[#665E56]">
                Ideal for yoga and pilates studios managing weekly timetables,
                multiple teachers, class capacity, and regular client bookings.
              </p>
              <ul className="mt-6 space-y-3 text-[#665E56]">
                <li>• Weekly schedules</li>
                <li>• Capacity and attendance</li>
                <li>• Team-friendly admin</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-[#E5DBCF] bg-white p-8 shadow-[0_16px_40px_rgba(46,42,38,0.05)]">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-[#EADFD6]" />
              <h3 className="font-serif text-3xl tracking-tight text-[#2E2A26]">
                Solo practitioners
              </h3>
              <p className="mt-4 leading-8 text-[#665E56]">
                Perfect for teachers and practitioners offering a mix of
                classes, private sessions, treatments, or appointments.
              </p>
              <ul className="mt-6 space-y-3 text-[#665E56]">
                <li>• 1:1 appointment booking</li>
                <li>• Classes and appointments together</li>
                <li>• A polished client experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-[#EFE7DE]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#81786F]">
                Demo
              </p>
              <h2 className="mt-4 font-serif text-5xl tracking-tight text-[#2E2A26]">
                See how Aura Studio feels in practice.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#665E56]">
                Explore a sample booking experience for a modern studio or
                practice. View classes, book appointments, and get a feel for
                the client journey.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-[#55624A] px-7 py-4 text-sm font-medium text-white shadow-[0_16px_36px_rgba(85,98,74,0.2)] transition hover:bg-[#4A5640]"
                >
                  View demo booking page
                </a>
                <a
                  href="#early-access"
                  className="inline-flex items-center justify-center rounded-full border border-[#D3C6B8] bg-white px-7 py-4 text-sm font-medium text-[#514A43] shadow-sm transition hover:bg-[#FCFAF7]"
                >
                  Join early access
                </a>
              </div>
            </div>

            <div className="rounded-[36px] border border-[#E2D5C8] bg-[linear-gradient(180deg,#FFFDFC_0%,#F7F1EB_100%)] p-5 shadow-[0_30px_80px_rgba(46,42,38,0.08)]">
              <div className="rounded-[28px] border border-[#E8DED3] bg-white p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#7B7269]">Client view</p>
                    <h3 className="font-serif text-3xl tracking-tight text-[#2E2A26]">
                      Book a session
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#F2ECE5] px-3 py-1 text-xs text-[#746B62]">
                    Mobile-friendly
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-[#E8DED3] bg-[#FFFEFD] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-medium text-[#2E2A26]">
                          Morning Flow
                        </p>
                        <p className="mt-1 text-sm text-[#7C736A]">
                          Tuesday · 8:30 am · 12 spots
                        </p>
                      </div>
                      <span className="rounded-full bg-[#DDE3D6] px-3 py-1 text-xs font-medium text-[#55624A]">
                        Class
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#E8DED3] bg-[#FFFEFD] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-medium text-[#2E2A26]">
                          Private Session
                        </p>
                        <p className="mt-1 text-sm text-[#7C736A]">
                          Wednesday · 10:00 am · 45 mins
                        </p>
                      </div>
                      <span className="rounded-full bg-[#EADFD6] px-3 py-1 text-xs font-medium text-[#8B6548]">
                        Appointment
                      </span>
                    </div>
                  </div>

                  <button className="mt-2 w-full rounded-full bg-[#55624A] px-5 py-3.5 text-sm font-medium text-white shadow-[0_12px_24px_rgba(85,98,74,0.18)] transition hover:bg-[#4A5640]">
                    Continue booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[40px] border border-[#E4D8CB] bg-white p-8 text-center shadow-[0_26px_70px_rgba(46,42,38,0.08)] lg:p-14">
          <p className="text-sm uppercase tracking-[0.24em] text-[#81786F]">
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-5xl tracking-tight text-[#2E2A26]">
            Simple pricing, early-stage access.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#665E56]">
            We&apos;re onboarding a small number of early users as we refine
            Aura Studio with real studios and practices.
          </p>

          <div className="mt-10 rounded-[32px] border border-[#E8DED3] bg-[linear-gradient(180deg,#FCFAF7_0%,#F5EEE7_100%)] p-10">
            <p className="text-sm text-[#7A7168]">Early access</p>
            <div className="mt-3 font-serif text-6xl tracking-tight text-[#2E2A26]">
              £30
            </div>
            <p className="mt-2 text-[#7A7168]">per month</p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#665E56]">
              Includes class scheduling, appointment booking, client management,
              and automated emails.
            </p>

            <a
              href="#early-access"
              className="mt-8 inline-flex rounded-full bg-[#55624A] px-7 py-4 text-sm font-medium text-white shadow-[0_16px_32px_rgba(85,98,74,0.18)] transition hover:bg-[#4A5640]"
            >
              Request early access
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8DED3] bg-[#FCFAF7]">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#81786F]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight text-[#2E2A26]">
              A few common questions.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Is Aura Studio for classes, appointments, or both?",
                a: "Both. You can manage recurring classes, one-off events, and private appointments in one simple platform.",
              },
              {
                q: "Who is it designed for?",
                a: "Aura Studio is built for yoga studios, pilates spaces, solo practitioners, and independent practices that want a calmer booking system.",
              },
              {
                q: "Can I try it before fully switching?",
                a: "Yes. Early access is for businesses who want to explore the product, give feedback, and help shape the first version.",
              },
            ].map((item, index) => (
              <div
                key={item.q}
                className={`rounded-[28px] border border-[#E6DBCF] p-6 shadow-sm ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F7F1EB]"
                }`}
              >
                <h3 className="text-lg font-medium text-[#2E2A26]">{item.q}</h3>
                <p className="mt-3 leading-8 text-[#665E56]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="early-access"
        className="relative overflow-hidden bg-[#2F372A] text-white"
      >
        <div className="absolute left-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#6F7D60] blur-3xl opacity-30" />
        <div className="absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-[#A88163] blur-3xl opacity-20" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <h2 className="font-serif text-5xl tracking-tight md:text-6xl">
            Start taking bookings with more ease.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#DAD8D2]">
            Join early access to Aura Studio and be among the first studios and
            practices shaping the platform.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@aurastudio.co?subject=Early%20Access%20Request"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-medium text-[#2F372A] shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition hover:bg-[#F4F1EC]"
            >
              Request early access
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View demo
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E7DED4] bg-[#F8F5F1]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#746C63] md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Aura Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#2E2A26]">
              Privacy
            </a>
            <a href="#" className="transition hover:text-[#2E2A26]">
              Terms
            </a>
            <a
              href="mailto:hello@aurastudio.co"
              className="transition hover:text-[#2E2A26]"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
