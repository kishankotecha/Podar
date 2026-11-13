import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { cn } from "@/src/lib/utils";
import { nunito } from "@/src/lib/fonts";
import type { Testimonial } from "./data";

type TestimonialCardProps = {
  item: Testimonial;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-[1.5rem] bg-white px-6 pb-[1.875rem] pt-[2.4375rem] sm:pl-[3.125rem] sm:pr-[2.75rem] md:min-h-[20.5625rem]">
      <RiDoubleQuotesR aria-hidden className="-ml-1.5 size-[3.3125rem] text-[#f45fa5]" />

      <blockquote
        className={cn(nunito.className, "mt-6 text-base font-medium leading-normal text-[#767e88] sm:text-[1.25rem]")}
      >
        “{item.quote}”
      </blockquote>

      <figcaption className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-[2.1875rem]">
        <div className="flex items-center gap-[1.4375rem]">
          <Image
            src={item.avatar}
            alt=""
            width={46}
            height={46}
            className="size-[2.875rem] rounded-full object-cover"
          />
          <div className={cn(nunito.className, "leading-normal")}>
            <p className="text-[1.125rem] font-bold text-[#2c6dc1] sm:text-[1.25rem]">{item.name}</p>
            <p className="text-sm font-medium text-[rgba(44,109,193,0.41)] sm:text-base">
              {item.childInfo}
            </p>
          </div>
        </div>

        <div role="img" aria-label={`Rated ${item.rating} out of 5`} className="flex gap-[0.6rem]">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              aria-hidden
              className={cn(
                "size-6 sm:size-[1.785rem]",
                i < item.rating ? "text-[#ffc83d]" : "text-[#ffc83d]/30",
              )}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
