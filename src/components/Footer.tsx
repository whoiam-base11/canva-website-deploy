"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer section-divider min-h-screen max-md:min-h-0 px-6 max-md:px-6 bg-white text-gray-900 flex flex-col justify-center relative max-md:py-16">
      {/* デスクトップ: 絶対配置レイアウト */}
      <div className="absolute top-[15vh] left-18 max-md:hidden text-4xl font-bold tracking-widest">C.I.E.P</div>
      <div className="absolute top-[15vh] flex gap-24 left-[45%] max-md:hidden">
        <div className="flex flex-col gap-8">
          <Link href="/" className="text-[22px] hover:opacity-60 transition-opacity">Top</Link>
          <Link href="/mission" className="text-[22px] hover:opacity-60 transition-opacity">Mission</Link>
          <Link href="/about" className="text-[22px] hover:opacity-60 transition-opacity">About</Link>
          <Link href="/service" className="text-[22px] hover:opacity-60 transition-opacity">Service</Link>
          <Link href="/news" className="text-[22px] hover:opacity-60 transition-opacity">News</Link>
        </div>
        <div className="flex flex-col gap-8">
          <Link href="/instagram" className="text-[22px] hover:opacity-60 transition-opacity">Instagram</Link>
          <Link href="/x" className="text-[22px] hover:opacity-60 transition-opacity">X</Link>
          <Link href="/note" className="text-[22px] hover:opacity-60 transition-opacity">note</Link>
          <Link href="/youtube" className="text-[22px] hover:opacity-60 transition-opacity">YouTube</Link>
        </div>
        <div className="flex flex-col gap-8">
          <Link href="/contact" className="text-[22px] hover:opacity-60 transition-opacity">お問い合わせ</Link>
          <Link href="/privacy" className="text-[22px] hover:opacity-60 transition-opacity">個人情報保護</Link>
          <Link href="/privacy-policy" className="text-[22px] hover:opacity-60 transition-opacity">個人情報のお取り扱いについて</Link>
          <Link href="/social-media-guidelines" className="text-[22px] hover:opacity-60 transition-opacity">ソーシャルメディアガイドライン</Link>
          <Link href="/terms" className="text-[22px] hover:opacity-60 transition-opacity">サイトご利用上の注意</Link>
        </div>
      </div>

      {/* モバイル: 構造化レイアウト */}
      <nav aria-label="フッターメニュー" className="footer-mobile hidden max-md:block">
        <Link href="/" className="footer-brand block text-2xl font-bold tracking-widest mb-8">C.I.E.P</Link>

        {/* ページリンク - 2カラム */}
        <div className="footer-pages grid grid-cols-2 gap-y-3 gap-x-8 pb-6 border-b border-gray-200">
          <Link href="/" className="text-base hover:opacity-60 transition-opacity">Top</Link>
          <Link href="/mission" className="text-base hover:opacity-60 transition-opacity">Mission</Link>
          <Link href="/about" className="text-base hover:opacity-60 transition-opacity">About</Link>
          <Link href="/service" className="text-base hover:opacity-60 transition-opacity">Service</Link>
          <Link href="/news" className="text-base hover:opacity-60 transition-opacity">News</Link>
        </div>

        {/* SNS - 2カラム */}
        <div className="footer-social grid grid-cols-2 gap-y-3 gap-x-8 py-6 border-b border-gray-200">
          <Link href="/instagram" className="text-base hover:opacity-60 transition-opacity">Instagram</Link>
          <Link href="/x" className="text-base hover:opacity-60 transition-opacity">X</Link>
          <Link href="/note" className="text-base hover:opacity-60 transition-opacity">note</Link>
          <Link href="/youtube" className="text-base hover:opacity-60 transition-opacity">YouTube</Link>
        </div>

        {/* その他リンク - 1カラム */}
        <div className="footer-policies flex flex-col gap-4 pt-6">
          <Link href="/contact" className="text-base hover:opacity-60 transition-opacity">お問い合わせ</Link>
          <Link href="/privacy" className="text-base hover:opacity-60 transition-opacity">個人情報保護</Link>
          <Link href="/privacy-policy" className="text-base hover:opacity-60 transition-opacity">個人情報のお取り扱いについて</Link>
          <Link href="/social-media-guidelines" className="text-base hover:opacity-60 transition-opacity">ソーシャルメディアガイドライン</Link>
          <Link href="/terms" className="text-base hover:opacity-60 transition-opacity">サイトご利用上の注意</Link>
        </div>
      </nav>

      <button
        onClick={scrollToTop}
        className="footer-top absolute max-md:relative bottom-[10vh] max-md:bottom-0 left-1/2 max-md:left-auto -translate-x-1/2 max-md:translate-x-0 max-md:mx-auto max-md:mt-16 flex flex-col items-center gap-6 max-md:gap-4 text-[22px] max-md:text-base text-gray-900 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <svg className="w-6 h-20 max-md:h-12" viewBox="0 0 24 80" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 78V2M12 2L4 10M12 2L20 10" />
        </svg>
        <span>Back to Top</span>
      </button>
    </footer>
  );
}
