"use client";

import type { ReactNode } from "react";
import { ScaledArtboard } from "@/shared/ui/ScaledArtboard";
import { HERO } from "@/domains/home/constants/hero";

type Props = {
  children: ReactNode;
};

/**
 * Scales the fixed desktop hero stage to the host width so layout stays proportional.
 * Adds configurable top/bottom padding around the content area via HERO.padding.
 */
export function HeroArtboard({ children }: Props) {
  const { width, contentHeight } = HERO.artboard;
  const { top: pt, bottom: pb } = HERO.padding;
  const totalHeight = pt + contentHeight + pb;

  return (
    <ScaledArtboard width={width} height={totalHeight}>
      {/* Offset all content by padding.top so element positions stay zero-based */}
      <div className="absolute inset-0" style={{ top: pt }}>
        {children}
      </div>
    </ScaledArtboard>
  );
}
