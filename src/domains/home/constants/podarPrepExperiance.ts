export const PODAR_PREP_ASSETS_BASE = "/podarprepexperience";

export const PODAR_PREP_IMAGES = {
  star: `${PODAR_PREP_ASSETS_BASE}/starticon.png`,
  elephant: `${PODAR_PREP_ASSETS_BASE}/titltedelephant.png`,
  message: `${PODAR_PREP_ASSETS_BASE}/message.png`,
  bus: `${PODAR_PREP_ASSETS_BASE}/bus.png`,
} as const;

export const PODAR_PREP_CONTENT = {
  label: "Why parents choose Podar Prep",
  headingOrange: "What makes the ",
  headingBlue: "Podar Prep experience different?",
  description:
    "Parents choose Podar Prep because we go beyond early education — we create a foundation for life.",
} as const;

export type PodarPrepFeature = {
  icon: string;
  title: string;
  desc: string;
};

export const PODAR_PREP_FEATURES: PodarPrepFeature[] = [
  {
    icon: `${PODAR_PREP_ASSETS_BASE}/s1.png`,
    title: "GLOCAL CURRICULUM",
    desc: "A unique blend of NEP 2020, EYFS (UK) and EYLF (Australia).",
  },
  {
    icon: `${PODAR_PREP_ASSETS_BASE}/s2.png`,
    title: "SPECIALISED PROGRAMMES",
    desc: "Symphonics for early literacy & Number Magic for a strong numeracy base.",
  },
  {
    icon: `${PODAR_PREP_ASSETS_BASE}/s3.png`,
    title: "SCREEN-FREE CODING",
    desc: "Building logical thinking and problem-solving through play.",
  },
  {
    icon: `${PODAR_PREP_ASSETS_BASE}/s4.png`,
    title: "TRAINED EDUCATORS",
    desc: "Caring, qualified and continuously trained in early-years education.",
  },
  {
    icon: `${PODAR_PREP_ASSETS_BASE}/s5.png`,
    title: "PARENT PARTICIPATION",
    desc: "A collaborative approach that keeps parents involved in their child's learning.",
  },
  {
    icon: `${PODAR_PREP_ASSETS_BASE}/s6.png`,
    title: "GRADE 1 ADMISSION PREFERENCE",
    desc: "Preference for Grade 1 admission at Podar International School.",
  },
];