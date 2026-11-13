"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type BreathingMascotProps = {
  className?: string;
};

/** Podar elephant with the "Breathe" motion from Figma (Animate It plugin). */
export function BreathingMascot({ className }: BreathingMascotProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none", className)}
      animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
    >
      <Image src="/images/podar/mascot-elephant.png" alt="" width={351} height={505} className="h-auto w-full" />
    </motion.div>
  );
}
