import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ScaledArtboard } from "@/shared/ui/ScaledArtboard";
import {
  ADVENTURE,
  type AdventureAsset,
} from "@/domains/home/constants/adventure";
import { cn } from "@/lib/utils";

const { content, assets, frames, artboard, desktop, fluid, padding, dots, colors } =
  ADVENTURE;

const ctaBaseClass =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-podar-yellow font-nunito font-bold shadow-[0px_8px_24px_-6px_rgba(248,214,79,0.45)] transition hover:brightness-95";

function PanelDots() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        opacity: dots.opacity,
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.75) 1.15px, transparent 1.35px)",
        backgroundSize: `${dots.size}px ${dots.size}px`,
        maskImage:
          "radial-gradient(ellipse 55% 55% at 50% 36%, black 18%, transparent 70%)",
      }}
    />
  );
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
        href={content.ctaHref}
        className={fluid.ctaClass}
        style={{ color: colors.ctaText }}
      >
        {content.cta}
        <CtaArrow />
      </Link>
    );
  }

  return (
    <Link
      href={content.ctaHref}
      className={ctaBaseClass}
      style={{
        color: colors.ctaText,
        height: desktop.cta.height,
        fontSize: desktop.cta.fontSize,
        paddingLeft: desktop.cta.paddingX,
        paddingRight: desktop.cta.paddingX,
      }}
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
        width={compact ? 14 : desktop.badge.starW}
        height={compact ? 13 : desktop.badge.starH}
        className={cn("w-auto shrink-0", compact ? "h-3.5" : "h-4")}
      />
      <span
        className={cn(
          "truncate font-nunito font-extrabold",
          compact && "text-[10px] tracking-[0.06em] sm:text-[11px]",
        )}
        style={
          compact
            ? { color: colors.badgeText }
            : {
                color: colors.badgeText,
                fontSize: desktop.badge.fontSize,
                letterSpacing: desktop.badge.tracking,
              }
        }
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
      <span style={{ color: colors.accent }}>{content.headlineAccent}</span>
    </h2>
  );
}

function AdventureSubhead({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p
      className={cn("font-nunito font-medium", className)}
      style={{ color: colors.subhead, ...style }}
    >
      {content.subhead}
    </p>
  );
}

function Prop({
  asset,
  alt = "",
  frame,
  className,
  priority,
  objectFit = "contain",
}: {
  asset: AdventureAsset;
  alt?: string;
  frame: { left: number; top: number; width: number; height?: number };
  className?: string;
  priority?: boolean;
  objectFit?: "contain" | "fill" | "cover";
}) {
  return (
    <div
      className={cn("absolute", className)}
      style={{
        left: frame.left,
        top: frame.top,
        width: frame.width,
        height: frame.height,
      }}
    >
      <Image
        src={asset.src}
        alt={alt}
        width={asset.width}
        height={asset.height}
        className={cn("w-full select-none", frame.height ? "h-full" : "h-auto")}
        style={{ objectFit, objectPosition: "bottom center" }}
        priority={priority}
      />
    </div>
  );
}

/** Locked 1920 composition — scales proportionally at lg+. */
function AdventureDesktop() {
  const p = frames.panel;

  return (
    <ScaledArtboard width={artboard.width} height={artboard.height}>
      <Prop
        asset={assets.rainbow}
        frame={frames.rainbow}
        className="z-10 opacity-75"
      />
      <Prop
        asset={assets.moon}
        frame={frames.moon}
        className="z-10 opacity-90"
      />
      <Prop
        asset={assets.birds}
        frame={frames.birds}
        className="z-10 opacity-80"
      />
      <Prop asset={assets.ufo} frame={frames.ufo} className="z-10 opacity-70" />

      <div
        className="absolute z-20 overflow-hidden bg-podar-blue shadow-[0_24px_60px_-28px_rgba(6,41,83,0.35)]"
        style={{
          left: p.left,
          top: p.top,
          width: p.width,
          height: p.height,
          borderRadius: p.radius,
        }}
      >
        <PanelDots />
        <Prop
          asset={assets.cloudFloor}
          frame={frames.cloudFloor}
          className="z-10"
          objectFit="fill"
        />
      </div>

      <div
        className="absolute z-40"
        style={{
          left: frames.copy.left,
          top: p.top + frames.copy.top,
          width: frames.copy.width,
        }}
      >
        <div className="relative z-20 flex w-full flex-col items-center text-center">
          <AdventureBadge />
          <AdventureHeadline className={desktop.headlineClass} />
          <AdventureSubhead
            className="mt-4 leading-[1.7]"
            style={{
              fontSize: desktop.subhead.size,
              maxWidth: desktop.subhead.maxWidth,
            }}
          />
        </div>
      </div>

      <div
        className="absolute z-40 flex justify-center"
        style={{
          left: frames.copy.left,
          top: p.top + frames.cta.top,
          width: frames.copy.width,
        }}
      >
        <EnquireCta variant="desktop" />
      </div>

      <Prop
        asset={assets.leftProps}
        alt={content.leftPropsAlt}
        frame={frames.leftProps}
        className="z-40"
        priority
      />
      <Prop
        asset={assets.rightProps}
        alt={content.rightPropsAlt}
        frame={frames.rightProps}
        className="z-40"
      />
      <Prop
        asset={assets.elephant}
        alt={content.elephantAlt}
        frame={frames.elephant}
        className="z-50"
        priority
      />
    </ScaledArtboard>
  );
}

/** Fluid layout below lg — cream margins hold doodles; blue card stays inset. */
function AdventureFluid() {
  return (
    <div className={fluid.shellClass}>
      {/* Cream-margin doodles: tucked off edges like PodarPrep / WhereItBegins */}
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

          {/* Tablet+: side props at top of blue card */}
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
            {/* Mobile only: left props stay in the bottom scene */}
            <Image
              src={assets.leftProps.src}
              alt=""
              width={assets.leftProps.width}
              height={assets.leftProps.height}
              className={fluid.leftPropsMobileClass}
            />
          </div>
        </div>

        {/* Outside overflow clip so it can hang past the bottom border */}
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
      id="adventure"
      className="relative w-full overflow-hidden bg-podar-cream"
      style={{
        paddingTop: padding.top,
        paddingBottom: padding.bottom,
      }}
    >
      <AdventureDesktop />
      <AdventureFluid />
    </section>
  );
}
