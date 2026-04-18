import Hero from "@/components/sections/Hero";
import Demo from "@/components/sections/Demo";
import Steps from "@/components/sections/Steps";
import CTA from "@/components/sections/CTA";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Demo />
      <Steps />
      <CTA />
    </main>
  );
}
