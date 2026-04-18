"use client";

import {
  CalendarDays,
  Leaf,
  MonitorPlay,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const mobileNavItems = [
  {
    href: "#why",
    label: "Why",
    icon: Sparkles,
  },
  {
    href: "#product",
    label: "Product",
    icon: CalendarDays,
  },
  {
    href: "#early",
    label: "Access",
    icon: Leaf,
  },
  {
    href: "/book",
    label: "Demo",
    icon: MonitorPlay,
  },
];

const scheduleItems = [
  {
    time: "08:30",
    title: "Morning Flow",
    meta: "Emma · 12 places",
    tag: "Class",
    tagClass: "bg-[#DDE3D6] text-[#55624A]",
  },
  {
    time: "10:00",
    title: "Private Session",
    meta: "45 mins · 1:1",
    tag: "Appointment",
    tagClass: "bg-[#EADFD6] text-[#8B6548]",
  },
  {
    time: "18:00",
    title: "Evening Restore",
    meta: "Sophie · 16 places",
    tag: "Class",
    tagClass: "bg-[#DDE3D6] text-[#55624A]",
  },
];

const weeklyScheduleItems = [
  {
    time: "08:30",
    title: "Morning Flow",
    meta: "Emma · 12 places",
    tag: "Class",
    tagClass: "bg-[#DDE3D6] text-[#55624A]",
  },
  {
    time: "10:00",
    title: "Private Session",
    meta: "45 mins · 1:1",
    tag: "Appointment",
    tagClass: "bg-[#EADFD6] text-[#8B6548]",
  },
  {
    time: "12:30",
    title: "Pilates Foundations",
    meta: "Lara · 10 places",
    tag: "Class",
    tagClass: "bg-[#DDE3D6] text-[#55624A]",
  },
  {
    time: "18:00",
    title: "Evening Restore",
    meta: "Sophie · 16 places",
    tag: "Class",
    tagClass: "bg-[#DDE3D6] text-[#55624A]",
  },
];

const benefitItems = [
  "Run classes and private sessions together",
  "Give clients a calmer booking experience",
  "Keep bookings, clients, and admin in one place",
];

export default function HomePage() {
  return (
    <main className="bg-[#F8F5F1] pb-28 text-[#2E2A26] md:pb-0">
      <header className="sticky top-0 z-40 border-b border-[#E6DDD3] bg-[#F8F5F1]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CDC1] bg-[#FFFCF8] text-sm text-[#2E2A26]">
              A
            </div>
            <div>
              <p className="font-serif text-2xl leading-none tracking-tight">
                Aura Studio
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#7B7269]">
                Booking software
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#6A625A] md:flex">
            <a href="#why" className="transition hover:text-[#2E2A26]">
              Why Aura
            </a>
            <a href="#product" className="transition hover:text-[#2E2A26]">
              Product
            </a>
            <a href="#early" className="transition hover:text-[#2E2A26]">
              Early access
            </a>
            <a href="/book" className="transition hover:text-[#2E2A26]">
              View demo
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[42%] bg-[#55624A]" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#EEE7DE] via-[#F5F0EA] to-[#F8F5F1]" />

        <div className="lg:hidden bg-[#55624A] text-white">
          <div className="px-6 pb-20 pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#DDE3D6]" />
              Built for studios, practitioners, and wellness businesses
            </div>

            <h1 className="mt-5 font-serif text-[2.7rem] leading-[0.98] tracking-tight">
              Booking software for classes and 1:1 sessions.
            </h1>

            <p className="mt-5 max-w-md text-[16px] leading-7 text-white/78">
              Aura Studio brings scheduling, bookings, and client management
              into one calm, clear system for modern wellness businesses.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2F372A] transition hover:bg-[#F3EEE8]"
              >
                View demo
              </a>
              <a
                href="#early"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Request early access
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 lg:pb-28 lg:pt-12">
            <div className="hidden lg:block lg:pt-8">
              <div className="inline-flex items-center gap-2 border border-[#D8CDC1] bg-[#FFFCF8]/90 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-[#6E665F] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#55624A]" />
                Built for studios, practitioners, and wellness businesses
              </div>

              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                Booking software for
                <span className="block text-[#55624A]">
                  classes and 1:1 sessions
                </span>
                without the workaround.
              </h1>

              <p className="mt-5 max-w-xl text-[17px] leading-8 text-[#5F5750] sm:text-lg">
                Aura Studio brings scheduling, bookings, and client management
                into one calm, clear system built for modern wellness
                businesses.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center bg-[#55624A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4A5640]"
                >
                  View demo
                </a>
                <a
                  href="#early"
                  className="inline-flex items-center justify-center border border-[#CFC3B7] bg-[#FFFCF8]/80 px-6 py-3 text-sm font-medium text-[#2E2A26] transition hover:bg-[#F1EBE4]"
                >
                  Request early access
                </a>
              </div>

              <div className="mt-7 grid gap-3">
                {benefitItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#E2D8CC] bg-[#FFFCF8]/90 px-4 py-3 backdrop-blur"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#55624A]"
                      strokeWidth={1.8}
                    />
                    <p className="text-sm leading-6 text-[#5F5750]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#DCCFC2] pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A8077]">
                  Built for
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Yoga studios
                  </span>
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Pilates spaces
                  </span>
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Solo practitioners
                  </span>
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Wellness practices
                  </span>
                </div>
              </div>
            </div>

            <div className="-mt-10 grid gap-5 pb-16 lg:mt-0 lg:pb-0 lg:pt-8">
              <div className="overflow-hidden rounded-[28px] border border-[#D5C9BC] bg-[#FFFCF8] shadow-[0_18px_60px_rgba(46,42,38,0.14)]">
                <div className="bg-[#2F372A] px-5 py-4 text-white sm:bg-[#55624A]">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/65">
                    Today&apos;s schedule
                  </p>
                  <h2 className="mt-2 font-serif text-3xl">At a glance</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
                    Classes and private sessions, held in one calm view.
                  </p>
                </div>

                <div className="grid gap-3 p-5">
                  {scheduleItems.map((item) => (
                    <div
                      key={`${item.time}-${item.title}`}
                      className="flex items-center justify-between rounded-2xl border border-[#ECE2D7] bg-white p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="min-w-[58px] text-sm text-[#7B7269]">
                          {item.time}
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="mt-1 text-sm text-[#7B7269]">
                            {item.meta}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs ${item.tagClass}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[28px] bg-[#2E2A26] p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Client booking
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">
                    A booking flow that feels calm from first click.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/75">
                    Clear choices, clean time selection, and less friction from
                    interest to confirmation.
                  </p>
                </div>

                <div className="rounded-[28px] border border-[#E8DDD1] bg-[#FFFCF8] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A8077]">
                    Booking card
                  </p>
                  <div className="mt-4 rounded-2xl border border-[#EAE0D5] bg-white p-4">
                    <p className="text-base font-medium">Pilates Foundations</p>
                    <p className="mt-1 text-sm text-[#7B7269]">
                      Wednesday · 12:30 pm
                    </p>
                    <button className="mt-4 w-full rounded-full bg-[#55624A] py-2.5 text-sm text-white transition hover:bg-[#4A5640]">
                      Book session
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 lg:hidden">
                {benefitItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#E2D8CC] bg-[#FFFCF8] px-4 py-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#55624A]"
                      strokeWidth={1.8}
                    />
                    <p className="text-sm leading-6 text-[#5F5750]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E2D8CC] pt-6 lg:hidden">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A8077]">
                  Built for
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Yoga studios
                  </span>
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Pilates spaces
                  </span>
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Solo practitioners
                  </span>
                  <span className="border border-[#D8CDC1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#5F5750]">
                    Wellness practices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#81786F]">
              Why Aura
            </p>
            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Most booking tools make wellness businesses adapt to them.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#665E56]">
              Aura Studio is designed for the real shape of modern practice:
              recurring classes, private sessions, changing availability, and
              ongoing client relationships — all held in one system.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="border-t border-[#D8CCBF] pt-5">
                <p className="text-base font-medium">Classes + 1:1 together</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  No split setup, no awkward workaround, no second system for
                  appointments.
                </p>
              </div>

              <div className="border-t border-[#D8CCBF] pt-5">
                <p className="text-base font-medium">Client experience first</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  A booking flow that feels aligned with a premium wellness
                  brand, not generic software.
                </p>
              </div>

              <div className="border-t border-[#D8CCBF] pt-5">
                <p className="text-base font-medium">Admin that stays light</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  Keep schedules, bookings, details, and confirmations clear and
                  manageable as you grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE7DE]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <img
              src="/images/session.jpg"
              alt="Instructor assisting a client in a session"
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]"
            />
          </div>

          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#81786F]">
              Built for real practice
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              One rhythm for classes, appointments, and client care.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#665E56]">
              Whether you run a studio timetable, offer private sessions, or do
              both, Aura Studio brings the moving parts together in a way that
              feels simpler to manage and better to book through.
            </p>

            <div className="mt-10 grid gap-8 border-t border-[#D8CCBF] pt-8 md:grid-cols-3">
              <div>
                <p className="font-serif text-3xl">01</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  Recurring classes and one-off appointments managed in the same
                  flow.
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl">02</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  A client booking experience that feels clean, calm, and easy
                  to trust.
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl">03</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  Day-to-day admin that supports the business without taking it
                  over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#81786F]">
              Product
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              The essentials of running a wellness business, made clearer.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#665E56]">
              Schedule classes, take private bookings, manage clients, and send
              confirmations — all inside one system designed for small studios
              and independent practitioners.
            </p>

            <div className="mt-10 space-y-6">
              <div className="border-l border-[#CDBEAE] pl-5">
                <p className="text-lg font-medium">Weekly class scheduling</p>
                <p className="mt-2 leading-7 text-[#665E56]">
                  Build recurring timetables, manage attendance, and keep the
                  week visible at a glance.
                </p>
              </div>

              <div className="border-l border-[#CDBEAE] pl-5">
                <p className="text-lg font-medium">Private session booking</p>
                <p className="mt-2 leading-7 text-[#665E56]">
                  Offer 1:1 appointments without bolting on a separate booking
                  tool.
                </p>
              </div>

              <div className="border-l border-[#CDBEAE] pl-5">
                <p className="text-lg font-medium">Client management</p>
                <p className="mt-2 leading-7 text-[#665E56]">
                  Keep bookings, client details, and communication in one quiet,
                  organised place.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
            <div className="bg-[#FFFCF8] p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#EEE4D9] pb-4">
                <div>
                  <p className="text-sm text-[#7B7269]">Schedule overview</p>
                  <h3 className="font-serif text-3xl">This week</h3>
                </div>
                <span className="text-sm text-[#7B7269]">April 2026</span>
              </div>

              <div className="mt-5 grid gap-3">
                {weeklyScheduleItems.map((item) => (
                  <div
                    key={`${item.time}-${item.title}`}
                    className="flex items-center justify-between border border-[#ECE2D7] bg-white p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="min-w-[58px] text-sm text-[#7B7269]">
                        {item.time}
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="mt-1 text-sm text-[#7B7269]">
                          {item.meta}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs ${item.tagClass}`}>
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <img
                src="/images/detail.jpg"
                alt="Close-up detail of practice props"
                className="h-[270px] w-full object-cover"
              />

              <div className="bg-[#2E2A26] p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Early access pricing
                </p>
                <p className="mt-3 font-serif text-3xl leading-tight">
                  £30 / month
                </p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Early-stage pricing for studios and practitioners helping
                  shape the product in real use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="early" className="bg-[#2F372A] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/55">
                Founder access
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Join the first studios and practitioners shaping Aura Studio.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                We&apos;re onboarding a small number of early users who want a
                more fitting way to run classes, private sessions, and client
                bookings — with direct access to the founder as the product
                evolves.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@aurastudio.co?subject=Early%20Access%20Request"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-medium text-[#2F372A] transition hover:bg-[#F3EEE8]"
              >
                Request early access
              </a>
              <a
                href="/book"
                className="text-sm text-white underline underline-offset-4"
              >
                View demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="flex flex-col gap-4 border-t border-[#E6DDD3] pt-5 text-sm text-[#746C63] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Aura Studio</p>
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

      <nav className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
        <div className="mx-auto max-w-sm rounded-full border border-[#DCCFC2] bg-[#FFFCF8]/95 p-2 shadow-[0_12px_40px_rgba(46,42,38,0.12)] backdrop-blur-xl">
          <div className="grid grid-cols-4 gap-1">
            {mobileNavItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col items-center justify-center rounded-full px-2 py-3 text-[#6B645D] transition hover:bg-[#F3ECE4] hover:text-[#2E2A26]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4EEE7] transition group-hover:bg-[#EDE3D7]">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="mt-1.5 text-[11px] font-medium tracking-wide">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </main>
  );
}
