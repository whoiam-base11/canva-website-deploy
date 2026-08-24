const newsItems = [
  {
    date: "2024.12.01",
    title: "HPをリニューアルしました。",
    body: "新たなスタートとしてこちらのページをご覧ください。\n引き続きC.E.I.Pをよろしくお願いいたします。",
    links: [
      { label: "→ 記事の詳細はこちら", href: "/news/1" },
      { label: "→ インタビュー映像（YouTube）はこちら", href: "/news/1/video" },
    ],
  },
  {
    date: "2024.11.15",
    title: "HPをリニューアルしました。",
    body: "新たなスタートとしてこちらのページをご覧ください。\n引き続きC.E.I.Pをよろしくお願いいたします。",
    links: [
      { label: "→ 記事の詳細はこちら", href: "/news/2" },
      { label: "→ インタビュー映像（YouTube）はこちら", href: "/news/2/video" },
    ],
  },
  {
    date: "2024.10.01",
    title: "HPをリニューアルしました。",
    body: "新たなスタートとしてこちらのページをご覧ください。\n引き続きC.E.I.Pをよろしくお願いいたします。",
    links: [
      { label: "→ 記事の詳細はこちら", href: "/news/3" },
      { label: "→ インタビュー映像（YouTube）はこちら", href: "/news/3/video" },
    ],
  },
];

export default function News() {
  return (
    <section id="news" className="relative min-h-screen flex flex-col justify-start px-6 bg-white">
      <div className="flex gap-16 ml-[12.5%] mr-auto mt-[5vh]">
        <div className="max-w-2xl">
          <div className="divide-y divide-gray-200">
            {newsItems.map((item, index) => (
              <div key={index} className="flex gap-24 py-[18px]">
                <time className="text-[26px] text-gray-900 shrink-0 pt-0.5">
                  {item.date}
                </time>
                <div>
                  <p className="text-[17px] font-bold text-gray-800 mb-2">
                    {item.title}
                  </p>
                  <p className="text-[17px] text-gray-600 whitespace-pre-line mb-8">
                    {item.body}
                  </p>
                  <div className="flex flex-col gap-1">
                    {item.links.map((link, i) => (
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
      <h2 className="absolute top-[10vh] right-[7.2%] text-2xl font-bold text-gray-800">News</h2>
      <a
        href="/news"
        className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 text-lg text-gray-800 hover:text-gray-500 transition-colors"
      >
        Read all News →
      </a>
    </section>
  );
}
