export interface JourneyStep {
  id: number;
  title: string;
  description: string;
  icon: { src: string; width: number; height: number };
}

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Daycare",
    description: "Care and learning throughout the day.",
    icon: { src: "/section/search.svg", width: 33, height: 33 },
  },
  {
    id: 2,
    title: "Playgroup",
    description: "Exploring the world through play.",
    icon: { src: "/section/compass.svg", width: 33, height: 33 },
  },
  {
    id: 3,
    title: "Nursery",
    description: "Building language, early concepts and everyday skills.",
    icon: { src: "/section/pencil.svg", width: 26, height: 26 },
  },
  {
    id: 4,
    title: "Junior KG",
    description: "Developing foundational literacy, numeracy and thinking skills.",
    icon: { src: "/section/childs.svg", width: 34, height: 35 },
  },
  {
    id: 5,
    title: "Senior KG",
    description: "Strengthening academic skills and a smooth transition to school.",
    icon: { src: "/section/rocket.svg", width: 30, height: 30 },
  },
];
