"use client";

import React, { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, NAVBAR_CONFIG } from "../constants/navigation";

interface NavbarProps {
  activeItem?: string;
}

// Static class names so Tailwind can detect them at build time
const STAGGER = [
  "delay-[80ms]",
  "delay-[130ms]",
  "delay-[180ms]",
  "delay-[230ms]",
  "delay-[280ms]",
  "delay-[330ms]",
];

export const Navbar: React.FC<NavbarProps> = ({ activeItem = "Home" }) => {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close automatically when the screen grows to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (label: string) =>
    activeItem.toLowerCase() === label.toLowerCase();

  return (
    <>
      {/* Dim backdrop (mobile only) – tap to close */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300 motion-reduce:transition-none ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <header className="relative z-50 w-full h-[60px] md:h-[clamp(64px,6.146vw,118px)] bg-[#14337C] font-nunito">
        <div className="h-full max-w-[1920px] mx-auto px-4 sm:px-6 md:pl-[clamp(32px,6.667vw,128px)] md:pr-[clamp(32px,6.042vw,116px)]">
          {/* 3 columns: logo | centered links | button */}
          <div className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between h-full">
            {/* Logo badge – hangs below the bar */}
            <div className="relative h-full w-[68px] md:w-[clamp(84px,8.333vw,160px)] justify-self-start">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="absolute top-0 md:top-[clamp(4px,0.52vw,10px)] left-0 z-30 block w-[68px] h-[68px] md:w-[clamp(84px,8.333vw,160px)] md:h-[clamp(84px,8.333vw,160px)] rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#F8D64F] select-none"
                aria-label="Podar Prep Home"
              >
                <Image
                  src={NAVBAR_CONFIG.logoSrc}
                  alt={NAVBAR_CONFIG.logoAlt}
                  width={160}
                  height={160}
                  priority
                  className="w-full h-full object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.22)] pointer-events-none"
                />
              </Link>
            </div>

            {/* Desktop links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center justify-center gap-x-[clamp(20px,2.448vw,47px)]"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[length:clamp(14px,1.0417vw,20px)] leading-none whitespace-nowrap text-white transition-colors duration-200 hover:text-[#F8D64F] font-normal`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center justify-self-end">
              <Link
                href={NAVBAR_CONFIG.buttonHref}
                className="inline-flex items-center justify-center h-[clamp(34px,2.344vw,45px)] min-w-[clamp(104px,9.01vw,173px)] px-[clamp(18px,1.98vw,38px)] rounded-full bg-[#F8D64F] text-[#14337C] text-[length:clamp(13px,1.0417vw,20px)] leading-none font-bold shadow-sm hover:brightness-95 active:scale-95 transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {NAVBAR_CONFIG.buttonLabel}
              </Link>
            </div>

            {/* Mobile: CTA + animated hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                href={NAVBAR_CONFIG.buttonHref}
                onClick={() => setOpen(false)}
                className="inline-flex items-center h-[32px] px-4 rounded-full bg-[#F8D64F] text-[#14337C] text-[13px] leading-none font-bold shadow-sm active:scale-95 transition-transform duration-150 outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {NAVBAR_CONFIG.buttonLabel}
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls={drawerId}
                className="relative w-10 h-10 rounded-full text-white outline-none focus-visible:ring-2 focus-visible:ring-[#F8D64F] active:bg-white/10 transition-colors"
              >
                {/* three bars that morph into an X */}
                <span
                  className={`absolute left-1/2 top-1/2 h-[2.5px] w-6 -ml-3 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
                    open ? "translate-y-0 rotate-45" : "-translate-y-[7px]"
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-1/2 h-[2.5px] w-6 -ml-3 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none ${
                    open ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-1/2 h-[2.5px] w-6 -ml-3 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
                    open ? "translate-y-0 -rotate-45" : "translate-y-[7px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer – slides down over the page */}
        <div
          id={drawerId}
          aria-hidden={!open}
          className={`md:hidden absolute left-0 top-full z-20 w-full grid bg-[#14337C] transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
            open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col px-6 pt-5 pb-6 border-t border-white/10 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.45)]"
            >
              {NAV_ITEMS.map((item, i) => {
                const active = isActive(item.label);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-[17px] leading-snug border-b border-white/10 last:border-b-0 transition-all duration-300 ease-out motion-reduce:transition-none hover:text-[#F8D64F] font-normal ${
                      open
                        ? `opacity-100 translate-y-0 ${STAGGER[i] ?? "delay-[330ms]"}`
                        : "opacity-0 -translate-y-2 delay-0"
                    } ${active ? "text-[#F8D64F]" : "text-white"}`}
                  >
                    {item.label}
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-[#F8D64F] ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;