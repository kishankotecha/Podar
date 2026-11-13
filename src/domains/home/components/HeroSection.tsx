import Image from "next/image";
import Link from "next/link";
import { HeroLeadForm } from "@/domains/home/components/HeroLeadForm";
import { HeroDecor } from "@/domains/home/components/HeroDecor";
import { HeroArtboard } from "@/domains/home/components/HeroArtboard";
import { HERO } from "@/domains/home/constants/hero";

const { content, assets, frames } = HERO;

function HeroCopy() {
  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full flex-col gap-8">
        <h1 className="w-full font-fredoka text-[64px] font-bold uppercase leading-[1.28] text-white">
          {content.headlineLead}
          <br />
          <span className="text-podar-yellow">{content.headlineHighlight}</span>
          <br />
          {content.headlineRest[0]}
          <br />
          {content.headlineRest[1]}
        </h1>
        <p className="w-full max-w-[95%] font-nunito text-[20px] font-medium leading-[1.95] text-podar-mist">
          {content.subhead}
        </p>
      </div>

      <Link
        href={content.ctaHref}
        className="mt-8 inline-flex h-16 items-center gap-2.5 rounded-full bg-podar-yellow px-8 font-nunito text-[21px] font-bold leading-7 text-podar-cta shadow-[0px_8px_24px_-6px_rgba(248,214,79,0.45)] transition hover:brightness-95"
      >
        {content.cta}
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          aria-hidden
          className="text-podar-cta"
        >
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
      </Link>

      <p className="mt-11 flex items-center gap-2.5 font-nunito text-lg font-semibold leading-6 text-podar-mist">
        <Image
          src={assets.heart}
          alt=""
          width={21}
          height={19}
          unoptimized
          className="h-[19px] w-[21px] shrink-0"
        />
        {content.trust}
      </p>
    </div>
  );
}

function HeroDesktop() {
  return (
    <HeroArtboard>
      <HeroDecor />

      <div
        className="absolute z-20"
        style={{
          left: frames.copy.left,
          top: frames.copy.top,
          width: frames.copy.width,
        }}
      >
        <HeroCopy />
      </div>

      <div
        className="absolute z-[15]"
        style={{
          left: frames.boy.left,
          top: frames.boy.top,
          width: frames.boy.width,
        }}
      >
        <Image
          src={assets.boy}
          alt={content.boyAlt}
          width={1024}
          height={979}
          className="h-auto w-full select-none"
          priority
          unoptimized
        />
      </div>

      <div
        className="absolute z-20"
        style={{
          left: frames.girl.left,
          top: frames.girl.top,
          width: frames.girl.width,
        }}
      >
        <Image
          src={assets.girl}
          alt={content.girlAlt}
          width={1014}
          height={1000}
          className="h-auto w-full select-none"
          priority
          unoptimized
        />
      </div>

      <div
        className="absolute z-30"
        style={{
          left: frames.form.left,
          top: frames.form.top,
          width: frames.form.width,
        }}
      >
        <HeroLeadForm />
      </div>
    </HeroArtboard>
  );
}

function HeroMobile() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 pt-12 pb-36 sm:gap-10 sm:px-8 sm:pt-16 sm:pb-32 md:max-w-4xl md:px-10 md:pb-28 lg:hidden">
      <div className="flex flex-col items-center gap-5 text-center sm:gap-6">
        <h1 className="font-fredoka text-[clamp(2rem,7vw,2.75rem)] font-bold uppercase leading-[1.25] text-white">
          {content.headlineLead}{" "}
          <span className="text-podar-yellow">{content.headlineHighlight}</span>{" "}
          {content.headlineRest.join(" ")}
        </h1>
        <p className="font-nunito text-[clamp(1rem,3.5vw,1.125rem)] font-medium leading-[1.7] text-podar-mist">
          {content.subhead}
        </p>
        <Link
          href={content.ctaHref}
          className="inline-flex max-w-[15.5rem] flex-col items-center justify-center rounded-full bg-podar-yellow px-5 py-3 text-center font-nunito text-[13px] font-bold leading-snug text-podar-cta shadow-[0_6px_18px_-6px_rgba(248,214,79,0.45)] sm:max-w-none sm:h-14 sm:flex-row sm:gap-2 sm:px-7 sm:py-0 sm:text-lg sm:leading-none"
        >
          <span className="sm:hidden">
            {content.ctaMobileLines[0]}
            <br />
            {content.ctaMobileLines[1]}
          </span>
          <span className="hidden sm:inline">{content.cta} →</span>
        </Link>
        <p className="mx-auto flex w-fit max-w-[17rem] items-start gap-2 text-left font-nunito text-sm font-semibold leading-snug text-podar-mist sm:max-w-sm sm:text-base">
          <Image
            src={assets.heart}
            alt=""
            width={18}
            height={16}
            unoptimized
            className="mt-0.5 h-4 w-[18px] shrink-0"
          />
          <span>{content.trust}</span>
        </p>
      </div>

      {/*
        Both PNGs include baked-in doodles. Overlap them so we don't get two
        caps / star clusters stacked with a big gap between photos.
      */}
      <div className="relative mx-auto w-full max-w-md md:max-w-lg">
        <Image
          src={assets.girl}
          alt={content.girlAlt}
          width={1014}
          height={1000}
          className="relative z-20 mx-auto h-auto w-[78%]"
          priority
          unoptimized
        />
        <Image
          src={assets.boy}
          alt={content.boyAlt}
          width={1024}
          height={979}
          className="relative z-10 -mt-16 h-auto w-full sm:-mt-[4.5rem]"
          priority
          unoptimized
        />
      </div>

      <HeroLeadForm className="mx-auto w-[calc(100%-1.5rem)] max-w-sm sm:w-full sm:max-w-md md:max-w-xl" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-podar-blue"
    >
      <HeroDesktop />
      <HeroMobile />
    </section>
  );
}
