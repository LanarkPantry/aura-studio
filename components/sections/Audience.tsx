import Container from "@/components/ui/Container";

const audiences = [
  {
    title: "Studios",
    accent: "var(--plum)",
    copy: "For businesses balancing timetabled classes, memberships, and private bookings without wanting a bloated setup.",
  },
  {
    title: "Centres",
    accent: "var(--clay)",
    copy: "For shared spaces with multiple practitioners, mixed service types, and a need for something more coherent than patchwork software.",
  },
  {
    title: "Solo practitioners",
    accent: "var(--sage)",
    copy: "For independent practitioners who offer both sessions and small group experiences, and need a system that reflects both.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="pt-16 sm:pt-24">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-t border-[var(--ink)] pt-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Who it’s for
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map((item, index) => (
              <article
                key={item.title}
                className={`relative min-h-[280px] overflow-hidden border border-[var(--line)] p-5 shadow-[0_14px_36px_rgba(58,42,34,0.06)] ${
                  index === 1
                    ? "bg-[rgba(255,255,255,0.84)]"
                    : "bg-[rgba(255,255,255,0.62)]"
                }`}
              >
                <div
                  className="absolute right-[-16px] top-[-16px] h-24 w-24 opacity-90 blur-2xl"
                  style={{ backgroundColor: item.accent }}
                />
                <div
                  className="mb-10 h-10 w-10"
                  style={{ backgroundColor: item.accent }}
                />
                <h3 className="font-serif text-[1.8rem] tracking-[-0.04em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
