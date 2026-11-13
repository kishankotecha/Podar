import Image from "next/image";
import { curriculumCards, decorations, themes } from "../constants/curriculum";
import { fredoka, nunito } from "../../../lib/fonts";


export default function Curriculum() {
  return (
    <section
      aria-labelledby="curriculum-title"
      className={`${nunito.className} relative isolate flex w-full flex-col items-center overflow-hidden bg-white px-5 pt-20 pb-18 sm:px-8 lg:px-16 lg:pt-33.5 lg:pb-38`}
    >
      {decorations.map(({ name, width, height, position }) => (
        <Image
          key={name}
          src={`/section/${name}.png`}
          alt=""
          width={width}
          height={height}
          className={`pointer-events-none absolute -z-10 h-auto ${position}`}
        />
      ))}

      <header className="flex flex-col items-center text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-3 py-1 text-[0.625rem] leading-normal font-bold text-[#20487D] uppercase">
          <Image src="/section/star.svg" alt="" width={15} height={15} />
          Our Curriculum
        </p>
        <h2
          id="curriculum-title"
          className={`${fredoka.className} pt-6 text-3xl leading-tight font-bold text-balance text-[#EDAE00] uppercase sm:text-[2.625rem] sm:leading-[3.1875rem]`}
        >
          The thinking behind every{" "}
          <span className="block text-[#00C29B]">learning experience.</span>
        </h2>
      </header>

      <ol className="grid w-full max-w-358.25 grid-cols-1 items-start gap-5 pt-10 md:grid-cols-2 lg:pt-16 xl:grid-cols-[1fr_1.31fr_1fr] xl:gap-x-7.25 xl:gap-y-3">
        {curriculumCards.map(({ title, subtitle, description, theme, offset, height }, index) => {
          const colors = themes[theme];
          const isNepCard = theme === "blue";

          return (
            <li key={subtitle} className={`min-w-0 ${offset}`}>
              <div className={`rounded-[2.5rem] bg-linear-to-b p-px transition-shadow duration-200 ease-out motion-reduce:transition-none ${colors.edge} ${colors.hover}`}>
                <div className={`flex flex-col rounded-[inherit] px-5 pt-5 pb-6 sm:pr-4 sm:pb-7 sm:pl-6.5 ${colors.card} ${height}`}>
                  <div className="flex items-center gap-3.5">
                    <span aria-hidden="true" className={`${fredoka.className} relative grid size-11.5 shrink-0 place-items-center text-2xl font-medium ${colors.flower}`}>
                      <svg viewBox="0 0 48 48" className="absolute inset-0 size-full">
                        <path d="M24 1c5 0 8.8 4.4 10.2 10.1 6.5-1.1 12.1 2.4 13 7.7.8 5.1-2.8 9.6-8.1 12 2.7 5.8 1.2 11.8-3.5 14.4-4.5 2.6-9 .6-12-3.5-4.5 4.5-10.6 5.6-14.7 2.1-4-3.3-4.3-8.8-1.6-13.8C1.7 27.6-.9 22.6.8 17.4 2.4 12.6 7.6 10.3 13.4 11 14.9 5.4 18.9 1 24 1Z" />
                      </svg>
                      <span className="relative">{index + 1}</span>
                    </span>
                    <div className="min-w-0">
                      <h3 className={`${fredoka.className} text-[1.6rem] leading-normal font-medium tracking-[0.055em] ${isNepCard ? "xl:text-[2.075rem] xl:tracking-[0.131875rem]" : ""}`}>
                        {title}
                      </h3>
                      <p className={`text-base leading-normal font-medium ${theme === "gold" ? "text-[#8B8468]" : "text-[#767E88]"} ${isNepCard ? "text-center tracking-normal xl:text-[1.310625rem]" : ""}`}>
                        {subtitle}
                      </p>
                    </div>
                  </div>
                  <p className={`pt-6 text-sm leading-normal font-medium text-[#767E88] ${isNepCard || theme === "cream" ? "xl:pt-8 xl:text-lg" : ""}`}>
                    {description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
