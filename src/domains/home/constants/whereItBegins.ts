export const WHERE_IT_BEGINS_IMAGES = {
  girl: "/whereitbegins/girl.png",
  heart: "/whereitbegins/heartdoodle.png",
} as const;

export const WHERE_IT_BEGINS_CONTENT = {
  label: "WHERE IT ALL BEGINS",
  badgeNumber: "0-6",
  badgeText: "GOLDEN YEARS",
  alphabet: "A",
  // Heading is split so each part can have its own colour
  headingLines: [
    [
      { text: "THE FIRST ", color: "#20487D" },
      { text: "SIX YEARS", color: "#2C6DC2" },
    ],
    [
      { text: "SHAPE A ", color: "#20487D" },
      { text: "LIFETIME.", color: "#F99C48" },
    ],
  ],
  description:
    "Early childhood is a critical window — when a child's brain is most open, most curious and most ready to learn. Everything they experience now becomes the foundation for the person they'll become.",
} as const;

export const WHERE_IT_BEGINS_FEATURES = [
  { title: "Curiosity", icon: "/whereitbegins/b11.png" },
  { title: "Confidence", icon: "/whereitbegins/b12.png" },
  { title: "Communication", icon: "/whereitbegins/b13.png" },
  { title: "Independence", icon: "/whereitbegins/b14.png" },
  { title: "Social Development", icon: "/whereitbegins/b15.png" },
  { title: "Learning Habits", icon: "/whereitbegins/b16.png" },
] as const;