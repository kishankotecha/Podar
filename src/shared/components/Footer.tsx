import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { NAV_ITEMS, NAVBAR_CONFIG } from "../constants/navigation";

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: FiFacebook },
  { label: "Instagram", href: "#", Icon: FiInstagram },
  { label: "LinkedIn", href: "#", Icon: FiLinkedin },
  { label: "YouTube", href: "#", Icon: FiYoutube },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const ADDRESS =
  "No. 121/8, Kothnur Main Rd, Dr. Vivekananda Layout, Gaurav Nagar, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078";

/* ---- WAVE (swap these 3 values with the exact SVG exported from Figma) ---- */
const WAVE_VIEWBOX = "0 0 1920 104";
const WAVE_PATH =
  "M0,101 C150,94 400,43 640,43 C940,43 1060,98 1236,98 C1420,98 1560,46 1750,46 C1820,46 1880,52 1920,63 L1920,105 L0,105 Z";
const WAVE_COLOR_CLASS = "fill-[#2B4A7C]";
const WAVE_BG = "#FFF8E6";
/* ------------------------------------------------------------------------- */

export const Footer: React.FC = () => {
  return (
    <>
      {/* Wave: cream background (#FFF8E6) flowing into the navy footer.
          On small screens the SVG keeps a 900px minimum width and is centred, so
          the curve stays soft instead of being squashed. */}
      <div
        style={{ backgroundColor: WAVE_BG }}
        className="relative w-full overflow-hidden leading-[0]"
        aria-hidden="true"
      >
        <svg
          viewBox={WAVE_VIEWBOX}
          preserveAspectRatio="none"
          className="relative left-1/2 block h-[clamp(49px,5.42vw,104px)] w-[max(100%,900px)] -translate-x-1/2"
        >
          <path className={WAVE_COLOR_CLASS} d={WAVE_PATH} />
        </svg>
      </div>

      <footer className="relative -mt-px w-full bg-[#2B4A7C] font-nunito text-white">
        <div className="mx-auto max-w-[1920px] px-5 pt-8 sm:px-8 md:px-10 md:pt-10 lg:px-[clamp(40px,6.45vw,124px)] lg:pt-[clamp(32px,4vw,77px)]">
          {/* Top: brand | navigation | contact */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.25fr_0.75fr_1fr] md:gap-x-10 lg:grid-cols-[1fr_clamp(180px,18vw,347px)_clamp(230px,16.3vw,313px)] lg:gap-0">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <Link
                href="/"
                aria-label="Podar Prep Home"
                className="inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#F8D64F] lg:gap-[clamp(10px,0.94vw,18px)]"
              >
                <Image
                  src={NAVBAR_CONFIG.logoSrc}
                  alt={NAVBAR_CONFIG.logoAlt}
                  width={58}
                  height={58}
                  className="h-[44px] w-[44px] object-contain sm:h-[48px] sm:w-[48px] lg:h-[clamp(44px,3.02vw,58px)] lg:w-[clamp(44px,3.02vw,58px)]"
                />
                <span className="font-fredoka text-[24px] font-bold leading-none tracking-tight text-white sm:text-[26px] lg:text-[length:clamp(24px,1.67vw,32px)]">
                  PODAR <span className="text-[#F8D64F]">PREP</span>
                </span>
              </Link>

              <p className="mt-5 max-w-[420px] text-[15px] leading-[1.6] text-white/45 sm:mt-6 sm:text-[16px] lg:mt-[clamp(20px,1.9vw,36px)] lg:max-w-[400px] lg:text-[length:clamp(15px,1.04vw,20px)] lg:leading-[1.55]">
                A joyful, trusted preschool where children learn through play,
                grow with confidence, and build the foundations for life.
              </p>

              <ul className="mt-6 flex gap-3 sm:mt-7 lg:mt-[clamp(32px,3.5vw,66px)] lg:gap-[clamp(10px,0.9vw,17px)]">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/60 outline-none transition-colors duration-200 hover:border-[#F8D64F] hover:text-[#F8D64F] focus-visible:ring-2 focus-visible:ring-[#F8D64F] lg:h-[clamp(44px,2.87vw,55px)] lg:w-[clamp(44px,2.87vw,55px)] lg:rounded-[clamp(10px,0.8vw,16px)]"
                    >
                      <Icon className="h-5 w-5 lg:h-[clamp(18px,1.15vw,22px)] lg:w-[clamp(18px,1.15vw,22px)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <nav aria-label="Footer Navigation">
              <h3 className="text-[13px] font-bold uppercase leading-none tracking-[0.2em] text-[#F8D64F] sm:text-[14px] lg:text-[length:clamp(13px,0.83vw,16px)]">
                Navigation
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:mt-6 sm:flex sm:flex-col sm:gap-5 lg:mt-[clamp(24px,2.4vw,46px)] lg:gap-[clamp(18px,1.9vw,36px)]">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block text-[15px] leading-none text-white/45 transition-colors duration-200 hover:text-[#F8D64F] sm:text-[16px] lg:text-[length:clamp(15px,1.04vw,20px)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="text-[13px] font-bold uppercase leading-none tracking-[0.2em] text-[#F8D64F] sm:text-[14px] lg:text-[length:clamp(13px,0.83vw,16px)]">
                Connect Us
              </h3>
              <address className="mt-5 max-w-[360px] text-[15px] not-italic leading-[1.65] text-white/45 sm:mt-6 sm:text-[16px] lg:mt-[clamp(20px,2vw,38px)] lg:max-w-[320px] lg:text-[length:clamp(15px,1.04vw,20px)] lg:leading-[1.6]">
                {ADDRESS}
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/10 pb-[max(28px,env(safe-area-inset-bottom))] pt-6 sm:mt-12 sm:pb-8 lg:mt-[clamp(36px,3vw,57px)] lg:pb-[clamp(28px,2.6vw,50px)] lg:pt-[clamp(24px,2.2vw,42px)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-[13px] leading-relaxed text-white/45 sm:text-[14px] lg:text-[length:clamp(13px,0.94vw,18px)]">
                © 2026 Podar Prep. Part of the Podar Education Network. All
                rights reserved.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-[clamp(20px,1.8vw,35px)]">
                {LEGAL_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] leading-snug text-white/45 transition-colors duration-200 hover:text-[#F8D64F] sm:text-[14px] lg:text-[length:clamp(13px,0.94vw,18px)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;