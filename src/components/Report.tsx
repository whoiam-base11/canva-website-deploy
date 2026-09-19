"use client";

import { useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { SanityReport } from "@/sanity/queries";

type Props = {
  reports: SanityReport[];
};

export default function Report({ reports }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    if (el.scrollLeft >= halfWidth) {
      el.scrollLeft -= halfWidth;
    }
    if (el.scrollLeft <= 0) {
      el.scrollLeft += halfWidth;
    }
  };

  const loopedReports = [...reports, ...reports, ...reports];

  return (
    <section id="report" className="section-divider relative min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h2 className="absolute top-[10vh] left-24 max-md:left-4 flex items-baseline gap-20 max-md:gap-4 max-md:flex-col text-2xl font-bold text-gray-800">Report <span className="text-xl max-md:text-sm font-normal text-gray-900">これまでの実績を掲載いたします。</span></h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-16 px-6 w-max">
          {loopedReports.map((report, index) => (
            <article key={`${report._id}-${index}`} className="w-[415px] max-md:w-[280px] shrink-0">
              <div className="relative aspect-[16/10] bg-gray-300 mb-4">
                {report.image ? (
                  <Image
                    src={urlFor(report.image).width(830).height(519).url()}
                    alt={report.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{report.title}</h3>
              <p className="text-base text-gray-500">{report.description}</p>
            </article>
          ))}
        </div>
      </div>
      <a
        href="/report"
        className="absolute bottom-[10vh] text-gray-800 text-lg hover:text-gray-500 transition-colors"
      >
        Read all Interview →
      </a>
    </section>
  );
}
