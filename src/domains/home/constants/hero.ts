const ASSETS = {
  boy: "/hero/boy.png",
  girl: "/hero/girl.png",
  heart: "/hero/decor/heart.png",
  cap: "/hero/decor/cap.png",
  cloud: "/hero/decor/cloud.png",
  star: "/hero/decor/star.png",
} as const;

/** Desktop hero stage layout, assets, and shared copy. */
export const HERO = {
  assets: ASSETS,

  artboard: { width: 1920, height: 1318 },

  /** Absolute frames on the 1920×1318 artboard. */
  frames: {
    copy: { left: 120, top: 321, width: 603 },
    form: { left: 1248, top: 298, width: 540, height: 722 },
    girl: { left: 860, top: 307, width: 338 },
    boy: { left: 660, top: 540, width: 620 },
  },

  content: {
    headlineLead: "Because",
    headlineHighlight: "The first 6 years,",
    headlineRest: ["Prepare your", "Child for life."] as const,
    subhead:
      "A joyful, safe and purposeful preschool where children learn through play, grow with confidence, and build the foundations for a bright future.",
    cta: "Admissions Open for 2026–27",
    ctaMobileLines: ["Admissions Open", "for 2026–27 →"] as const,
    ctaHref: "#admissions",
    trust: "Trusted by 2,50,000+ happy families across India",
    boyAlt: "Podar Prep student with a toy airplane",
    girlAlt: "Podar Prep student playing with blocks",
    formTitle: "Let’s Begin",
    formTitleAccent: "Their Journey!",
    formIntro:
      "Share a few details and our team will get in touch with you shortly.",
    formSubmit: "Get In Touch",
    locationPlaceholder: "Select Location",
    fields: {
      parentName: "Parent’s Name *",
      phone: "Phone Number *",
      childName: "Child’s Name*",
      childDob: "Child’s Date of Birth*",
    },
  },

  decor: {
    heart: {
      left: 831,
      top: 290,
      width: 26.12,
      height: 23.95,
      src: ASSETS.heart,
    },
    cap: {
      left: 1122,
      top: 204,
      width: 99,
      height: 84,
      rotate: -17.56,
      src: ASSETS.cap,
    },
    cloudA: {
      left: 1721.21,
      top: 210.03,
      width: 83.59,
      height: 50.16,
      src: ASSETS.cloud,
    },
    cloudB: {
      left: 840,
      top: 951,
      width: 83.59,
      height: 50.16,
      src: ASSETS.cloud,
    },
    starUnderForm: {
      left: 1509.88,
      top: 1142.94,
      width: 26.12,
      height: 26.12,
      src: ASSETS.star,
      tone: "white" as const,
    },
  },

  locations: [
    "Puttenahalli",
    "JP Nagar",
    "Jayanagar",
    "BTM Layout",
    "Bannerghatta Road",
    "Arekere",
    "Hulimavu",
    "Gottigere",
    "Konanakunte",
    "Kumaraswamy Layout",
  ],
} as const;
