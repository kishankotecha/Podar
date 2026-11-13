"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";
import type { Testimonial } from "../constants/testimonials";

const SWIPE_THRESHOLD = 50;

type TestimonialCarouselProps = {
  items: Testimonial[];
};

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const lastIndex = items.length - 1;

  const goTo = (next: number) => setIndex(Math.max(0, Math.min(lastIndex, next)));

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) goTo(index + (dx < 0 ? 1 : -1));
    startX.current = null;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Parent testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="w-full max-w-[48.3125rem] rounded-[1.5rem] outline-none focus-visible:ring-2 focus-visible:ring-[#2c6dc1]/40"
    >
      {/* Track */}
      <div
        className="touch-pan-y select-none overflow-hidden rounded-[1.5rem]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
      >
        <ul
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <li
              key={item.id}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              inert={i !== index}
              className="w-full shrink-0"
            >
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination */}
      <div className="mt-[1.3125rem] flex items-center justify-center gap-1.5">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-[4.625rem] bg-[#2c6dc2]" : "w-1.5 bg-[#9cc7ff] hover:bg-[#2c6dc2]/60",
            )}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <ArrowButton label="Previous testimonial" disabled={index === 0} onClick={() => goTo(index - 1)}>
          <FiChevronLeft aria-hidden className="size-5" />
        </ArrowButton>
        <ArrowButton label="Next testimonial" disabled={index === lastIndex} onClick={() => goTo(index + 1)}>
          <FiChevronRight aria-hidden className="size-5" />
        </ArrowButton>
      </div>
    </div>
  );
}

type ArrowButtonProps = {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
};

function ArrowButton({ label, disabled, onClick, children }: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex size-[2.125rem] items-center justify-center rounded-full border transition-colors",
        disabled
          ? "cursor-not-allowed border-[#e8d5de] text-[#d8c3cd]"
          : "border-[#2c6dc1] text-[#2c6dc1] hover:bg-[#2c6dc1] hover:text-white",
      )}
    >
      {children}
    </button>
  );
}
