import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { fredoka, nunito } from "@/src/lib/fonts";
import type { Advantage, AdvantageTheme } from "./data";

const THEMES: Record<
  AdvantageTheme,
  { card: string; iconBox: string; title: string; description: string; number: string }
> = {
  blue: {
    card: "bg-[#e9f2fb]",
    iconBox: "bg-[#2c6dc1]",
    title: "text-[#20487d]",
    description: "text-[#677e96]",
    number: "text-[#c8ddf6]",
  },
  green: {
    card: "bg-[#edf8e7]",
    iconBox: "bg-[#91d074]",
    title: "text-[#6bb748]",
    description: "text-[#929691]",
    number: "text-[#c6efb0]",
  },
  orange: {
    card: "bg-[#fef1e0]",
    iconBox: "bg-[#fe9a3e]",
    title: "text-[#fe9a3e]",
    description: "text-[#a69688]",
    number: "text-[rgba(254,154,62,0.3)]",
  },
  pink: {
    card: "bg-[#fdeef5]",
    iconBox: "bg-[#fe78a8]",
    title: "text-[#fe78a8]",
    description: "text-[#a7939a]",
    number: "text-[rgba(248,165,193,0.5)]",
  },
};

type AdvantageCardProps = {
  item: Advantage;
};

export function AdvantageCard({ item }: AdvantageCardProps) {
  const theme = THEMES[item.theme];
  const Icon = item.icon;

  return (
    <article
      style={{ "--tilt": `${item.rotate}deg` } as CSSProperties}
      className={cn(
        "relative min-h-[18.0625rem] rounded-[1.625rem] px-[2.125rem] pb-8 pt-[3.625rem]",
        "transition-[rotate] duration-300 ease-out md:rotate-(--tilt) md:hover:rotate-0",
        theme.card,
      )}
    >
      <span
        aria-hidden
        className={cn(
          fredoka.className,
          "pointer-events-none absolute right-3 top-0 select-none text-[5.5rem] font-bold leading-[6.6875rem]",
          theme.number,
        )}
      >
        {item.number}
      </span>

      <div
        className={cn(
          "relative flex size-[3.9375rem] items-center justify-center rounded-[1.25rem]",
          theme.iconBox,
        )}
      >
        {item.iconSrc ? (
          <Image src={item.iconSrc} alt="" width={33} height={33} className="size-[2.0625rem]" />
        ) : (
          <Icon aria-hidden className="size-[2.0625rem] text-white" />
        )}
      </div>

      <h3
        className={cn(
          fredoka.className,
          "relative mt-[2.25rem] text-[1.375rem] font-bold uppercase leading-[2rem] lg:text-[1.625rem] lg:leading-[2.25rem]",
          theme.title,
        )}
      >
        {item.title}
      </h3>

      <p
        className={cn(
          nunito.className,
          "relative mt-[0.875rem] max-w-[20.25rem] text-base font-medium leading-normal lg:text-[1.125rem]",
          theme.description,
        )}
      >
        {item.description}
      </p>
    </article>
  );
}
