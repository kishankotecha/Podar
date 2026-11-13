import localFont from "next/font/local";

// Fredoka: standard width (300-700)
export const fredoka = localFont({
  src: [
    { path: "../app/Fonts/Fredoka-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/Fonts/Fredoka-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/Fredoka-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/Fonts/Fredoka-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/Fonts/Fredoka-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fredoka",
  display: "swap",
});

// Fredoka Condensed
export const fredokaCondensed = localFont({
  src: [
    { path: "../app/Fonts/Fredoka_Condensed-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/Fonts/Fredoka_Condensed-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/Fredoka_Condensed-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/Fonts/Fredoka_Condensed-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/Fonts/Fredoka_Condensed-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fredoka-condensed",
  display: "swap",
});

// Fredoka SemiCondensed
export const fredokaSemiCondensed = localFont({
  src: [
    { path: "../app/Fonts/Fredoka_SemiCondensed-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiCondensed-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiCondensed-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiCondensed-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiCondensed-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fredoka-semicondensed",
  display: "swap",
});

// Fredoka SemiExpanded
export const fredokaSemiExpanded = localFont({
  src: [
    { path: "../app/Fonts/Fredoka_SemiExpanded-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiExpanded-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiExpanded-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiExpanded-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/Fonts/Fredoka_SemiExpanded-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fredoka-semiexpanded",
  display: "swap",
});

// Fredoka Expanded
export const fredokaExpanded = localFont({
  src: [
    { path: "../app/Fonts/Fredoka_Expanded-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/Fonts/Fredoka_Expanded-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/Fredoka_Expanded-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/Fonts/Fredoka_Expanded-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/Fonts/Fredoka_Expanded-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fredoka-expanded",
  display: "swap",
});

// Nunito: full weight range, normal + italic
export const nunito = localFont({
  src: [
    { path: "../app/Fonts/Nunito-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../app/Fonts/Nunito-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../app/Fonts/Nunito-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/Fonts/Nunito-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../app/Fonts/Nunito-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/Fonts/Nunito-Italic.ttf", weight: "400", style: "italic" },
    { path: "../app/Fonts/Nunito-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/Fonts/Nunito-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../app/Fonts/Nunito-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/Fonts/Nunito-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../app/Fonts/Nunito-Bold.ttf", weight: "700", style: "normal" },
    { path: "../app/Fonts/Nunito-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../app/Fonts/Nunito-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../app/Fonts/Nunito-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../app/Fonts/Nunito-Black.ttf", weight: "900", style: "normal" },
    { path: "../app/Fonts/Nunito-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-nunito",
  display: "swap",
});