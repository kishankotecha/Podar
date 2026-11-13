import { HERO } from "@/domains/home/constants/hero";

type DecorItem = {
  left: number;
  top: number;
  width: number;
  height: number;
  src: string;
  rotate?: number;
  tone?: "yellow" | "white";
  className?: string;
};

const starYellow =
  "[filter:brightness(0)_saturate(100%)_invert(92%)_sepia(42%)_saturate(700%)_hue-rotate(358deg)_brightness(103%)_contrast(98%)]";

function DecorImg({ item }: { item: DecorItem | undefined }) {
  if (!item?.src) return null;

  const toneClass =
    item.tone === "yellow"
      ? starYellow
      : item.tone === "white"
        ? "opacity-40"
        : "";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.src}
      alt=""
      width={item.width}
      height={item.height}
      className={`pointer-events-none absolute select-none ${toneClass} ${item.className ?? ""}`}
      style={{
        left: item.left,
        top: item.top,
        width: item.width,
        height: item.height,
        transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined,
      }}
    />
  );
}

/** Decorative overlays for the desktop hero stage. */
export function HeroDecor() {
  const d = HERO.decor;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <DecorImg item={d.heart} />
      <DecorImg item={d.cap} />
      <DecorImg item={{ ...d.cloudA, className: "opacity-90" }} />
      <DecorImg item={{ ...d.cloudB, className: "opacity-80" }} />
      <DecorImg item={d.starUnderForm} />
    </div>
  );
}
