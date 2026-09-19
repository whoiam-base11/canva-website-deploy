export default function Member() {
  return (
    <section id="member" className="section-divider relative min-h-screen flex items-center px-6 max-md:px-4 bg-white">
      <h2 className="absolute top-[5vh] left-18 max-md:left-4 text-2xl font-bold text-gray-800">Member</h2>
      <div className="max-w-4xl ml-[15%] mr-auto max-md:ml-0 max-md:mx-auto max-md:mt-[12vh]">
        <div className="relative">
          <div className="flex items-start gap-16 max-md:flex-col max-md:items-center max-md:gap-8">
            {/* 画像プレースホルダー - 実画像配置時は next/image の <Image> に差し替え */}
            <div className="relative w-[413px] h-[517px] shrink-0 bg-gray-300 max-md:w-full max-md:max-w-[280px] max-md:h-[350px]">
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                profile.jpg
              </span>
            </div>
            {/* 右側: テキスト */}
            <div className="flex flex-col gap-12 max-md:gap-6 max-md:items-center max-md:text-center">
              <p className="text-[27px] max-md:text-lg font-bold text-gray-900 whitespace-nowrap">
                C.I.E.P 代表取締役/CEO
              </p>
              <h3 className="text-5xl max-md:text-3xl font-bold text-gray-800 whitespace-nowrap">本多 真雄人</h3>
              <p className="text-2xl max-md:text-base text-gray-600 leading-relaxed">
                〇〇〇
              </p>
            </div>
          </div>
          {/* SNS・ボタン: 画像の右側・下揃え固定 */}
          <div className="absolute left-[477px] bottom-0 flex items-center gap-8 max-md:relative max-md:left-0 max-md:mt-8 max-md:justify-center max-md:flex-wrap">
            <a
              href="/instagram"
              className="text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="/x"
              className="text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="X"
            >
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="/about"
              className="ml-16 border border-gray-800 text-gray-800 px-12 py-3 text-lg whitespace-nowrap hover:bg-gray-800 hover:text-white transition-colors"
            >
              代表の想い→
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
