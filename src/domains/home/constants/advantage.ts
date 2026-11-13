import type { IconType } from "react-icons";
import { FiSearch } from "react-icons/fi";
import { IoColorPalette } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";

export type AdvantageTheme = "blue" | "green" | "orange" | "pink";

export type Advantage = {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Fallback icon (react-icons) – used when no exported image is set */
  icon: IconType;
  /** Exported icon from Figma (white glyph only, without the coloured box) */
  iconSrc?: string;
  theme: AdvantageTheme;
  /** Card tilt in CSS degrees (Figma rotation sign is inverted) */
  rotate: number;
};

export const ADVANTAGES: Advantage[] = [
  {
    id: "glocal-curriculum",
    number: "01",
    title: "Glocal Curriculum",
    description: "Encouraging curiosity and a love for discovery in every child.",
    icon: FiSearch,
    iconSrc: "/images/podar/icon-glocal.png",
    theme: "blue",
    rotate: -4.94,
  },
  {
    id: "stream-learning",
    number: "02",
    title: "S.T.R.E.A.M. Learning",
    description:
      "Exploring concepts across science, technology, reading, engineering, arts and mathematics.",
    icon: IoColorPalette,
    iconSrc: "/images/podar/icon-stream.png",
    theme: "green",
    rotate: 3.59,
  },
  {
    id: "story-spiral-learning",
    number: "03",
    title: "Story & Spiral Learning",
    description: "Building understanding through stories and revisiting concepts.",
    icon: HiSparkles,
    iconSrc: "/images/podar/icon-story.png",
    theme: "orange",
    rotate: -3.28,
  },
  {
    id: "screen-free-coding",
    number: "04",
    title: "Screen-Free Coding",
    description:
      "Developing logical thinking and problem-solving through hands-on, play-based activities.",
    icon: FaHandHoldingHeart,
    iconSrc: "/images/podar/icon-coding.png",
    theme: "pink",
    rotate: 2.15,
  },
];
