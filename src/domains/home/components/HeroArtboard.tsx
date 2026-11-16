"use client";

import type { ReactNode } from "react";
import { ScaledArtboard } from "@/shared/ui/ScaledArtboard";
import { HERO } from "@/domains/home/constants/hero";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
};

/**
 * Scales the fixed desktop hero stage to the host width.
 * Padding comes from HERO.padding (stage height + content offset).
 */
export function HeroArtboard({ children }: Props) {
  const { width, contentHeight } = HERO.artboard;
  const { top: pt, bottom: pb, topClass } = HERO.padding;
  const totalHeight = pt + contentHeight + pb;

  return (
    <ScaledArtboard width={width} height={totalHeight}>
      {/* Content origin stays zero-based; topClass applies the padding offset. */}
      <div className={cn("absolute inset-x-0 bottom-0", topClass)}>
        {children}
      </div>
    </ScaledArtboard>
  );
}
