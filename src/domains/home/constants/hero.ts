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

  artboard: { width: 1920, contentHeight: 965 },

  /**
   * Top/bottom spacing in artboard pixels.
   * Numeric values size the stage; topClass offsets the content layer.
   */
  padding: {
    top: 100,
    bottom: 40,
    /** Keep in sync with padding.top (100px → 6.25rem). */
    topClass: "top-[6.25rem]",
  },

  /** Absolute frames on the content origin — full class literals for the scanner. */
  frameClass: {
    copy: "absolute z-20 left-[7.5rem] top-[7.3125rem] w-[37.6875rem]",
    form: "absolute z-30 left-[78rem] top-[5.875rem] w-[33.75rem]",
    girl: "absolute z-20 left-[53.75rem] top-[6.4375rem] w-[21.125rem]",
    boy: "absolute z-[15] left-[41.25rem] top-[21rem] w-[38.75rem]",
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
      width: 26.12,
      height: 23.95,
      src: ASSETS.heart,
      frameClass:
        "pointer-events-none absolute left-[51.9375rem] top-[5.375rem] h-[1.496875rem] w-[1.6325rem] select-none",
    },
    cap: {
      width: 99,
      height: 84,
      src: ASSETS.cap,
      frameClass:
        "pointer-events-none absolute left-[70.125rem] top-0 h-[5.25rem] w-[6.1875rem] -rotate-[17.56deg] select-none",
    },
    cloudA: {
      width: 83.59,
      height: 50.16,
      src: ASSETS.cloud,
      frameClass:
        "pointer-events-none absolute left-[107.575625rem] top-[0.376875rem] h-[3.135rem] w-[5.224375rem] select-none opacity-90",
    },
    cloudB: {
      width: 83.59,
      height: 50.16,
      src: ASSETS.cloud,
      frameClass:
        "pointer-events-none absolute left-[52.5rem] top-[46.6875rem] h-[3.135rem] w-[5.224375rem] select-none opacity-80",
    },
    starUnderForm: {
      width: 19.59,
      height: 20.14,
      src: ASSETS.star,
      frameClass:
        "pointer-events-none absolute left-[94.3675rem] top-[58.68375rem] h-[1.25875rem] w-[1.224375rem] select-none opacity-40",
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
