const ASSETS = {
  rainbow: { src: "/adventure/rainbow.png", width: 136, height: 197 },
  moon: { src: "/adventure/moon.png", width: 81, height: 92 },
  birds: { src: "/adventure/birds.png", width: 88, height: 55 },
  ufo: { src: "/adventure/ufo.png", width: 178, height: 142 },
  leftProps: { src: "/adventure/left-props.png", width: 628, height: 1024 },
  rightProps: { src: "/adventure/right-props.png", width: 976, height: 796 },
  cloudFloor: { src: "/adventure/cloud-floor.png", width: 1024, height: 234 },
  elephant: { src: "/adventure/elephant.png", width: 743, height: 1116 },
  badgeStar: { src: "/adventure/badge-star.png", width: 64, height: 60 },
} as const;

export type AdventureAsset = (typeof ASSETS)[keyof typeof ASSETS];

/**
 * Cream CTA band — Figma Rectangle 19 (1920×1045).
 * Desktop locks to ScaledArtboard; fluid layout handles viewports below lg.
 */
export const ADVENTURE = {
  assets: ASSETS,

  artboard: { width: 1920, height: 1045 },

  /** Section outer padding (cream band). Desktop artboard owns its own space. */
  padding: {
    top: 0,
    bottom: 0,
  },

  /** Exact Figma colors — do not swap for nearby brand tokens. */
  colors: {
    accent: "#FFDF87",
    ctaText: "#2C6DC1",
    subhead: "#D2D2D2",
    badgeText: "#FFDF87",
  },

  dots: {
    opacity: 0.16,
    size: 26,
  },

  /** Absolute frames on the 1920×1045 artboard (desktop only). */
  frames: {
    panel: { left: 120, top: 200, width: 1680, height: 620, radius: 48 },
    /** Panel-relative: badge + headline + subhead */
    copy: { left: 280, top: 175, width: 1360 },
    /** Panel-relative: Enquire CTA */
    cta: { top: 400 },
    /** Panel-relative cloud floor */
    cloudFloor: { left: 0, top: 420, width: 1680, height: 200 },
    leftProps: { left: 150, top: 280, width: 300 },
    rightProps: { left: 1500, top: 260, width: 260 },
    elephant: { left: 1580, top: 690, width: 135 },
    rainbow: { left: 0, top: 20, width: 145 },
    moon: { left: 1380, top: 35, width: 85 },
    birds: { left: 1790, top: 105, width: 95 },
    ufo: { left: 180, top: 895, width: 170 },
  },

  desktop: {
    badge: {
      starW: 16,
      starH: 15,
      fontSize: 13,
      tracking: "0.1em",
    },
    /** Full class so Tailwind sees both sizes (44 / 48). */
    headlineClass:
      "mt-6 whitespace-nowrap text-[44px] leading-none xl:text-[48px]",
    subhead: { size: 18, maxWidth: 640 },
    cta: {
      height: 56,
      fontSize: 20,
      paddingX: 36,
    },
  },

  /**
   * Mobile + tablet (< lg). Cream band + inset blue card.
   * Doodles stay in the same corners as before — only small spacing nudges
   * so they don’t sit on the blue card’s rounded corner on tablet.
   */
  fluid: {
    shellClass:
      "relative px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 md:px-8 md:pb-14 md:pt-12 lg:hidden",
    rainbowClass:
      "pointer-events-none absolute left-0 top-4 z-0 w-12 opacity-60 sm:left-2 sm:top-5 sm:w-14 md:left-3 md:top-5 md:w-16",
    moonClass:
      "pointer-events-none absolute left-[62%] top-3 z-0 w-9 -translate-x-1/2 opacity-75 sm:left-[64%] sm:top-4 sm:w-11 md:left-[66%] md:top-4 md:w-12",
    birdsClass:
      "pointer-events-none absolute right-1 top-16 z-0 w-9 opacity-60 sm:right-2 sm:top-[4.5rem] sm:w-11 md:right-4 md:top-[4.75rem] md:w-12",
    ufoClass:
      "pointer-events-none absolute bottom-4 left-3 z-0 w-12 opacity-60 sm:bottom-5 sm:left-5 sm:w-14 md:w-16",
    /** Wrapper lets the elephant hang past the clipped blue card. */
    panelWrapClass:
      "relative z-10 mx-auto mt-16 mb-14 w-full max-w-[40rem] sm:mt-20 sm:mb-12 sm:max-w-[44rem] md:mt-24 md:mb-12 md:max-w-[52rem]",
    panelClass:
      "relative flex w-full flex-col overflow-hidden rounded-[1.75rem] bg-podar-blue text-center shadow-[0_18px_40px_-24px_rgba(6,41,83,0.4)] sm:rounded-[2rem] md:rounded-[2.25rem]",
    copyClass:
      "relative z-20 flex flex-col items-center px-5 pb-5 pt-9 sm:px-8 sm:pb-6 sm:pt-11 md:px-12 md:pb-7 md:pt-12",
    headlineClass:
      "mt-4 max-w-[18ch] text-[clamp(1.5rem,6.2vw,2.25rem)] leading-[1.2] sm:mt-5 sm:max-w-[20ch] md:text-[2.35rem]",
    subheadClass:
      "mt-3 max-w-[36ch] text-[0.9375rem] leading-[1.65] sm:mt-3.5 sm:text-base md:max-w-[42ch]",
    ctaClass:
      "mt-5 inline-flex h-12 w-full max-w-[15rem] items-center justify-center gap-2 rounded-full bg-podar-yellow px-5 font-nunito text-[15px] font-bold shadow-[0_6px_18px_-6px_rgba(248,214,79,0.45)] transition hover:brightness-95 sm:mt-6 sm:h-14 sm:max-w-[16.5rem] sm:text-base md:max-w-[17.5rem]",
    /**
     * Left props: mobile keeps them in the bottom scene (no text overlap).
     * Tablet+ moves them to the TOP of the blue card.
     */
    leftPropsMobileClass:
      "pointer-events-none absolute bottom-0 left-0 z-10 h-[95%] w-auto max-w-[52%] object-contain object-bottom sm:hidden",
    leftPropsTabletClass:
      "pointer-events-none absolute left-1 top-6 z-[15] hidden h-auto w-[28%] max-w-[9rem] object-contain object-top sm:block md:left-2 md:top-8 md:w-[26%] md:max-w-[10.5rem]",
    rightPropsClass:
      "pointer-events-none absolute right-0 top-6 z-[15] hidden w-[22%] max-w-[5.5rem] h-auto object-contain object-top opacity-90 sm:block sm:right-1 sm:top-8 sm:max-w-[6.5rem] md:right-2 md:top-10 md:max-w-[7.5rem]",
    sceneClass:
      "relative isolate z-10 h-[11.5rem] w-full shrink-0 overflow-hidden bg-podar-blue min-[475px]:h-[14rem] md:h-[17rem]",
    /**
     * Edge-to-edge cloud, clipped by the panel radius — no cream corner gaps.
     * Below 475px: cover. From 475px: fill (avoids flat-cut peaks).
     */
    cloudClass:
      "pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[62%] w-full object-cover object-bottom min-[475px]:h-[78%] min-[475px]:object-fill md:h-[82%]",
    /** Sits on the blue card’s bottom border (right), hangs over onto cream. */
    elephantClass:
      "pointer-events-none absolute bottom-0 right-0 z-20 w-[26%] max-w-[5.5rem] translate-y-[28%] h-auto object-contain sm:right-1 sm:max-w-[6rem] md:right-2 md:w-[22%] md:max-w-[6.75rem]",
  },

  content: {
    badge: "ADMISSIONS OPEN AY 2026-27",
    headlineBefore: "YOUR CHILD'S NEXT",
    headlineAccent: "ADVENTURE STARTS HERE.",
    subhead:
      "Discover a preschool experience built around exploration, meaningful learning and individual development.",
    cta: "Enquire Now",
    ctaHref: "#contact",
    elephantAlt: "Podar Prep elephant mascot",
    leftPropsAlt: "Paper plane and alphabet blocks",
    rightPropsAlt: "Clouds and stars",
  },
} as const;
