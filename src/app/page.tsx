import { AdvantageSection } from "@/src/components/home/advantage/AdvantageSection";
import { TestimonialsSection } from "@/src/components/home/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <AdvantageSection />
      <TestimonialsSection />
    </main>
  );
}
