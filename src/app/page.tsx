import PodarPrepExperience from "../domains/home/components/podarPrepExperiance";
import WhereItBegins from "../domains/home/components/WhereItBegins";
import { ChildExperiences } from "@/shared/components";
import { AdvantageSection } from "../domains/home/components/AdvantageSection";
import { TestimonialsSection } from "../domains/home/components/TestimonialsSection";
import Curriculum from "../domains/home/components/Curriculum";
import PrepJourney from "../domains/home/components/Prepjourney";
import { AdventureSection } from "@/domains/home/components/AdventureSection";
import { HeroSection } from "@/domains/home/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Order follows the Figma page; Adventure sits last so Footer follows it */}
      <HeroSection />
      <WhereItBegins />
      <AdvantageSection />
      <PrepJourney />
      <ChildExperiences />
      <Curriculum />
      <TestimonialsSection />
      <PodarPrepExperience />
      <AdventureSection />
    </main>
  );
}
