const services = [
  {
    title: "コーチング・サポート事業",
    description:
      "ユーザーインタビューやアンケート調査を通じて、ターゲットユーザーの本質的なニーズを明らかにします。データに基づいた意思決定をサポートします。",
    image: "services-research.jpg",
  },
  {
    title: "SNS構築・運用支援事業",
    description:
      "企業サイトやランディングページの制作から、既存サイトの更新・保守運用まで。ビジネスの成長を支えるWebソリューションを提供します。",
    image: "services-web.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen flex flex-col justify-center px-6 bg-gray-50">
      <h2 className="absolute top-[5vh] left-18 text-2xl font-bold text-gray-800">Service</h2>
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              {/* 画像プレースホルダー - 実画像配置時は next/image の <Image> に差し替え */}
              <div className="relative aspect-[3/2] w-[96%] bg-gray-300">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  {service.image}
                </span>
              </div>
              <h3 className="mt-16 text-[31px] font-bold text-gray-800 text-center">
                {service.title}
              </h3>
              <a href="/service" className="mt-16 text-xl text-gray-500 hover:text-gray-800 border border-black px-6 py-2 transition-colors">
                詳細を確認する→
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
