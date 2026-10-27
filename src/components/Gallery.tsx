const values = [
  { en: "Challenge", ja: "挑戦" },
  { en: "Innovation", ja: "革新" },
  { en: "Expression", ja: "表現" },
  { en: "Pursue", ja: "追求" },
];

const marqueeImages = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="home-gallery section-divider relative h-screen max-md:min-h-screen max-md:h-auto max-md:py-16 flex flex-col justify-center overflow-hidden bg-white">
      {/* 上部: 左に画像、右にテキスト */}
      <div className="gallery-intro max-w-5xl mx-auto w-full px-6 max-md:px-4 grid md:grid-cols-2 gap-12 max-md:gap-8 items-center">
        <div className="gallery-main relative aspect-[2/3] w-1/2 ml-auto mr-8 bg-gray-300 max-md:w-[75%] max-md:mx-auto">
          <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
            gallery-main.jpg
          </span>
        </div>
        <div className="gallery-values space-y-12 max-md:space-y-8 max-md:px-4">
          {values.map((value) => (
            <div
              key={value.en}
              className="flex items-center justify-between text-gray-800 max-md:max-w-[300px] max-md:mx-auto"
            >
              <span className="w-52 max-md:w-auto text-2xl md:text-3xl max-md:text-xl font-bold tracking-widest text-left">
                {value.en}
              </span>
              <span className="w-20 max-md:w-auto text-2xl md:text-3xl max-md:text-xl font-bold text-center">
                {value.ja}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 下部: 流れる画像 */}
      <div className="gallery-strip mt-16 max-md:mt-10 w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-8">
          {[...marqueeImages, ...marqueeImages].map((img, i) => (
            <div
              key={i}
              className="relative w-96 h-64 max-md:w-60 max-md:h-40 shrink-0 bg-gray-300"
            >
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                {img}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
