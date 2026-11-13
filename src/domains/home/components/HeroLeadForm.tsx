"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { HERO } from "@/domains/home/constants/hero";
import { cn } from "@/lib/utils";

const { content } = HERO;

const fieldClass =
  "box-border h-11 w-full rounded-full border border-podar-border bg-white px-4 py-2 font-nunito text-sm font-medium leading-normal text-podar-field placeholder:text-podar-muted outline-none transition focus:border-podar-blue sm:h-12 sm:px-6 sm:py-2.5 sm:text-base lg:h-[49px] lg:px-7 lg:text-[20px] lg:leading-[27px]";

function LocationCaret({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`shrink-0 text-podar-blue transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M12 16.5L5.5 9.5H18.5L12 16.5Z" fill="currentColor" />
    </svg>
  );
}

type Props = {
  className?: string;
};

export function HeroLeadForm({ className }: Props) {
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div
      className={cn(
        "relative z-20 box-border flex w-full flex-col rounded-[2rem] bg-podar-panel px-4 pt-5 pb-5 sm:rounded-[3rem] sm:px-8 sm:pt-8 sm:pb-8 lg:min-h-[722px] lg:rounded-[85px] lg:pt-7 lg:pb-9 lg:pl-16 lg:pr-[53px]",
        className,
      )}
    >
      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-none flex-col gap-4 sm:gap-6 lg:max-w-[423px] lg:gap-[29px]"
      >
        <div className="flex w-full flex-col gap-5 sm:gap-7 lg:gap-[35px]">
          <div className="flex w-full flex-col gap-3.5 text-center sm:gap-5 lg:max-w-[371px] lg:gap-[33px] lg:text-left">
            <div className="flex w-full flex-col lg:max-w-[324px]">
              <h2 className="font-fredoka text-[clamp(1.5rem,5vw,2.625rem)] font-semibold leading-[1.2] text-podar-ink lg:text-[42px] lg:leading-[51px]">
                {content.formTitle}
              </h2>
              <p className="-mt-0.5 font-fredoka text-[clamp(1.625rem,5.5vw,2.875rem)] font-semibold leading-[1.2] text-podar-blue lg:text-[46px] lg:leading-[56px]">
                {content.formTitleAccent}
              </p>
            </div>
            <p className="font-nunito text-sm font-medium leading-relaxed text-podar-muted sm:text-base lg:text-[20px] lg:leading-[27px]">
              {content.formIntro}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:gap-4 lg:gap-[22px]">
            <input
              name="parentName"
              required
              autoComplete="name"
              placeholder={content.fields.parentName}
              className={fieldClass}
            />
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder={content.fields.phone}
              className={fieldClass}
            />
            <input
              name="childName"
              required
              placeholder={content.fields.childName}
              className={fieldClass}
            />
            <input
              name="childDob"
              type="text"
              required
              placeholder={content.fields.childDob}
              onFocus={(e) => {
                e.currentTarget.type = "date";
              }}
              onBlur={(e) => {
                if (!e.currentTarget.value) e.currentTarget.type = "text";
              }}
              className={fieldClass}
            />

            <div className="relative isolate" ref={wrapRef}>
              <input type="hidden" name="location" value={location} required />
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={`${fieldClass} flex items-center justify-between pr-3 text-left ${
                  location ? "text-podar-field" : "text-podar-muted"
                }`}
              >
                <span>{location || content.locationPlaceholder}</span>
                <LocationCaret open={open} />
              </button>

              {open ? (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-[260px] overflow-auto rounded-[28px] border border-podar-border bg-white py-2 shadow-[0_16px_40px_rgba(6,41,83,0.14)]"
                >
                  {HERO.locations.map((loc) => (
                    <li key={loc}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={location === loc}
                        className={`flex w-full px-7 py-2.5 text-left font-nunito text-[18px] font-medium transition hover:bg-podar-soft ${
                          location === loc
                            ? "bg-podar-soft text-podar-blue"
                            : "text-[#555]"
                        }`}
                        onClick={() => {
                          setLocation(loc);
                          setOpen(false);
                        }}
                      >
                        {loc}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center rounded-full bg-[linear-gradient(253.2deg,var(--podar-gold-a)_40.31%,var(--podar-gold-b)_70.01%)] font-nunito text-sm font-bold leading-normal text-[#1E1E1E] transition hover:brightness-95 sm:h-12 sm:text-base lg:h-[47px] lg:text-[20px] lg:leading-[27px]"
        >
          {content.formSubmit}
        </button>
      </form>
    </div>
  );
}
