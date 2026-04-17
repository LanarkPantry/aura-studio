export default function HomePage() {
  return (
    <main className="bg-[#F8F5F1] text-[#2E2A26]">
      {/* ===== HERO ===== */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#7B7269]">
              Booking software
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Simple, beautiful booking for modern studios and practices.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#665E56]">
              Manage classes, appointments, and clients in one calm, easy-to-use
              platform.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#early"
                className="rounded-full bg-[#55624A] px-6 py-3 text-sm text-white shadow-md hover:bg-[#4A5640]"
              >
                Request early access
              </a>

              <a href="/book" className="text-sm text-[#2E2A26] underline">
                View demo →
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/images/studio.jpg"
              alt="Studio"
              className="w-full h-[520px] object-cover rounded-[8px]"
            />

            {/* UI Overlay */}
            <div className="absolute -bottom-10 left-10 hidden lg:block w-[300px] bg-white shadow-xl p-4">
              <p className="text-sm text-[#7C736A]">Morning Flow</p>
              <p className="text-lg font-medium">Tuesday · 8:30</p>
              <button className="mt-3 w-full bg-[#55624A] text-white py-2 text-sm">
                Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL SECTION ===== */}
      <section className="bg-[#EFE7DE]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-4xl leading-tight">
              Designed for real studios and practices.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#665E56] max-w-lg">
              Aura Studio is built for the way modern practitioners actually
              work — classes, appointments, and clients, all in one place.
            </p>
          </div>

          <div>
            <img
              src="/images/session.jpg"
              alt="Session"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SECTION ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl">
            Everything you need, nothing you don’t.
          </h2>

          <p className="mt-4 text-lg text-[#665E56]">
            Keep bookings, schedules, and clients in one calm, focused system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            "Class scheduling",
            "Appointments",
            "Client management",
            "Automated emails",
          ].map((item) => (
            <div key={item} className="border border-[#E5DBCF] p-6 bg-white">
              <h3 className="font-medium">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== IMAGE BREAK ===== */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <img
          src="/images/detail.jpg"
          alt="Detail"
          className="w-full h-[420px] object-cover"
        />
      </section>

      {/* ===== DEMO CTA ===== */}
      <section className="bg-[#2F372A] text-white text-center py-24 px-6">
        <h2 className="font-serif text-4xl">
          See how Aura Studio feels in practice.
        </h2>

        <p className="mt-4 text-lg text-[#DAD8D2]">
          Explore the booking experience for a modern studio.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="/book"
            className="bg-white text-[#2F372A] px-6 py-3 rounded-full text-sm"
          >
            View demo
          </a>

          <a href="#early" className="text-white underline text-sm">
            Request access →
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-10 text-sm text-[#746C63]">
        © Aura Studio
      </footer>
    </main>
  );
}
