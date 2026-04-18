import Container from "@/components/ui/Container";

export default function Demo() {
  return (
    <section id="demo" className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Instant clarity
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
              Show the result early.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Don’t make users scroll to understand your value. Put the output,
              transformation, or product preview near the top so they get it in
              seconds.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>

              <div className="space-y-3">
                <div className="rounded-xl bg-white p-3 text-black">
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Before
                  </p>
                  <p className="mt-1 text-sm text-neutral-700">
                    Generic messaging. Too many ideas. Weak conversion path.
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-800 p-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-white/50">
                    After
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Clear offer. Strong mobile UX. One focused CTA. Faster path
                    to value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
