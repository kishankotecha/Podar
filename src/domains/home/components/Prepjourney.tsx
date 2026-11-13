import Image from "next/image";
import { journeySteps } from "../constants/journeysteps";
import { fredoka, nunito } from "../../../lib/fonts";

export default function PrepJourney() {
  return (
    <section
      aria-labelledby="prep-journey-title"
      className={`${nunito.className} relative isolate flex w-full flex-col items-center overflow-hidden bg-linear-to-b from-[#fefffd] via-[#EEF8E8] to-[#F3F8EC] pt-28 pb-16 text-center text-[#767E88] backdrop-blur-[21.3375rem] md:pt-36 lg:min-h-250 lg:pt-64`}
    >
      {/* The PNG exports include the tree's rotation and the sun's crop and opacity. */}
      <Image
        src="/section/tree.png"
        alt=""
        width={116}
        height={150}
        className="pointer-events-none absolute top-40 left-1 -z-10 h-auto w-12 md:top-30 md:left-2 md:w-16 lg:top-1/10 lg:w-1/16 lg:max-w-29 2xl:top-47 2xl:left-3"
      />
      <Image
        src="/section/sun.png"
        alt=""
        width={122}
        height={210}
        className="pointer-events-none absolute top-35 right-0 -z-10 h-auto w-12 md:top-25 md:w-16 lg:top-24 lg:w-1/16 lg:max-w-30.5 2xl:top-40"
      />
      <Image
        src="/section/elephant.png"
        alt=""
        width={176}
        height={253}
        sizes="(min-width: 120rem) 11rem, (min-width: 64rem) 9vw, (min-width: 48rem) 6rem, 4.5rem"
        className="pointer-events-none absolute top-0 right-4 h-auto w-18 md:right-1/15 md:w-24 lg:w-1/11 lg:max-w-44"
      />

      <div className="flex w-full max-w-412 flex-col items-center px-6 lg:w-7/8 lg:translate-x-3.5 lg:px-0">
        <header className="flex w-full max-w-4xl flex-col items-center">
          <p className="relative inline-flex items-center gap-2 rounded-full border border-sky-200 bg-transparent px-3 py-1 text-[0.625rem] leading-normal font-bold text-[#20487D] uppercase">
            <Image src="/section/star.svg" alt="" width={15} height={15} />
            The Podar Prep Journey
            <span className="pointer-events-none absolute top-1/2 left-full w-max -translate-y-1/2 pl-2 sm:pl-20 lg:pl-40">
              <Image src="/section/greenplane.svg" alt="" width={60} height={45} />
            </span>
          </p>
          <h2
            id="prep-journey-title"
            className={`${fredoka.className} w-full pt-6 text-center text-3xl leading-tight font-bold text-balance text-[#20487D] uppercase sm:text-[2.625rem] sm:leading-13`}
          >
            Every age. A new{" "}
            <span className="text-[#ED6028]">stage of discovery.</span>
          </h2>
          <p className="max-w-155 pt-5 text-lg leading-normal font-medium">
            Our programmes are designed around children&apos;s changing
            developmental needs, from early exploration to school readiness.
          </p>
        </header>
        <div className="relative w-full pt-14 md:pt-18 lg:w-33/32 lg:max-w-425 lg:-translate-x-3.5 lg:pt-26">
          {/* Laptop / Desktop horizontal dotted line */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1920 280"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-4 left-1/2 hidden h-70 w-screen -translate-x-1/2 fill-none stroke-[#96BC7F] lg:block"
          >
            <path
              d="M-5 0 C340 310 810 93 1300 126 C1560 130 1770 174 1925 276"
              strokeDasharray="8 10"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 lg:grid-cols-5 lg:gap-x-0">
            {/* Mobile vertical dotted wavy line */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 1000"
              preserveAspectRatio="none"
              className="pointer-events-none absolute top-8 left-1/2 -z-10 block h-[calc(100%-11rem)] w-16 -translate-x-1/2 fill-none stroke-[#96BC7F] lg:hidden"
            >
              <path
                d="M 50 0 C 90 80, 90 170, 50 250 C 10 330, 10 420, 50 500 C 90 580, 90 670, 50 750 C 10 830, 10 920, 50 1000"
                strokeDasharray="8 10"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {journeySteps.map(({ id, title, description, icon }, index) => (
              <li
                key={id}
                className="group flex w-full flex-col items-center lg:last:col-span-1"
              >
                <div className="relative grid size-16 place-items-center rounded-2xl bg-white ring-1 ring-[#96BC7F]/20">
                  <Image {...icon} alt="" />
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -right-1 grid size-5.5 place-items-center rounded-full bg-[#F8D64F] text-sm leading-normal font-medium text-[#826B0F]"
                  >
                    {id}
                  </span>
                  {index === journeySteps.length - 1 && (
                    <span className="pointer-events-none absolute bottom-2 left-full w-max pl-15 lg:bottom-full lg:pb-1 lg:pl-3.5">
                      <Image src="/section/orangeplane.svg" alt="" width={64} height={48} />
                    </span>
                  )}
                </div>
                <h3
                  className={`${fredoka.className} pt-4 text-lg leading-normal font-semibold tracking-wider text-[#2C6DC1] uppercase`}
                >
                  {title}
                </h3>
                <p className="max-w-75 pt-2 text-lg leading-normal font-medium group-first:max-w-48 group-nth-2:max-w-64">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}