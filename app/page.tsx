export default function HomePage() {
  return (
    <main className="bg-[#F8F5F1] text-[#2E2A26]">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex items-center justify-between border-b border-[#E6DDD3] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CDC1] text-sm text-[#2E2A26]">
              A
            </div>
            <div>
              <p className="font-serif text-2xl leading-none tracking-tight">
                Aura Studio
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[#7B7269]">
                Booking software
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#6A625A] md:flex">
            <a href="#approach" className="transition hover:text-[#2E2A26]">
              Approach
            </a>
            <a href="#product" className="transition hover:text-[#2E2A26]">
              Product
            </a>
            <a href="/book" className="transition hover:text-[#2E2A26]">
              Demo
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10 lg:pb-32 lg:pt-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:pt-10">
            <p className="text-sm uppercase tracking-[0.26em] text-[#81786F]">
              A more considered booking system
            </p>

            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight md:text-7xl">
              Booking, classes, and clients — with a lighter touch.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#665E56]">
              Built for modern studios and independent practices running a mix
              of classes, private sessions, and client relationships.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#early"
                className="inline-flex items-center justify-center bg-[#55624A] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(85,98,74,0.18)] transition hover:bg-[#4A5640]"
              >
                Request early access
              </a>
              <a
                href="/book"
                className="text-sm font-medium text-[#2E2A26] underline underline-offset-4"
              >
                View demo →
              </a>
            </div>

            <div className="mt-14 max-w-md border-t border-[#DDD2C5] pt-6">
              <p className="text-sm leading-7 text-[#6F675F]">
                Not adapted from a generic booking tool. Designed around the
                rhythm of real studios and practices from the start.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="relative">
                <img
                  src="/images/studio.jpg"
                  alt="A calm, modern studio interior"
                  className="h-[620px] w-full object-cover"
                />

                <div className="absolute -bottom-10 left-8 hidden w-[320px] bg-[#FFFCF8] p-5 shadow-[0_24px_60px_rgba(46,42,38,0.14)] lg:block">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A8077]">
                    Live schedule
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-[#EFE6DD] pb-3">
                      <div>
                        <p className="text-sm text-[#7B7269]">08:30</p>
                        <p className="text-base font-medium">Morning Flow</p>
                      </div>
                      <span className="bg-[#DDE3D6] px-2 py-1 text-xs text-[#55624A]">
                        Class
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#EFE6DD] pb-3">
                      <div>
                        <p className="text-sm text-[#7B7269]">10:00</p>
                        <p className="text-base font-medium">Private Session</p>
                      </div>
                      <span className="bg-[#EADFD6] px-2 py-1 text-xs text-[#8B6548]">
                        1:1
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#7B7269]">18:00</p>
                        <p className="text-base font-medium">Evening Restore</p>
                      </div>
                      <span className="bg-[#DDE3D6] px-2 py-1 text-xs text-[#55624A]">
                        Class
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:pt-24">
                <div className="bg-[#2E2A26] p-6 text-white shadow-[0_24px_60px_rgba(46,42,38,0.18)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Client view
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight">
                    A booking experience that feels considered.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/75">
                    Clean choices. Clear timing. Less friction from first click
                    to confirmation.
                  </p>
                </div>

                <div className="bg-[#FFFCF8] p-5 shadow-[0_18px_40px_rgba(46,42,38,0.08)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A8077]">
                    Booking card
                  </p>
                  <div className="mt-4 border border-[#EAE0D5] p-4">
                    <p className="text-base font-medium">Pilates Foundations</p>
                    <p className="mt-1 text-sm text-[#7B7269]">
                      Wednesday · 12:30 pm
                    </p>
                    <button className="mt-4 w-full bg-[#55624A] py-2.5 text-sm text-white">
                      Book session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#81786F]">
            Approach
          </p>
          <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Software shaped to fit the spaces it serves.
          </h2>
        </div>

        <div className="grid gap-8 text-[#665E56] md:grid-cols-2">
          <div>
            <p className="text-lg leading-8">
              Aura Studio is built for businesses where classes and private
              sessions often live side by side.
            </p>
          </div>
          <div>
            <p className="text-lg leading-8">
              The result is a booking system that feels lighter to run and more
              aligned with the experience your clients already expect from you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE7DE]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div>
            <img
              src="/images/session.jpg"
              alt="Instructor assisting a client in a session"
              className="h-[620px] w-full object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.26em] text-[#81786F]">
              Built for real practice
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Classes and 1:1 sessions, finally held in the same rhythm.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#665E56]">
              No awkward workaround for appointments. No separate system for
              classes. Just one clear way to manage the moving parts of a modern
              practice.
            </p>

            <div className="mt-10 grid gap-8 border-t border-[#D8CCBF] pt-8 md:grid-cols-3">
              <div>
                <p className="font-serif text-3xl">01</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  Recurring classes and one-off sessions in the same flow.
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl">02</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  A booking page that feels clean, calm, and easy to trust.
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl">03</p>
                <p className="mt-3 text-sm leading-7 text-[#665E56]">
                  Admin that supports the business without taking over it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[#81786F]">
              Product
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              The essentials, presented with clarity.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#665E56]">
              Schedule sessions, take bookings, manage clients, and send
              confirmations — without the clutter that usually comes with
              booking software.
            </p>

            <div className="mt-10 space-y-6">
              <div className="border-l border-[#CDBEAE] pl-5">
                <p className="text-lg font-medium">Class scheduling</p>
                <p className="mt-2 leading-7 text-[#665E56]">
                  Build weekly timetables and manage attendance with less fuss.
                </p>
              </div>

              <div className="border-l border-[#CDBEAE] pl-5">
                <p className="text-lg font-medium">Appointment booking</p>
                <p className="mt-2 leading-7 text-[#665E56]">
                  Offer 1:1 sessions inside the same system, not beside it.
                </p>
              </div>

              <div className="border-l border-[#CDBEAE] pl-5">
                <p className="text-lg font-medium">Client management</p>
                <p className="mt-2 leading-7 text-[#665E56]">
                  Keep bookings, details, and communication in one quiet place.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
            <div className="bg-[#FFFCF8] p-6 shadow-[0_24px_60px_rgba(46,42,38,0.08)]">
              <div className="flex items-center justify-between border-b border-[#EEE4D9] pb-4">
                <div>
                  <p className="text-sm text-[#7B7269]">Schedule overview</p>
                  <h3 className="font-serif text-3xl">This week</h3>
                </div>
                <span className="text-sm text-[#7B7269]">April 2026</span>
              </div>

              <div className="mt-5 grid gap-3">
                {[
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
                ].map((item) => (
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
                  Early access
                </p>
                <p className="mt-3 font-serif text-3xl leading-tight">
                  £30 / month
                </p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Early-stage pricing for studios and practices helping shape
                  the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="early" className="bg-[#2F372A] text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-white/55">
                Founder access
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                A more considered booking system, shaped in the real world.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                We&apos;re onboarding a small number of early studios and
                practices who want something simpler, more fitting, and more
                enjoyable to use.
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
    </main>
  );
}
