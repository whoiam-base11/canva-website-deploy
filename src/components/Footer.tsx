"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="min-h-screen px-6 bg-white text-gray-900 flex flex-col justify-center relative">
      <div className="absolute top-[15vh] left-18 text-4xl font-bold tracking-widest">C.I.E.P</div>
      <div className="absolute top-[15vh] flex gap-24 left-[45%]">
        {/* 1列目: ページ項目 */}
        <div className="flex flex-col gap-8">
          <a href="/" className="text-[22px] hover:opacity-60 transition-opacity">Top</a>
          <a href="/mission" className="text-[22px] hover:opacity-60 transition-opacity">Mission</a>
          <a href="/about" className="text-[22px] hover:opacity-60 transition-opacity">About</a>
          <a href="/service" className="text-[22px] hover:opacity-60 transition-opacity">Service</a>
          <a href="/news" className="text-[22px] hover:opacity-60 transition-opacity">News</a>
        </div>
        {/* 2列目: SNS */}
        <div className="flex flex-col gap-8">
          <a href="/instagram" className="text-[22px] hover:opacity-60 transition-opacity">Instagram</a>
          <a href="/x" className="text-[22px] hover:opacity-60 transition-opacity">X</a>
          <a href="/note" className="text-[22px] hover:opacity-60 transition-opacity">note</a>
          <a href="/youtube" className="text-[22px] hover:opacity-60 transition-opacity">YouTube</a>
        </div>
        {/* 3列目: その他 */}
        <div className="flex flex-col gap-8">
          <a href="/contact" className="text-[22px] hover:opacity-60 transition-opacity">お問い合わせ</a>
          <a href="/privacy" className="text-[22px] hover:opacity-60 transition-opacity">個人情報保護</a>
          <a href="/privacy-policy" className="text-[22px] hover:opacity-60 transition-opacity">個人情報のお取り扱いについて</a>
          <a href="/social-media-guidelines" className="text-[22px] hover:opacity-60 transition-opacity">ソーシャルメディアガイドライン</a>
          <a href="/terms" className="text-[22px] hover:opacity-60 transition-opacity">サイトご利用上の注意</a>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-[22px] text-gray-900 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <svg className="w-6 h-20" viewBox="0 0 24 80" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 78V2M12 2L4 10M12 2L20 10" />
        </svg>
        <span>Back to Top</span>
      </button>
    </footer>
  );
}
