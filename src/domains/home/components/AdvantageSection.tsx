import Image from "next/image";
import { SectionHeader } from "@/shared/components";
import { AdvantageCard } from "./AdvantageCard";
import { ADVANTAGES } from "../constants/advantage";

export function AdvantageSection() {
  return (
    <section
      aria-labelledby="advantage-title"
      className="relative overflow-x-clip bg-white py-20 lg:py-[7.5rem]"
    >
      {/* Decorations – shown on all screens, scaled down on smaller ones */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Right ring: ~35% peeks in from the edge */}
        <span className="absolute -right-[2.3rem] top-6 size-14 rounded-full border-[3px] border-[#ebf1f9] md:-right-[2.9rem] md:size-[4.5rem] md:border-4 lg:-right-[3.875rem] lg:top-[2.8rem] lg:size-[5.9375rem] lg:border-[5px]" />
        {/* Left ring: sits in the bottom padding so it never touches the cards (Figma spot only on very wide screens) */}
        <span className="absolute -left-[2.6rem] bottom-1 size-16 rounded-full border-[3px] border-[#ebf1f9] md:-left-[2.9rem] md:size-[4.5rem] md:border-4 lg:-left-[4.5625rem] lg:size-[7rem] lg:border-[5px] min-[1760px]:bottom-[3.75rem]" />
        <Image
          src="/images/podar/star-figma.png"
          alt=""
          width={19}
          height={20}
          className="absolute left-[8%] top-12 h-auto w-3 md:top-14 md:w-4 lg:left-[8.6%] lg:top-[17.75rem] lg:w-[1.1875rem]"
        />
      </div>

      <div className="relative mx-auto max-w-[104.625rem] px-5">
        <div className="relative mx-auto max-w-[50.125rem]">
          {/* Paper plane – beside the first heading line. Below 1024px the heading gets side padding
              so the text wraps before reaching the plane; from 1024px it sits outside the heading as in Figma. */}
          <Image
            src="/images/podar/plane-figma.png"
            alt=""
            aria-hidden
            width={53}
            height={40}
            className="pointer-events-none absolute right-0 top-[3rem] h-auto w-6 md:top-[3.25rem] md:w-9 lg:-right-[3rem] lg:top-[3.375rem] lg:w-[3.3125rem]"
          />

          <SectionHeader
            id="advantage-title"
            badge="Podar Prep Advantage"
            titleClassName="px-8 text-[#20487d] md:px-12 lg:px-0"
            title={
              <>
                A richer way <span className="text-[#ff778e]">to learn</span>, for a{" "}
                <span className="text-[#91d074]">brighter tomorrow</span>
              </>
            }
            description="Powered by India's NEP 2020 and enriched by EYFS (UK) and EYLF (Australia), our curriculum brings together global perspectives and developmentally appropriate early learning."
          />
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 2xl:grid-cols-4 2xl:gap-[2.375rem]">
          {ADVANTAGES.map((item) => (
            <li key={item.id}>
              <AdvantageCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
