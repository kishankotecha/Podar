"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
};

/**
 * Fixed design stage scaled to host width so Figma layout stays proportional.
 * Uses top-left transform origin so the painted stage stays continuous (no center gap).
 */
export function ScaledArtboard({ width, height, children, className }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const update = () => {
      setScale(el.clientWidth / width);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={hostRef}
      className={
        className ?? "relative mx-auto hidden w-full overflow-hidden lg:block"
      }
      style={{ height: height * scale }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width,
          height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
