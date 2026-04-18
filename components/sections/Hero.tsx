import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Mobile-first product experiences
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build a brand experience that feels sharp, fast, and unforgettable.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            Aura Studio helps modern brands turn bloated ideas into clear,
            mobile-first digital products that convert.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#cta">Start your project</Button>
            <Button href="#demo" variant="secondary">
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
