"use client";

import Header from "@/components/Header";
import ContactCta from "@/components/ContactCta";
import SubpageFooter from "@/components/SubpageFooter";

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
      "現状に満足せず、常に新しい可能性に挑み続けます。失敗を恐れず、一歩踏み出す勇気を大切にしています。",
  },
  {
    en: "Innovation",
    ja: "革新",
    description:
      "既存の枠にとらわれず、新しい価値を生み出します。テクノロジーとクリエイティブの融合で、社会に革新をもたらします。",
  },
  {
    en: "Expression",
    ja: "表現",
    description:
      "一人ひとりの個性や想いを、最適な形で表現します。デザインの力で、伝えたいメッセージを届けます。",
  },
  {
    en: "Person",
    ja: "人",
    description:
      "すべての中心に「人」を置きます。人と人とのつながりを大切にし、共に成長できる関係を築きます。",
  },
];

const outlineInfo = [
  { label: "会社名", value: "C.I.E.P" },
  { label: "設立", value: "2025年4月3日" },
  { label: "代表", value: "本多 真雄人" },
  { label: "連絡先", value: "070-3794-4181" },
];

export default function MissionPage() {
  return (
    <>
      <Header variant="light" />
      <main>
        {/* Hero */}
        <section className="min-h-screen pt-24 pb-8 px-3 bg-white flex flex-col justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-[1.8rem] md:text-[3.6rem] font-bold text-gray-900 leading-tight tracking-wide">
              人の手で「表現」と「挑戦」に革新を。
            </h1>
          </div>
          {/* 流れる画像（マーキー） */}
          <div className="mt-16 w-full overflow-hidden -mx-3">
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
        <section className="min-h-screen py-24 px-6 bg-white overflow-hidden flex flex-col justify-center">
          <div className="max-w-5xl mx-auto relative">
            <p className="text-sm text-gray-500 mb-6">-MISSION</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-relaxed mb-8">
              表現に「リアル」を。
              <br />
              日常に「挑戦」を。
            </h2>
            <div className="max-w-2xl space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                私たちは、人の手が生み出す「リアル」な表現に価値があると信じています。
                テクノロジーが進化し、あらゆるものが自動化される時代だからこそ、
                人間の感性や創造性が持つ力はますます重要になっています。
              </p>
              <p>
                日常の中にある小さな挑戦を積み重ね、
                一人ひとりが自分らしい表現を追求できる社会を目指しています。
              </p>
            </div>
            <span className="absolute -right-8 bottom-0 text-[8rem] md:text-[12rem] font-bold text-gray-100 leading-none select-none pointer-events-none">
              MISSION
            </span>
          </div>
        </section>

        {/* Vision */}
        <section className="min-h-screen py-24 px-6 bg-white overflow-hidden flex flex-col justify-center">
          <div className="max-w-5xl mx-auto relative">
            <p className="text-sm text-gray-500 mb-6">-VISION</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-relaxed mb-8">
              全人類が「リアル」を表現し、
              <br />
              「挑戦」が常態化した世界を創る。
            </h2>
            <div className="max-w-2xl space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                誰もが自分の想いを自由に表現でき、挑戦することが当たり前の世界。
                私たちが目指すのは、そんな未来です。
                表現の壁を取り払い、すべての人がクリエイターとして輝ける社会を実現します。
              </p>
              <p>
                挑戦が特別なことではなく、日常の一部となる世界。
                その実現に向けて、私たちは走り続けます。
              </p>
            </div>
            <span className="absolute -right-8 bottom-0 text-[8rem] md:text-[12rem] font-bold text-gray-100 leading-none select-none pointer-events-none">
              VISION
            </span>
          </div>
        </section>

        {/* C.I.E.P Value */}
        <section className="min-h-screen py-24 px-6 bg-gray-900 text-white flex flex-col justify-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm text-gray-400 mb-12">-C.I.E.P Value</p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {values.map((v) => (
                <div key={v.en}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg md:text-xl font-light tracking-widest">
                      {v.en}
                    </span>
                    <span className="text-lg md:text-xl">{v.ja}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outline */}
        <section className="min-h-screen py-24 px-6 bg-white flex flex-col justify-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-12">Outline</h2>
            <table className="w-full">
              <tbody>
                {outlineInfo.map((info) => (
                  <tr key={info.label} className="border-b border-gray-200">
                    <th className="py-4 pr-8 text-left text-sm font-medium text-gray-500 w-32">
                      {info.label}
                    </th>
                    <td className="py-4 text-sm text-gray-800">{info.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-sm text-gray-600">ciep.maoto@gmail.com</p>
          </div>
        </section>

        <ContactCta />
      </main>
      <SubpageFooter />
    </>
  );
}
