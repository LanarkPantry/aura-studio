import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Clarify the offer",
    description:
      "Define exactly who it’s for, what it does, and why it matters fast.",
  },
  {
    number: "02",
    title: "Design for mobile first",
    description:
      "Start with the smallest screen so the message and interaction stay focused.",
  },
  {
    number: "03",
    title: "Launch and refine",
    description:
      "Ship quickly, measure behavior, and improve based on real user signals.",
  },
];

export default function Steps() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            How it works
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
            A simpler path to a stronger product.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-white/40">{step.number}</p>
              <h3 className="mt-3 text-lg font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
