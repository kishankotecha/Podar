"use client";

import type { ReactNode } from "react";
import { ScaledArtboard } from "@/shared/ui/ScaledArtboard";
import { HERO } from "@/domains/home/constants/hero";

type Props = {
  children: ReactNode;
};

/** Scales the fixed desktop hero stage to the host width so layout stays proportional. */
export function HeroArtboard({ children }: Props) {
  const { width, height } = HERO.artboard;
  return (
    <ScaledArtboard width={width} height={height}>
      {children}
    </ScaledArtboard>
  );
}
