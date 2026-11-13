import type { CSSProperties } from "react";
import Image from "next/image";
import { PODAR_PREP_IMAGES } from "../constants/podarPrepExperiance";
import {
  WHERE_IT_BEGINS_CONTENT,
  WHERE_IT_BEGINS_FEATURES,
  WHERE_IT_BEGINS_IMAGES,
} from "../constants/whereItBegins";

/* ---------- Design tokens ---------- */

const fredoka: CSSProperties = { fontFamily: "var(--font-fredoka), sans-serif" };
const nunito: CSSProperties = { fontFamily: "var(--font-nunito), sans-serif" };

// Must match the background colour of section 1 above
const WAVE_COLOR = "#2C6DC1";

const WAVE_VIEWBOX = "0 0 1910 70";
const WAVE_PATH = [
  "M0,0 V35",
  "C40,35 90,48 130,48",
  "C260,48 480,8 700,8",
  "C960,8 1080,58 1330,58",
  "C1560,58 1750,4 1910,4",
  "V0 Z",
].join(" ");

const sectionVars = {
  "--ele-w": "clamp(96px, 8.6vw, 170px)",
} as CSSProperties;


const elephantStyle: CSSProperties = {
  width: "var(--ele-w)",
  transform: "translateY(-100%)",
};

const badgeStyle: CSSProperties = {
  top: "calc(-1 * clamp(28px, 2.4vw, 46px))",
  right: "calc(-1 * clamp(14px, 2vw, 38px))",
};

// Alphabet tile: ~53px left of the image, ~15px above its bottom at 1910px.
const alphabetStyle: CSSProperties = {
  right: "calc(100% + clamp(10px, 2.8vw, 53px))",
  bottom: "clamp(8px, 0.8vw, 15px)",
};

const FLOAT_KEYFRAMES = `
  @keyframes wib-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-16px); }
  }
  .wib-elephant-float {
    animation: wib-float 3s ease-in-out infinite;
    will-change: transform;
  }
`;

function WaveDivider() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[-1px] h-[var(--wave-h)] overflow-hidden"
    >
      <svg
        viewBox={WAVE_VIEWBOX}
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <path d={WAVE_PATH} fill={WAVE_COLOR} />
      </svg>
    </div>
  );
}

function Decorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Heart: visible on every screen size, slightly tucked off the edge */}
      <Image
        src={WHERE_IT_BEGINS_IMAGES.heart}
        alt=""
        width={80}
        height={80}
        className="absolute right-[-6px] top-[calc(var(--wave-h)+clamp(2rem,5vw,6rem))] w-[clamp(32px,6vw,64px)]"
      />
      {/* Single star */}
      <Image
        src={PODAR_PREP_IMAGES.star}
        alt=""
        width={20}
        height={20}
        className="absolute right-[8%] top-[calc(var(--wave-h)+clamp(1rem,3.4vw,4.5rem))] w-[clamp(14px,1.6vw,22px)] opacity-90"
      />
    </div>
  );
}

function FloatingElephant() {
  return (
    <div
      style={elephantStyle}
      className="pointer-events-none absolute left-[5vw] top-[max(6.8vw,calc(var(--wave-h)_*_1.15))] z-20"
    >
      <Image
        src={PODAR_PREP_IMAGES.elephant}
        alt="Podar Prep elephant mascot"
        width={220}
        height={260}
        priority
        className="wib-elephant-float h-auto w-full"
      />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative w-[clamp(260px,66vw,400px)] shrink-0 lg:w-[clamp(300px,27.9vw,540px)]">
      {/* Tilted yellow card behind */}
      <div className="absolute inset-0 -rotate-6 rounded-[28px] bg-[#FFDC91]" />

      <Image
        src={WHERE_IT_BEGINS_IMAGES.girl}
        alt="Child learning at Podar Prep"
        width={420}
        height={500}
        sizes="(min-width: 1024px) 540px, 66vw"
        className="relative h-auto w-full rounded-[24px] object-cover"
      />

      {/* 0-6 badge, top right */}
      <div
        style={badgeStyle}
        className="absolute z-10 rounded-2xl bg-[#F7D54F] px-[clamp(14px,1.25vw,24px)] py-[clamp(10px,1vw,19px)] shadow-md"
      >
        <p
          style={nunito}
          className="text-[clamp(26px,1.75vw,34px)] font-black leading-none text-[#2C6DC2]"
        >
          {WHERE_IT_BEGINS_CONTENT.badgeNumber}
        </p>
        <p
          style={nunito}
          className="mt-[clamp(4px,0.4vw,8px)] text-[clamp(11px,0.75vw,15px)] font-extrabold uppercase leading-none tracking-wide text-[#2C6DC2]"
        >
          {WHERE_IT_BEGINS_CONTENT.badgeText}
        </p>
      </div>

      {/* Alphabet tile: bottom-left, just outside the image */}
      <div
        aria-hidden="true"
        style={alphabetStyle}
        className="absolute flex h-[clamp(28px,2.1vw,40px)] w-[clamp(28px,2.1vw,40px)] -rotate-12 items-center justify-center rounded-md border-[1.5px] border-[#7EC85C]"
      >
        <span
          style={nunito}
          className="text-[clamp(14px,1.05vw,20px)] font-extrabold leading-none text-[#7EC85C]"
        >
          {WHERE_IT_BEGINS_CONTENT.alphabet}
        </span>
      </div>
    </div>
  );
}

