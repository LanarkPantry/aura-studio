import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Ready to launch
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl">
            Let’s turn your product into something people instantly understand.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Cleaner messaging. Better mobile UX. Stronger differentiation.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/">Book a first step</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
