import type { CSSProperties } from "react";
import Image from "next/image";
import {
  PODAR_PREP_CONTENT,
  PODAR_PREP_FEATURES,
  PODAR_PREP_IMAGES,
} from "../constants/podarPrepExperiance";

/* ---------- Design tokens ---------- */

const fredoka: CSSProperties = { fontFamily: "var(--font-fredoka), sans-serif" };
const nunito: CSSProperties = { fontFamily: "var(--font-nunito), sans-serif" };

const FLOAT_KEYFRAMES = `
  @keyframes podar-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-16px); }
  }
  .podar-elephant-float {
    animation: podar-float 3s ease-in-out infinite;
    will-change: transform;
  }
`;

/* ---------- Small presentational pieces ---------- */

function Decorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Message doodle: partly cropped by the left edge */}
      <Image
        src={PODAR_PREP_IMAGES.message}
        alt=""
        width={120}
        height={120}
        className="absolute left-[-14px] top-[clamp(64px,8vw,110px)] w-[clamp(40px,9vw,120px)] opacity-90 lg:left-[-30px] lg:top-[57px]"
      />
      {/* Bus doodle: partly cropped by the right edge */}
      <Image
        src={PODAR_PREP_IMAGES.bus}
        alt=""
        width={220}
        height={150}
        className="absolute right-[-12px] top-[clamp(36px,4.5vw,60px)] w-[clamp(64px,11vw,210px)] opacity-90 lg:right-[-45px] lg:top-[49px]"
      />
    </div>
  );
}

function FloatingElephant() {
  return (
    // Wrapper holds position + the overlap offset; the inner image only floats.
    <div className="pointer-events-none absolute left-3 top-0 z-20 w-[clamp(70px,8.6vw,165px)] -translate-y-[45%] sm:left-8 md:left-10 lg:left-[8%]">
      <Image
        src={PODAR_PREP_IMAGES.elephant}
        alt="Podar Prep elephant mascot"
        width={220}
        height={260}
        priority
        className="podar-elephant-float h-auto w-full"
      />
    </div>
  );
}

function FeatureList() {
  return (
    <ul className="mx-auto mt-[clamp(32px,2.8vw,54px)] grid w-full max-w-[1382px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {PODAR_PREP_FEATURES.map((feature) => (
        <li
          key={feature.title}
          className="flex min-w-0 items-center gap-[clamp(14px,1.25vw,24px)] rounded-[20px] bg-white py-5 pl-[clamp(16px,1.4vw,26px)] pr-1 shadow-[0_2px_12px_rgba(44,109,193,0.05)]"
        >
          <span className="flex h-[clamp(52px,3.6vw,69px)] w-[clamp(52px,3.6vw,69px)] shrink-0 items-center justify-center rounded-2xl bg-[#3F6DC0]">
            <Image
              src={feature.icon}
              alt=""
              width={36}
              height={36}
              className="h-[clamp(26px,1.7vw,32px)] w-[clamp(26px,1.7vw,32px)] object-contain"
            />
          </span>
          <div className="min-w-0">
            <h3
              style={nunito}
              className="text-[clamp(15px,1.05vw,20px)] font-bold uppercase leading-snug text-[#2C6DC1]"
            >
              {feature.title}
            </h3>
            <p
              style={nunito}
              className="mt-2 text-[clamp(14px,0.9vw,17px)] font-medium leading-relaxed text-[#767E88]"
            >
              {feature.desc}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Section ---------- */

export default function PodarPrepExperience() {
  return (
    // relative z-10 and NO overflow-hidden: the elephant overlaps the section above
    <section className="relative z-10 w-full bg-[linear-gradient(180deg,#F7F4FB_0%,#F3F8FF_35%)]">
      <style>{FLOAT_KEYFRAMES}</style>

      <Decorations />
      <FloatingElephant />

      <div className="relative z-10 mx-auto px-5 pb-[clamp(48px,3vw,56px)] pt-[clamp(88px,4.7vw,90px)] sm:px-8">
        <div className="flex justify-center">
          <span
            style={nunito}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#C2DCFF] bg-[#DEEEFF] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#20487D]"
          >
            <Image
              src={PODAR_PREP_IMAGES.star}
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 object-contain"
            />
            {PODAR_PREP_CONTENT.label}
          </span>
        </div>

        <h2
          style={fredoka}
          className="mt-6 text-center text-[clamp(22px,3.2vw,40px)] font-bold uppercase leading-tight sm:whitespace-nowrap"
        >
          <span className="text-[#FF8935]">{PODAR_PREP_CONTENT.headingOrange}</span>
          <span className="text-[#2C6DC1]">{PODAR_PREP_CONTENT.headingBlue}</span>
        </h2>

        <p
          style={nunito}
          className="mx-auto mt-6 max-w-[480px] text-center text-[clamp(14px,0.9vw,17px)] font-medium leading-relaxed text-[#767E88]"
        >
          {PODAR_PREP_CONTENT.description}
        </p>

        <FeatureList />
      </div>
    </section>
  );
}