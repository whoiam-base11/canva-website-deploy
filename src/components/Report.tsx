import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import type { SanityReport } from "@/sanity/queries";

export default function Report({ reports, listing = false }: {
  reports: SanityReport[];
  listing?: boolean;
}) {
  return (
    <section id="report" aria-label="実績紹介" className={`home-report section-divider relative min-h-screen max-md:min-h-0 max-md:py-16 flex flex-col items-center justify-center px-6 max-md:px-4 bg-white ${listing ? "content-listing" : ""}`}>
      {!listing && <h2 className="absolute max-md:relative top-[10vh] max-md:top-0 left-24 max-md:left-0 flex items-baseline gap-20 max-md:gap-1 max-md:flex-col text-2xl font-bold text-gray-800 max-md:mb-6 max-md:w-full">Report <span className="text-xl max-md:text-sm font-normal text-gray-900">これまでの実績を掲載いたします。</span></h2>}
      {reports.length ? <div className="report-scroll w-full overflow-x-auto overflow-y-hidden" tabIndex={listing ? undefined : 0} role={listing ? undefined : "region"} aria-label={listing ? undefined : "実績一覧（横にスクロールできます）"}>
        <div className="report-grid flex gap-16 max-md:gap-4 px-6 max-md:px-4 w-max">
          {reports.map((report) => (
            <article key={report._id} className="report-card w-[415px] max-md:w-[260px] shrink-0">
              <div className="report-image relative aspect-[16/10] bg-gray-300 mb-4 max-md:mb-2">
                {report.image ? (
                  <Image src={urlFor(report.image).width(830).height(519).url()} alt={report.title} fill sizes="(max-width: 767px) 280px, 415px" className="object-cover" />
                ) : <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">No Image</span>}
              </div>
              <h3 className="text-xl max-md:text-base font-bold text-gray-800 mb-1">{report.title}</h3>
              <p className="text-base max-md:text-sm text-gray-500 whitespace-pre-line">{report.description}</p>
            </article>
          ))}
        </div>
      </div> : <p className="content-empty">実績は準備中です。</p>}
      {!listing && <Link href="/report" className="report-more absolute max-md:relative bottom-[10vh] max-md:bottom-0 max-md:mt-8 text-gray-800 text-lg hover:text-gray-500 transition-colors">Read all Interview →</Link>}
    </section>
  );
}
