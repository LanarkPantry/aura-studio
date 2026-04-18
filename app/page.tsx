import FloatingNav from "@/components/ui/FloatingNav";
import Hero from "@/components/sections/Hero";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--paper)] text-[var(--ink)]">
      <FloatingNav />
      <Hero />

      <section id="why" className="px-4 pb-16 pt-8 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1100px] border-t border-[var(--line)] pt-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Why Aura
          </p>
          <h2 className="mt-4 max-w-[16ch] font-serif text-[2rem] leading-[0.98] sm:text-[2.7rem]">
            Most booking tools still force smaller practices into the wrong
            shape.
          </h2>
          <p className="mt-4 max-w-[42ch] text-[15px] leading-7 text-[var(--ink-soft)]">
            Aura is designed for studios, centres, and practitioners running
            classes, appointments, or both — without patching together multiple
            systems.
          </p>
        </div>
      </section>

      <section id="for" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1100px] border-t border-[var(--line)] pt-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Who it’s for
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Studios",
                copy: "For businesses balancing timetabled classes, memberships, and private bookings.",
              },
              {
                title: "Centres",
                copy: "For shared spaces with multiple practitioners and mixed service types.",
              },
              {
                title: "Solo practitioners",
                copy: "For independent practitioners offering sessions, workshops, and small group experiences.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[var(--line)] bg-white/60 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <h3 className="font-serif text-[1.6rem]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1100px] border-t border-[var(--line)] pt-6">
          <a
            href="mailto:hello@aurastudio.co"
            className="inline-block bg-[var(--ink)] px-5 py-3 text-[14px] text-[var(--paper)]"
          >
            Request access
          </a>
        </div>
      </section>
    </main>
  );
}
