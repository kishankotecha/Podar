import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

/* Replace the `src` paths with your real photos (files inside /public/images/gallery).
   The first photo is the large one; the 5th one gets the "View All" overlay. */
const GALLERY = [
  { src: "/images/gallery/gallery-1.png", alt: "Children playing together on a colourful floor mat" },
  { src: "/images/gallery/gallery-2.png", alt: "Two children sharing a moment in class" },
  { src: "/images/gallery/gallery-3.png", alt: "A boy building with blue blocks at his desk" },
  { src: "/images/gallery/gallery-4.png", alt: "Two children smiling while reading together" },
  { src: "/images/gallery/gallery-5.png", alt: "Children exploring a learning activity" },
];

const DECOR = {
  sun: "/images/gallery/sun.png",
  message: "/images/gallery/msgicon.png",
  star: "/images/gallery/startorange.png",
};

const VIEW_ALL_HREF = "/gallery";

// Static class strings so Tailwind can detect them
const TILE_BASE =
  "group relative overflow-hidden rounded-[18px] bg-[#E9EEF5] sm:rounded-[20px] lg:rounded-[clamp(18px,1.55vw,30px)]";
const TILE_BIG =
  "col-span-2 aspect-[16/10] sm:aspect-[16/9] lg:col-span-1 lg:row-span-2 lg:aspect-auto";
const TILE_SMALL = "aspect-[4/3] lg:aspect-auto";
const IMG =
  "object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none";

/* ---------- Background decorations (positions follow the Figma layout) ---------- */

function Decorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Star: top-left, slightly cropped by the left edge */}
      <Image
        src={DECOR.star}
        alt=""
        width={75}
        height={110}
        className="absolute left-[-4px] top-[3.6vw] w-[clamp(22px,3.9vw,75px)] h-auto"
      />

      {/* Message: upper right, not touching the edge */}
      <Image
        src={DECOR.message}
        alt=""
        width={88}
        height={66}
        className="absolute right-[13.5vw] top-[5.4vw] w-[clamp(36px,4.6vw,88px)] h-auto opacity-90"
      />

      {/* Sun: right edge, half cropped by the screen edge */}
      <Image
        src={DECOR.sun}
        alt=""
        width={101}
        height={171}
        className="absolute right-[-0.5vw] top-[7.9vw] w-[clamp(40px,5.3vw,101px)] h-auto"
      />
    </div>
  );
}

export const ChildExperiences: React.FC = () => {
  return (
    <section
      id="gallery"
      aria-labelledby="experiences-heading"
      className="relative w-full bg-gradient-to-b from-[#F3F8EC] via-white to-white font-nunito"
    >
      <Decorations />

      <div className="relative z-10 mx-auto max-w-[1920px] px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14 md:px-10 lg:px-[clamp(40px,6.1vw,118px)] lg:pb-[clamp(56px,4.2vw,80px)] lg:pt-[clamp(56px,7.3vw,140px)]">
        {/* Heading */}
        <div className="mx-auto flex max-w-[560px] flex-col items-center text-center lg:max-w-[560px]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE3B8] bg-[#F4FAEC] px-3.5 py-1 text-[10px] font-bold uppercase leading-snug tracking-wide text-[#5E7F8F]">
            <FaStar className="h-3 w-3 text-[#F8C93B]" />
            A Day at Podar Prep
          </span>

          <h2
            id="experiences-heading"
            className="mt-6 font-fredoka text-[30px] font-bold uppercase leading-[1.15] tracking-tight text-[#46669A] sm:text-[36px] lg:text-[length:clamp(32px,2.3vw,44px)]"
          >
            What your child
            <span className="block text-[#76B947]">experiences.</span>
          </h2>

          <p className="mt-6 max-w-[420px] text-[15px] leading-[1.6] text-[#6B7280] sm:text-[16px] lg:max-w-[500px] lg:text-[length:clamp(15px,0.89vw,17px)]">
            Every day is a new adventure — full of moments that spark joy,
            curiosity and connection.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:mt-[clamp(36px,3.9vw,74px)] lg:aspect-[851/305] lg:grid-cols-[2.4fr_1fr_1fr] lg:grid-rows-2 lg:gap-[clamp(12px,1.1vw,21px)]">
          {GALLERY.map((photo, i) => {
            const isBig = i === 0;
            const isViewAll = i === GALLERY.length - 1;
            const classes = `${TILE_BASE} ${isBig ? TILE_BIG : TILE_SMALL}`;
            const sizes = isBig
              ? "(min-width: 1024px) 52vw, 100vw"
              : "(min-width: 1024px) 22vw, 50vw";

            const picture = (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                className={IMG}
              />
            );

            if (isViewAll) {
              return (
                <div
                  key={photo.src}
                  aria-label="View all photos"
                  className={classes}
                >
                  {picture}
                  <span className="absolute inset-0 flex items-center justify-center text-[15px] font-semibold text-white sm:text-[16px] lg:text-[length:clamp(15px,1.04vw,20px)]">
                    View All
                  </span>
                </div>
              );
            }

            return (
              <div key={photo.src} className={classes}>
                {picture}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChildExperiences;