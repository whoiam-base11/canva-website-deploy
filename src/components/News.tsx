import Link from "next/link";
import type { SanityNews } from "@/sanity/queries";

export default function News({ newsItems, listing = false }: {
  newsItems: SanityNews[];
  listing?: boolean;
}) {
  return (
    <section id="news" aria-label="お知らせ" className={`home-news section-divider relative min-h-screen max-md:min-h-0 max-md:py-16 flex flex-col justify-start px-6 max-md:px-4 bg-white ${listing ? "content-listing" : ""}`}>
      {!listing && <h2 className="absolute max-md:relative top-[10vh] max-md:top-0 right-[7.2%] max-md:right-auto max-md:text-right text-2xl font-bold text-gray-800 max-md:mb-6">News</h2>}
      <div className="news-content flex gap-16 ml-[12.5%] mr-auto mt-[5vh] max-md:mt-0 max-md:ml-0 max-md:w-full">
        <div className="max-w-2xl max-md:w-full">
          {newsItems.length ? <div className="divide-y divide-gray-200">
            {newsItems.map((item) => (
              <article key={item._id} className="news-item flex gap-24 py-[18px] max-md:flex-col max-md:gap-1 max-md:py-6">
                <time dateTime={item.date} className="text-[26px] max-md:text-sm text-gray-900 shrink-0 pt-0.5">{item.date.replace(/-/g, ".")}</time>
                <div className="min-w-0">
                  <h3 className="text-[17px] font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="news-body text-[17px] text-gray-600 whitespace-pre-line mb-8 max-md:mb-4">{item.body}</p>
                  <div className="news-links flex flex-col gap-1">
                    {(item.links ?? []).map((link, i) => <a key={`${link.href}-${i}`} href={link.href} className="text-[17px] text-gray-800 hover:text-gray-500 transition-colors">{link.label}</a>)}
                  </div>
                </div>
              </article>
            ))}
          </div> : <p className="content-empty">お知らせは準備中です。</p>}
        </div>
      </div>
      {!listing && <Link href="/news" className="news-more absolute max-md:relative bottom-[10vh] max-md:bottom-0 left-1/2 max-md:left-auto -translate-x-1/2 max-md:translate-x-0 max-md:mt-10 max-md:text-center text-lg text-gray-800 hover:text-gray-500 transition-colors">Read all News →</Link>}
    </section>
  );
}
