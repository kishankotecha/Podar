import Link from "next/link";
import { HERO } from "@/domains/home/constants/hero";

function PodarLogo() {
  return (
    <div className="relative flex h-[104px] w-[104px] shrink-0 items-center justify-center lg:h-[140px] lg:w-[140px] xl:h-[168px] xl:w-[168px]">
      <svg viewBox="0 0 168 168" className="h-full w-full" aria-hidden>
        <circle cx="84" cy="84" r="84" fill="#FFFFFF" />
        <circle cx="84" cy="84" r="76" fill="#E8F4FF" />
        <circle cx="84" cy="72" r="40" fill="#2C6DC2" />
        <path
          d="M84 48c-10 14-16 24-16 34a16 16 0 1 0 32 0c0-10-6-20-16-34z"
          fill="#7EC85C"
        />
        <rect x="80" y="82" width="8" height="18" rx="2" fill="#8B5A2B" />
        <text
          x="84"
          y="138"
          textAnchor="middle"
          fill="#062953"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 700, fontSize: 22 }}
        >
          Podar
        </text>
        <text
          x="84"
          y="152"
          textAnchor="middle"
          fill="#2C6DC2"
          style={{ fontFamily: "var(--font-nunito)", fontWeight: 700, fontSize: 11 }}
        >
          PREP
        </text>
      </svg>
      <span className="sr-only">Podar Prep</span>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header
      className="relative z-30 w-full"
      style={{ background: HERO.navBg }}
    >
      <div className="mx-auto flex h-[88px] max-w-[1920px] items-center justify-between px-6 md:px-10 lg:h-[116px] lg:px-[120px]">
        <Link href="/" className="-mt-2 lg:-mt-6">
          <PodarLogo />
        </Link>

        <nav className="hidden items-center gap-8 xl:gap-[46px] lg:flex">
          {HERO.navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-nunito text-[18px] font-normal leading-none text-white xl:text-[21px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#F8D64F] px-5 font-nunito text-[16px] font-bold text-[#1E1E1E] xl:h-[46px] xl:w-[173px] xl:px-0 xl:text-[19px]"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