// Cards are as wide as their content and wrap onto the next row (as in Figma).
function FeatureList() {
  return (
    <ul className="mt-[clamp(24px,4.3vw,82px)] flex w-full flex-wrap justify-center gap-x-[clamp(10px,0.94vw,18px)] gap-y-[clamp(10px,1.15vw,22px)] lg:grid lg:grid-cols-[repeat(3,auto)] lg:justify-start">
      {WHERE_IT_BEGINS_FEATURES.map((feature) => (
        <li
          key={feature.title}
          className="flex items-center gap-[clamp(6px,0.52vw,10px)] rounded-2xl border border-[#D8E5F4] bg-white py-[clamp(8px,0.73vw,14px)] pl-[clamp(10px,0.9vw,17px)] pr-[clamp(12px,1.2vw,23px)] text-left"
        >
          <span className="flex h-[clamp(24px,1.57vw,30px)] w-[clamp(24px,1.57vw,30px)] shrink-0 items-center justify-center rounded-full bg-[#E6F1FF]">
            <Image
              src={feature.icon}
              alt=""
              width={18}
              height={18}
              className="h-[58%] w-[58%] object-contain"
            />
          </span>
          <span
            style={nunito}
            className="whitespace-nowrap text-[clamp(14px,0.94vw,18px)] lg:whitespace-normal font-semibold leading-tight text-[#2C6DC2]"
          >
            {feature.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Section ---------- */

export default function WhereItBegins() {
  return (
    <section
      style={sectionVars}
      className="relative z-10 -mt-px w-full bg-[#FFF8E6] [--wave-h:clamp(44px,5.9vw,60px)] lg:[--wave-h:clamp(60px,3.66vw,120px)] px-2 pt-6 pb-6 lg:px-4 lg:pt-8 lg:pb-8 xl:pt-16 xl:pb-16 2xl:px-16"
    >
      <style>{FLOAT_KEYFRAMES}</style>

      <WaveDivider />
      <Decorations />
      <FloatingElephant />

      <div className="relative z-10 w-full">
        
        <div
          aria-hidden="true"
          className="h-[calc(var(--wave-h)+clamp(2.5rem,4.6vw,6rem))]"
        />

       
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-[clamp(48px,10.4vw,200px)]">
          {/* LEFT: image */}
          <HeroImage />

          {/* RIGHT: text. 680px wide at 1910px (Figma). */}
          <div className="mx-auto w-full max-w-[34rem] text-center lg:mx-0 lg:w-[clamp(460px,35.6vw,700px)] lg:max-w-none lg:shrink-0 lg:text-left">
            <span
              style={nunito}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD1A7] bg-[#FFF4EA] px-3.5 py-1 text-[clamp(11px,0.58vw,12px)] font-bold uppercase tracking-wide text-[#20487D]"
            >
              <Image
                src={PODAR_PREP_IMAGES.star}
                alt=""
                width={14}
                height={14}
                className="h-3 w-3 object-contain"
              />
              {WHERE_IT_BEGINS_CONTENT.label}
            </span>

            <h2
              style={fredoka}
              className="mt-[clamp(14px,1.6vw,31px)] text-[clamp(28px,2.2vw,44px)] font-bold uppercase leading-[1.2]"
            >
              {WHERE_IT_BEGINS_CONTENT.headingLines.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part) => (
                    <span key={part.text} style={{ color: part.color }}>
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
            <p
              style={nunito}
              className="mt-[clamp(14px,1.7vw,33px)] max-w-full text-[clamp(15px,0.95vw,19px)] font-medium leading-[1.5] text-[#767E88] lg:max-w-[87%]"
            >
              {WHERE_IT_BEGINS_CONTENT.description}
            </p>

            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
}