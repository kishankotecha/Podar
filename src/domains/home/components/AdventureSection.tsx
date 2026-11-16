"use client";

import Image from "next/image";
import Link from "next/link";
import { ScaledArtboard } from "@/shared/ui/ScaledArtboard";
import {
  ADVENTURE,
  type AdventureAsset,
} from "@/domains/home/constants/adventure";
import { cn } from "@/lib/utils";
import { scrollToLeadForm } from "@/domains/home/utils/scroll";

const { content, assets, frameClass, artboard, desktop, fluid, dotsClass } =
  ADVENTURE;

function PanelDots() {
  return <div aria-hidden className={dotsClass} />;
}

function CtaArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" aria-hidden>
      <path
        d="M4.5 10.5H16.5"
        stroke="currentColor"
        strokeWidth="1.76"
        strokeLinecap="round"
      />
      <path
        d="M11.5 5.5L16.5 10.5L11.5 15.5"
        stroke="currentColor"
        strokeWidth="1.76"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnquireCta({ variant }: { variant: "desktop" | "fluid" }) {
  if (variant === "fluid") {
    return (
      <Link
        href="#hero-lead-form-mobile"
        onClick={scrollToLeadForm}
        className={fluid.ctaClass}
      >
        {content.cta}
        <CtaArrow />
      </Link>
    );
  }

  return (
    <Link
      href="#hero-lead-form-desktop"
      onClick={scrollToLeadForm}
      className={desktop.ctaClass}
    >
      {content.cta}
      <CtaArrow />
    </Link>
  );
}

function AdventureBadge({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-1.5 rounded-full border-[1.5px] border-white bg-transparent sm:gap-2",
        compact ? "px-3.5 py-1.5" : "px-5 py-2",
      )}
    >
      <Image
        src={assets.badgeStar.src}
        alt=""
        width={compact ? 14 : desktop.badgeStar.width}
        height={compact ? 13 : desktop.badgeStar.height}
        className={cn("w-auto shrink-0", compact ? "h-3.5" : "h-4")}
      />
      <span
        className={cn(
          "truncate font-nunito font-extrabold",
          compact
            ? "text-[10px] tracking-[0.06em] text-podar-accent sm:text-[11px]"
            : desktop.badgeClass,
        )}
      >
        {content.badge}
      </span>
    </div>
  );
}

function AdventureHeadline({ className }: { className?: string }) {
  return (
    <h2
      className={cn("font-fredoka font-bold uppercase text-white", className)}
    >
      {content.headlineBefore}{" "}
      <span className="text-podar-accent">{content.headlineAccent}</span>
    </h2>
  );
}

function AdventureSubhead({ className }: { className?: string }) {
  return (
    <p className={cn("font-nunito font-medium", className)}>
      {content.subhead}
    </p>
  );
}

function Prop({
  asset,
  alt = "",
  frameClassName,
  className,
  priority,
  objectFit = "contain",
}: {
  asset: AdventureAsset;
  alt?: string;
  frameClassName: string;
  className?: string;
  priority?: boolean;
  objectFit?: "contain" | "fill" | "cover";
}) {
  return (
    <div className={cn(frameClassName, className)}>
      <Image
        src={asset.src}
        alt={alt}
        width={asset.width}
        height={asset.height}
        className={cn(
          "w-full select-none object-bottom",
          objectFit === "fill"
            ? "h-full object-fill"
            : objectFit === "cover"
              ? "h-full object-cover"
              : "h-auto object-contain",
        )}
        priority={priority}
      />
    </div>
  );
}

/** Desktop artboard — proportional scale at lg+. */
function AdventureDesktop() {
  return (
    <ScaledArtboard width={artboard.width} height={artboard.height}>
      <Prop asset={assets.rainbow} frameClassName={frameClass.rainbow} />
      <Prop asset={assets.moon} frameClassName={frameClass.moon} />
      <Prop asset={assets.birds} frameClassName={frameClass.birds} />
      <Prop asset={assets.ufo} frameClassName={frameClass.ufo} />

      <div className={frameClass.panel}>
        <PanelDots />
        <Prop
          asset={assets.cloudFloor}
          frameClassName={frameClass.cloudFloor}
          objectFit="fill"
        />
      </div>

      <div className={frameClass.copy}>
        <div className="relative z-20 flex w-full flex-col items-center text-center">
          <AdventureBadge />
          <AdventureHeadline className={desktop.headlineClass} />
          <AdventureSubhead className={desktop.subheadClass} />
        </div>
      </div>

      <div className={frameClass.cta}>
        <EnquireCta variant="desktop" />
      </div>

      <Prop
        asset={assets.leftProps}
        alt={content.leftPropsAlt}
        frameClassName={frameClass.leftProps}
        priority
      />
      <Prop
        asset={assets.rightProps}
        alt={content.rightPropsAlt}
        frameClassName={frameClass.rightProps}
      />
      <Prop
        asset={assets.elephant}
        alt={content.elephantAlt}
        frameClassName={frameClass.elephant}
        priority
      />
    </ScaledArtboard>
  );
}

/** Fluid layout below lg. */
function AdventureFluid() {
  return (
    <div className={fluid.shellClass}>
      <Image
        src={assets.rainbow.src}
        alt=""
        width={assets.rainbow.width}
        height={assets.rainbow.height}
        className={fluid.rainbowClass}
      />
      <Image
        src={assets.moon.src}
        alt=""
        width={assets.moon.width}
        height={assets.moon.height}
        className={fluid.moonClass}
      />
      <Image
        src={assets.birds.src}
        alt=""
        width={assets.birds.width}
        height={assets.birds.height}
        className={fluid.birdsClass}
      />

      <div className={fluid.panelWrapClass}>
        <div className={fluid.panelClass}>
          <PanelDots />

          <Image
            src={assets.leftProps.src}
            alt=""
            width={assets.leftProps.width}
            height={assets.leftProps.height}
            className={fluid.leftPropsTabletClass}
          />
          <Image
            src={assets.rightProps.src}
            alt=""
            width={assets.rightProps.width}
            height={assets.rightProps.height}
            className={fluid.rightPropsClass}
          />

          <div className={fluid.copyClass}>
            <AdventureBadge compact />
            <AdventureHeadline className={fluid.headlineClass} />
            <AdventureSubhead className={fluid.subheadClass} />
            <EnquireCta variant="fluid" />
          </div>

          <div className={fluid.sceneClass} aria-hidden>
            <Image
              src={assets.cloudFloor.src}
              alt=""
              width={assets.cloudFloor.width}
              height={assets.cloudFloor.height}
              className={fluid.cloudClass}
            />
            <Image
              src={assets.leftProps.src}
              alt=""
              width={assets.leftProps.width}
              height={assets.leftProps.height}
              className={fluid.leftPropsMobileClass}
            />
          </div>
        </div>

        <Image
          src={assets.elephant.src}
          alt=""
          width={assets.elephant.width}
          height={assets.elephant.height}
          className={fluid.elephantClass}
        />
      </div>

      <Image
        src={assets.ufo.src}
        alt=""
        width={assets.ufo.width}
        height={assets.ufo.height}
        className={fluid.ufoClass}
      />
    </div>
  );
}

export function AdventureSection() {
  return (
    <section
      id="admissions"
      className="relative w-full overflow-hidden bg-podar-cream scroll-mt-16 lg:scroll-mt-24"
    >
      <AdventureDesktop />
      <AdventureFluid />
    </section>
  );
}
