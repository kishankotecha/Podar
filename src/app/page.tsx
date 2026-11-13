import PodarPrepExperience from "../domains/home/components/podarPrepExperiance";
import WhereItBegins from "../domains/home/components/WhereItBegins";
import { ChildExperiences } from "@/shared/components";
import { AdvantageSection } from "@/src/components/home/advantage/AdvantageSection";
import { TestimonialsSection } from "@/src/components/home/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Order follows the Figma page */}
      <WhereItBegins />
      <AdvantageSection />
      <ChildExperiences />
      <TestimonialsSection />
      <PodarPrepExperience />
    </main>
  );
}
