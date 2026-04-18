import FloatingNav from "@/components/ui/FloatingNav";
import Hero from "@/components/sections/Hero";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <FloatingNav />
      <Hero />

      <section id="why" className="px-4 pb-16 pt-6 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1100px] border-t border-[rgba(45,34,29,0.12)] pt-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Why Aura
          </p>
          <h2 className="mt-4 max-w-[16ch] text-[2rem] leading-[0.98] tracking-[-0.05em] sm:text-[2.8rem]">
            Most booking tools still force smaller practices into the wrong
            shape.
          </h2>
        </div>
      </section>

      <section id="for" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1100px] border-t border-[rgba(45,34,29,0.12)] pt-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Who it’s for
          </p>
        </div>
      </section>

      <section id="cta" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1100px] border-t border-[rgba(45,34,29,0.12)] pt-6">
          <a
            href="mailto:hello@aura-studio.co"
            className="inline-block bg-[var(--ink)] px-5 py-3 text-[14px] font-medium text-[var(--paper)]"
          >
            Request access
          </a>
        </div>
      </section>
    </main>
  );
}
