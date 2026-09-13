"use client";

import Header from "@/components/Header";
import Outline from "@/components/Outline";
import Footer from "@/components/Footer";

const galleryImages = [
  { src: "/images/mission-gallery-1.jpg", alt: "活動写真1" },
  { src: "/images/mission-gallery-2.jpg", alt: "活動写真2" },
  { src: "/images/mission-gallery-3.jpg", alt: "活動写真3" },
  { src: "/images/mission-gallery-4.jpg", alt: "活動写真4" },
  { src: "/images/mission-gallery-5.jpg", alt: "活動写真5" },
  { src: "/images/mission-gallery-6.jpg", alt: "活動写真6" },
];

const values = [
  {
    en: "Challenge",
    ja: "挑戦",
    description:
      "挑戦が特別なのではない。\n自分を豊かにする手段でしかない。\n私たちは常に一歩先の景色を目指し、\n未知の領域にも臆せず飛び込みます。\nその挑戦の先にしか、本当の成長はない。",
  },
  {
    en: "Innovation",
    ja: "革新",
    description:
      "当たり前を、疑い続ける。\n時代が変わるスピードよりも速く、\n発想と手法をアップデートし続けることで、\n誰も見たことのない景色を届けます。",
  },
  {
    en: "Expression",
    ja: "表現",
    description:
      "想いは、伝わらなければ意味がない。\n言葉に、映像に、色に、余すことなく託し、\nあなたらしさを最大限に引き出す表現を、\n私たちは追求し続けます。",
  },
  {
    en: "Person",
    ja: "人",
    description:
      "すべての土台にあるのは、人。\n数字の裏にある一人ひとりの想いに向き合い、\n共に悩み、共に喜べる関係を大切にしながら、\n真心を込めたサポートを届けます。",
  },
];

export default function MissionPage() {
  return (
    <>
      <Header fixed />
      <main>
        {/* Hero */}
        <section className="min-h-screen pt-24 pb-5 px-3 bg-white flex flex-col justify-center">
          <div className="w-full pl-24">
            <h1 className="text-[1.8rem] md:text-[3.6rem] font-bold text-gray-900 leading-tight tracking-wide whitespace-nowrap">
              人の手で「表現」と「挑戦」に革新を。
            </h1>
          </div>
          {/* 流れる画像（マーキー） */}
          <div className="mt-32 w-full overflow-hidden -mx-3">
            <div className="flex animate-marquee gap-8">
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <div
                  key={i}
                  className="relative w-96 h-64 shrink-0 bg-gray-300"
                >
                  <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                    {img.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="min-h-screen py-24 px-6 bg-white overflow-hidden flex flex-col justify-center relative">
          <div className="pl-[4.2rem]">
            <p className="text-[2.7rem] text-black font-bold mb-6">-MISSION</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-relaxed mb-16">
              表現に「リアル」を。
              <br />
              日常に「挑戦」を。
            </h2>
            <div className="space-y-4 text-[1.46rem] text-black leading-relaxed">
              <p>
                届けたい想いも、伝えたい世界観も、飾らなければ意味がない。
                <br />
                そんな今日に終止符を打つ。
                <br />
                本当の自分やブランドの魅力は、作られた言葉の中にはなく、
                <br />
                飾らない「今」の中にこそ宿る。
              </p>
              <p>
                変化を恐れず、昨日と違う一歩を踏み出すこと。
                <br />
                それがいつか大きな「らしさ」になる。
                <br />
                挑戦し続ける日常こそが、人を豊かにし前へ進める。
              </p>
              <p>
                人が豊かになる当たり前をここから。
              </p>
            </div>
          </div>
          <span className="absolute -right-8 -bottom-10 text-[8rem] md:text-[12rem] font-bold text-gray-400 leading-none select-none pointer-events-none">
            MISSION
          </span>
        </section>

        {/* Vision */}
        <section className="min-h-screen py-24 px-6 bg-white overflow-hidden flex flex-col justify-center relative">
          <div className="pl-[4.2rem]">
            <p className="text-[2.7rem] text-black font-bold mb-6">-VISION</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-relaxed mb-16">
              全人類が「リアル」を表現し、
              <br />
              「挑戦」が常態化した世界を創る。
            </h2>
            <div className="space-y-4 text-[1.46rem] text-black leading-relaxed">
              <p>
                誰もが「リアル」を隠さずに表現できる世界。
                <br />
                そこには、正解も不正解もなく、ただ本当のその人がいる。
                <br />
                飾らないその姿こそが、いちばん人の心を動かす。
              </p>
              <p>
                挑戦することが特別ではなく、当たり前になる社会へ。
                <br />
                迷いながらも一歩踏み出す姿勢を、私たちは全力で後押しし、
                <br />
                「挑戦」が日常に溶け込む世界を、共に創っていきます。
              </p>
            </div>
          </div>
          <span className="absolute -right-8 -bottom-10 text-[8rem] md:text-[12rem] font-bold text-gray-400 leading-none select-none pointer-events-none">
            VISION
          </span>
        </section>

        {/* C.I.E.P Value */}
        <section className="min-h-screen py-16 px-6 bg-black text-white flex flex-col relative">
          <p className="absolute top-20 left-32 text-4xl text-white font-bold">-C.I.E.P Value</p>
          <div className="max-w-5xl mx-auto mt-40">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-[2.7rem]">
              {values.map((v) => (
                <div key={v.en}>
                  <div className="flex items-center gap-8 mb-7">
                    <span className="text-2xl md:text-3xl font-bold tracking-widest text-white w-48">
                      {v.en}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-white w-16 text-center">{v.ja}</span>
                  </div>
                  <p className="text-xl text-white leading-relaxed whitespace-pre-line">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Outline />

        {/* Contact */}
        <section className="py-12 px-6 bg-white flex justify-center">
          <a
            href="/contact"
            className="border-2 border-black w-[59.4rem] h-[11rem] pl-12 pr-12 text-black bg-gray-100 inline-flex items-center gap-6 transition-transform duration-200 hover:scale-95"
          >
            <div className="flex flex-col gap-4">
              <span className="text-5xl font-bold">contact</span>
              <span className="text-2xl">お問い合わせはこちら</span>
            </div>
            <span className="text-2xl text-left self-end mb-10">企業様や取材のご依頼は<br />こちらより気軽にお問い合わせください。</span>
            <span className="ml-auto bg-black rounded-full w-14 h-14 flex items-center justify-center shrink-0">
              <span className="text-white text-3xl font-bold leading-none" style={{ WebkitTextStroke: "2px white" }}>→</span>
            </span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
