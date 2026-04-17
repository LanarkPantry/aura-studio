export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <section className="border-b border-stone-200/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="text-3xl font-light tracking-tight text-stone-800">
            Aura Studio
          </div>

          <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            <a href="#features" className="transition hover:text-stone-900">
              Features
            </a>
            <a href="#who-its-for" className="transition hover:text-stone-900">
              Who it&apos;s for
            </a>
            <a href="#pricing" className="transition hover:text-stone-900">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-stone-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm text-stone-700 transition hover:bg-white md:inline-block"
            >
              Login
            </a>
            <a
              href="#early-access"
              className="rounded-full bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(245,245,244,0.65),rgba(245,245,244,1))]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm text-stone-600 backdrop-blur">
              Built for classes, appointments, and calm operations
            </div>

            <h1 className="max-w-2xl text-5xl font-light leading-tight tracking-tight text-stone-900 md:text-6xl">
              Simple, beautiful booking for modern studios and practices.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Manage classes, appointments, and clients in one calm, easy-to-use
              platform — designed for yoga, pilates, and independent practices.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#early-access"
                className="rounded-full bg-stone-800 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Request Early Access
              </a>
              <a
                href="#demo"
                className="rounded-full border border-stone-300 bg-white px-6 py-3.5 text-center text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-100"
              >
                View Demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-500">
              <span>Weekly classes</span>
              <span>1:1 appointments</span>
              <span>Client management</span>
              <span>Email confirmations</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl rounded-[32px] border border-stone-200 bg-white p-4 shadow-[0_30px_80px_rgba(28,25,23,0.08)]">
              <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-stone-500">Aura Studio</p>
                    <h3 className="text-2xl font-light text-stone-900">
                      Weekly Schedule
                    </h3>
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-sm text-stone-600 shadow-sm">
                    April 2026
                  </div>
                </div>

                <div className="grid gap-3">
                  {[
                    {
                      time: "08:30",
                      title: "Morning Flow",
                      type: "Class",
                      meta: "12 spots · Emma",
                    },
                    {
                      time: "10:00",
                      title: "Private Session",
                      type: "Appointment",
                      meta: "1:1 · 45 mins",
                    },
                    {
                      time: "12:30",
                      title: "Pilates Foundations",
                      type: "Class",
                      meta: "10 spots · Lara",
                    },
                    {
                      time: "18:00",
                      title: "Evening Restore",
                      type: "Class",
                      meta: "16 spots · Sophie",
                    },
                  ].map((item) => (
                    <div
                      key={`${item.time}-${item.title}`}
                      className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-4 py-4 shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-stone-100 px-3 py-2 text-sm font-medium text-stone-700">
                          {item.time}
                        </div>
                        <div>
                          <p className="text-base font-medium text-stone-900">
                            {item.title}
                          </p>
                          <p className="text-sm text-stone-500">{item.meta}</p>
                        </div>
                      </div>

                      <span className="rounded-full border border-stone-200 px-3 py-1 text-xs uppercase tracking-wide text-stone-500">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-stone-500">
                      Today&apos;s bookings
                    </p>
                    <p className="mt-2 text-3xl font-light text-stone-900">
                      18
                    </p>
                    <p className="mt-1 text-sm text-stone-500">
                      Classes and appointments in one view.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-stone-500">Client reminders</p>
                    <p className="mt-2 text-3xl font-light text-stone-900">
                      Auto
                    </p>
                    <p className="mt-1 text-sm text-stone-500">
                      Confirmations and reminders sent automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Features
          </p>
          <h2 className="mt-3 text-4xl font-light tracking-tight text-stone-900">
            Everything you need to run bookings with ease.
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Aura Studio keeps the essentials in one place, without the clutter.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Class scheduling",
              body: "Create recurring or one-off classes, manage capacity, and keep your weekly schedule organised.",
            },
            {
              title: "Appointment booking",
              body: "Offer private sessions or treatments with a simple booking flow that feels polished and clear.",
            },
            {
              title: "Client management",
              body: "See who has booked, track attendance, and keep client details in one calm, central place.",
            },
            {
              title: "Automated emails",
              body: "Send confirmations and reminders automatically to reduce admin and support fewer no-shows.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl bg-stone-100" />
              <h3 className="text-xl font-medium text-stone-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-stone-600">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="who-its-for"
        className="border-y border-stone-200 bg-white/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Who it&apos;s for
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-stone-900">
              Designed for the way modern practices actually work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-stone-200 bg-stone-50 p-8">
              <h3 className="text-2xl font-light text-stone-900">
                Studios running classes
              </h3>
              <p className="mt-4 leading-7 text-stone-600">
                Perfect for yoga and pilates studios managing weekly timetables,
                multiple teachers, class capacity, and client bookings.
              </p>
              <ul className="mt-6 space-y-3 text-stone-600">
                <li>• Weekly class schedules</li>
                <li>• Capacity and attendance tracking</li>
                <li>• Team-friendly admin</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-stone-200 bg-stone-50 p-8">
              <h3 className="text-2xl font-light text-stone-900">
                Solo practitioners and small practices
              </h3>
              <p className="mt-4 leading-7 text-stone-600">
                Ideal for teachers and practitioners offering a mix of classes,
                private sessions, treatments, or appointments.
              </p>
              <ul className="mt-6 space-y-3 text-stone-600">
                <li>• 1:1 appointment booking</li>
                <li>• Classes and appointments in one system</li>
                <li>• A polished client experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid items-center gap-10 rounded-[36px] border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Demo
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-stone-900">
              See how Aura Studio feels in practice.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-stone-600">
              Explore a sample booking experience for a modern studio or
              practice. View classes, book appointments, and get a feel for the
              client journey.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/book"
                className="rounded-full bg-stone-800 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-stone-700"
              >
                View Demo Booking Page
              </a>
              <a
                href="#early-access"
                className="rounded-full border border-stone-300 px-6 py-3.5 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-100"
              >
                Join Early Access
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-stone-200 bg-stone-50 p-5">
            <div className="space-y-4 rounded-[24px] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-stone-500">Client view</p>
                  <h3 className="text-2xl font-light text-stone-900">
                    Book a session
                  </h3>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
                  Mobile-friendly
                </span>
              </div>

              <div className="rounded-2xl border border-stone-200 p-4">
                <p className="font-medium text-stone-900">Morning Flow</p>
                <p className="mt-1 text-sm text-stone-500">
                  Tuesday · 8:30 am · 12 spots
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 p-4">
                <p className="font-medium text-stone-900">Private Session</p>
                <p className="mt-1 text-sm text-stone-500">
                  Wednesday · 10:00 am · 45 mins
                </p>
              </div>

              <button className="w-full rounded-full bg-stone-800 px-5 py-3 text-sm font-medium text-white">
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Why Aura Studio
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-stone-900">
              A calmer alternative to bloated booking tools.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Clear and simple",
                body: "Easy to set up, easy to use, and designed to stay out of the way.",
              },
              {
                title: "Made for this niche",
                body: "Created for studios and practices offering classes, appointments, or both.",
              },
              {
                title: "Designed to feel premium",
                body: "A polished experience for both you and your clients from first click to booking.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-medium text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl rounded-[36px] border border-stone-200 bg-white p-8 text-center shadow-sm lg:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl font-light tracking-tight text-stone-900">
            Simple pricing, early-stage access.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-stone-600">
            We&apos;re currently onboarding a small number of early access users
            as we refine Aura Studio with real studios and practices.
          </p>

          <div className="mt-8 rounded-[28px] bg-stone-50 p-8">
            <p className="text-sm text-stone-500">Early access</p>
            <div className="mt-2 text-5xl font-light text-stone-900">£30</div>
            <p className="mt-2 text-stone-500">per month</p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600">
              Includes class scheduling, appointment booking, client management,
              and automated emails.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              FAQ
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-stone-900">
              A few common questions.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Is Aura Studio for classes, appointments, or both?",
                a: "Both. You can manage recurring classes, one-off events, and private appointments in one platform.",
              },
              {
                q: "Who is it designed for?",
                a: "Aura Studio is built for yoga studios, pilates spaces, solo practitioners, and independent practices that want a calmer booking system.",
              },
              {
                q: "Can I try it before fully switching?",
                a: "Yes. Early access is designed for businesses who want to explore the product, give feedback, and help shape the first version.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-[24px] border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-medium text-stone-900">{item.q}</h3>
                <p className="mt-2 leading-7 text-stone-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="bg-stone-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
          <h2 className="text-4xl font-light tracking-tight md:text-5xl">
            Start taking bookings with more ease.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-300">
            Join early access to Aura Studio and be among the first studios and
            practices shaping the platform.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@aurastudio.co?subject=Early%20Access%20Request"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
            >
              Request Early Access
            </a>
            <a
              href="/book"
              className="rounded-full border border-stone-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Aura Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-stone-800">
              Privacy
            </a>
            <a href="#" className="transition hover:text-stone-800">
              Terms
            </a>
            <a
              href="mailto:hello@aurastudio.co"
              className="transition hover:text-stone-800"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
