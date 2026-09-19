import type { SanityNews } from "@/sanity/queries";

type Props = {
  newsItems: SanityNews[];
};

export default function News({ newsItems }: Props) {
  return (
    <section id="news" className="section-divider relative min-h-screen flex flex-col justify-start px-6 max-md:px-4 bg-white">
      <div className="flex gap-16 ml-[12.5%] mr-auto mt-[5vh] max-md:ml-0 max-md:w-full">
        <div className="max-w-2xl max-md:w-full">
          <div className="divide-y divide-gray-200">
            {newsItems.map((item) => (
              <div key={item._id} className="flex gap-24 py-[18px] max-md:flex-col max-md:gap-2">
                <time className="text-[26px] max-md:text-base text-gray-900 shrink-0 pt-0.5">
                  {item.date.replace(/-/g, ".")}
                </time>
                <div>
                  <p className="text-[17px] font-bold text-gray-800 mb-2">
                    {item.title}
                  </p>
                  <p className="text-[17px] text-gray-600 whitespace-pre-line mb-8">
                    {item.body}
                  </p>
                  <div className="flex flex-col gap-1">
                    {(item.links ?? []).map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="text-[17px] text-gray-800 hover:text-gray-500 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="absolute top-[10vh] right-[7.2%] max-md:right-4 text-2xl font-bold text-gray-800">News</h2>
      <a
        href="/news"
        className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 text-lg text-gray-800 hover:text-gray-500 transition-colors"
      >
        Read all News →
      </a>
    </section>
  );
}
