import Image from "next/image";
import { SectionHeader } from "@/shared/components";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { TESTIMONIALS } from "../constants/testimonials";

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-title" className="relative bg-white">
      {/* Soft pink background (Figma: #fdeef5 rect with heavy blur) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(253,238,245,0)_0%,#fdeef5_28%,#fdeef5_72%,rgba(253,238,245,0)_100%)]"
      />

      {/* Decorations – shown on all screens, scaled down on smaller ones.
          Below 1280px the card fills most of the width, so the triangle and balloon
          move to the bottom band (beside the arrows) instead of the card's sides. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/podar/cloud-figma.png"
          alt=""
          width={441}
          height={312}
          className="absolute left-0 top-4 h-auto w-[5.5rem] md:w-[8rem] lg:w-[10rem] xl:top-[3%] xl:w-[13.8rem]"
        />
        <Image
          src="/images/podar/ring-figma.png"
          alt=""
          width={159}
          height={159}
          className="absolute right-[6%] top-6 h-auto w-10 md:w-14 lg:left-[81.8%] lg:right-auto lg:top-[5.2%] lg:w-16 xl:w-[5rem]"
        />
        <Image
          src="/images/podar/spiral-figma.png"
          alt=""
          width={166}
          height={264}
          className="absolute right-0 top-[7.5rem] h-auto w-[2.6rem] md:top-[8rem] md:w-[3.5rem] lg:w-[4.2rem] xl:top-[12.2%] xl:w-[5.2rem]"
        />
        <Image
          src="/images/podar/triangle-figma.png"
          alt=""
          width={178}
          height={175}
          className="absolute bottom-[9rem] left-[6%] h-auto w-8 md:w-12 lg:left-[3%] lg:w-16 xl:bottom-auto xl:left-[6.9%] xl:top-[47.5%] xl:w-[5.5rem]"
        />
        <Image
          src="/images/podar/balloon-string.png"
          alt=""
          width={236}
          height={378}
          className="absolute -right-2 bottom-0 h-auto w-[5rem] md:-right-3 md:w-[7rem] lg:w-[7.5rem] xl:-right-6 xl:bottom-auto xl:top-[59.8%] xl:w-[14.75rem]"
        />
      </div>

      <div className="relative mx-auto flex min-h-[46rem] max-w-[120rem] flex-col items-center px-5 pb-24 pt-20">
        <SectionHeader
          id="testimonials-title"
          badge="Parent Trust"
          badgeVariant="pink"
          titleClassName="text-[#2c6dc1]"
          title={
            <>
              Hear it from <span className="text-[#f45fa5]">our parents.</span>
            </>
          }
        />

        <div className="mt-[3.0625rem] flex w-full justify-center">
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </div>

    </section>
  );
}
