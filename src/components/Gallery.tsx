"use client";

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
    <section id="gallery" className="relative h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* 上部: 左に画像、右にテキスト */}
      <div className="max-w-5xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[2/3] w-1/2 ml-auto mr-8 bg-gray-300">
          <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
            gallery-main.jpg
          </span>
        </div>
        <div className="space-y-12">
          {values.map((value) => (
            <div
              key={value.en}
              className="flex items-center gap-4 text-gray-800"
            >
              <span className="w-52 text-2xl md:text-3xl font-bold tracking-widest text-left">
                {value.en}
              </span>
              <span className="w-20 text-2xl md:text-3xl font-bold text-center">
                {value.ja}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 下部: 流れる画像 */}
      <div className="mt-16 w-full overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {[...marqueeImages, ...marqueeImages].map((img, i) => (
            <div
              key={i}
              className="relative w-96 h-64 shrink-0 bg-gray-300"
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
