import PodarPrepExperience from "../domains/home/components/podarPrepExperiance";
import WhereItBegins from "../domains/home/components/WhereItBegins";
import { ChildExperiences } from "@/shared/components";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <WhereItBegins />
            <ChildExperiences />
      <PodarPrepExperience />
    </main>
  );
}