import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fredoka, nunito } from "@/lib/fonts";

type BadgeVariant = "blue" | "pink";

const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  blue: "border-[#c2dcff] bg-[#fbfdff] text-[#20487d]",
  pink: "border-[#ffd9eb] bg-[#fdeef5] text-[#c42b73]",
};

type SectionBadgeProps = {
  label: string;
  variant?: BadgeVariant;
  className?: string;
};

export function SectionBadge({ label, variant = "blue", className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        nunito.className,
        "inline-flex h-6 items-center gap-1.5 rounded-full border px-2.5 text-[0.625rem] font-bold uppercase leading-normal",
        BADGE_VARIANTS[variant],
        className,
      )}
    >
      <Image
        src="/images/podar/badge-star.png"
        alt=""
        width={15}
        height={15}
        className={cn("shrink-0", variant === "pink" ? "size-[0.8125rem]" : "size-[0.9375rem]")}
      />
      {label}
    </span>
  );
}

type SectionHeaderProps = {
  id?: string;
  badge: string;
  badgeVariant?: BadgeVariant;
  /** Title content – wrap highlighted words in <span className="text-[...]"> */
  title: ReactNode;
  titleClassName?: string;
  description?: ReactNode;
  className?: string;
};

export function SectionHeader({
  id,
  badge,
  badgeVariant = "blue",
  title,
  titleClassName,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mx-auto flex w-full max-w-[50.125rem] flex-col items-center text-center", className)}>
      <SectionBadge label={badge} variant={badgeVariant} />

      <h2
        id={id}
        className={cn(
          fredoka.className,
          "mt-[1.375rem] text-[1.75rem] font-bold uppercase leading-[2.25rem] md:text-[2.25rem] md:leading-[2.75rem] lg:text-[2.625rem] lg:leading-[3.1875rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description && (
        <p className={cn(nunito.className, "mt-[1.625rem] text-base font-medium leading-normal text-[#767e88] md:text-[1.125rem]")}>
          {description}
        </p>
      )}
    </header>
  );
}
