"use client";

const footerNav = [
  {
    items: [
      { href: "/", label: "Top" },
      { href: "/mission", label: "Mission" },
      { href: "/about", label: "About" },
      { href: "/service", label: "Service" },
      { href: "/news", label: "News" },
    ],
  },
  {
    items: [
      { href: "#", label: "Instagram" },
      { href: "#", label: "X" },
      { href: "#", label: "Note" },
      { href: "#", label: "YouTube" },
    ],
  },
  {
    items: [
      { href: "/contact", label: "お問い合わせ" },
      { href: "#", label: "個人情報保護方針" },
      { href: "#", label: "個人情報のお取り扱いについて" },
      { href: "#", label: "ソーシャルメディアガイドライン" },
      { href: "#", label: "サイトご利用上の注意" },
    ],
  },
];

export default function SubpageFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="text-xl font-bold tracking-widest text-gray-900">
            C.I.E.P
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerNav.map((col, i) => (
              <ul key={i} className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-px h-12 bg-gray-300" />
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
