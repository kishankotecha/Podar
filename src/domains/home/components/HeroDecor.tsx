import { HERO } from "@/domains/home/constants/hero";

type DecorItem = {
  width: number;
  height: number;
  src: string;
  frameClass: string;
};

function DecorImg({ item }: { item: DecorItem | undefined }) {
  if (!item?.src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.src}
      alt=""
      width={item.width}
      height={item.height}
      className={item.frameClass}
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
      <DecorImg item={d.cloudA} />
      <DecorImg item={d.cloudB} />
      <DecorImg item={d.starUnderForm} />
    </div>
  );
}
