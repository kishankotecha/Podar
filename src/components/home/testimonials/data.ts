export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  /** e.g. "Aarav, Playgroup" */
  childInfo: string;
  avatar: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "priya-sharma",
    quote:
      "My daughter runs into school every morning with a smile. The teachers genuinely know her — her moods, her favourite stories, her little wins. I couldn’t ask for a more caring start.",
    name: "Priya Sharma",
    childInfo: "Aarav, Playgroup",
    avatar: "/images/podar/priya-sharma.png",
    rating: 5,
  },
  // TODO: replace with real testimonials (design only shows the first one)
  {
    id: "rahul-mehta",
    quote:
      "The story-based learning has made our son so curious. Every evening he comes home with a new question and a new story to tell us.",
    name: "Rahul Mehta",
    childInfo: "Vihaan, Nursery",
    avatar: "/images/podar/priya-sharma.png",
    rating: 5,
  },
  {
    id: "ananya-iyer",
    quote:
      "We love how involved the teachers keep us. The regular updates and parent activities make us feel part of our child's learning journey.",
    name: "Ananya Iyer",
    childInfo: "Myra, Junior KG",
    avatar: "/images/podar/priya-sharma.png",
    rating: 5,
  },
];
