import Header from "@/components/Header";
import ContactCta from "@/components/ContactCta";
import SubpageFooter from "@/components/SubpageFooter";

const stories = [
  {
    heading: "-子どもの頃から「目的のない寄り道」が好き",
    paragraphs: [
      "子どもの頃から「目的のない寄り道」が好きだった。目的があるわけでもなく、ただなんとなく気になった路地に入ってみたり、知らない公園に立ち寄ってみたり。寄り道の先には、いつも小さな発見があった。",
      "大人になっても、その感覚は変わらなかった。「やるべきこと」に追われながらも、ふとした瞬間に横道に逸れてしまう。でも不思議なことに、その寄り道が、後から振り返ると一番大切な経験になっていたりする。",
      "寄り道とは、「何かを探している自分」に気づく行為なのかもしれない。目的がないからこそ、純粋に心が動く方へ足が向く。そこに、自分でも気づいていなかった「好き」が隠れている。",
    ],
  },
  {
    heading: "-初めての文字フリマ、見知らぬ隣の人と「好き」が重なって",
    paragraphs: [
      "それは突然のことだった。初めて出店した文字フリマで、隣のブースの人と話すうちに、お互いの「好き」が驚くほど重なっていることに気づいた。ジャンルは違うのに、根っこにある想いは同じだった。",
      "「表現したい」という衝動。「誰かに届けたい」という願い。言葉にすると陳腐に聞こえるかもしれないけれど、その場で交わした会話には、確かな熱量があった。",
      "あの日の出会いが、今の自分の原点になっている。一人では見つけられなかった景色を、誰かと一緒に見ることができる。それが「表現」の力なのだと、あの時初めて実感した。",
    ],
  },
  {
    heading: "-それぞれが、自分だけの余白を見つけていける",
    paragraphs: [
      "かつて「正解」を求めて走っていた時期がある。そんな時期が終わり、立ち止まって周りを見渡したとき、世界は思っていたよりもずっと広かった。",
      "正解なんてなかった。あったのは、それぞれの「余白」だった。余白とは、自由に描ける空間のこと。誰かに決められるものではなく、自分で見つけるもの。",
      "だからこそ、私たちは「余白」を大切にしたい。効率や成果だけでは測れない、一人ひとりの可能性が息づく場所。そんな余白を、一緒に見つけていける存在でありたい。",
    ],
  },
  {
    heading: "-とっさに出た「フィルム、全部ください」という言葉",
    paragraphs: [
      "写真屋の閉店セールで、とっさに口をついて出た言葉だった。「フィルム、全部ください」。自分でも驚いた。でも、その瞬間に確信した。自分はまだ「撮りたい」のだと。",
      "デジタルの時代に、フィルムで撮ることに合理的な理由はない。でも、シャッターを切る瞬間の緊張感、現像を待つ時間のわくわく、そして仕上がりを見た時の驚き。そのすべてが、自分にとっては「リアル」だった。",
      "効率では測れない価値がある。数字では表せない豊かさがある。人の手で、人の感性で、一つひとつ丁寧に積み上げていく。それが、私たちの信じる「ものづくり」の形です。",
    ],
  },
];

const bio = {
  title: "【生い立ち】本多についての話",
  paragraphs: [
    "本多（ほんだ）は1998年生まれ。幼少期から絵を描くことと写真を撮ることが好きで、中学時代には独学でWebサイトを作り始めた。高校では写真部に所属し、フィルムカメラの魅力に取り憑かれる。",
    "大学では情報デザインを専攻。在学中にフリーランスとしてWeb制作を始め、卒業後はIT企業でUXデザイナーとして経験を積む。2025年4月、「人の手で表現と挑戦に革新を」をミッションに掲げ、C.I.E.Pを設立。",
    "趣味はフィルム写真、文字フリマへの出店、目的のない散歩。好きな言葉は「寄り道こそ本道」。",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header variant="light" />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-0 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm text-gray-500">想い</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wider mt-1">
              Message
            </h1>
          </div>
        </section>

        {/* Hero Landscape */}
        <div className="mt-12 w-full">
          {/* 画像プレースホルダー - 実画像配置時は next/image の <Image> に差し替え */}
          <div className="relative w-full h-48 md:h-72 bg-gradient-to-b from-sky-200 via-green-300 to-green-500">
            <span className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
              about-landscape-hero.jpg
            </span>
          </div>
        </div>

        {/* Story Sections */}
        {stories.map((story, i) => (
          <section key={i}>
            <div className="py-20 px-6 bg-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed mb-8">
                  {story.heading}
                </h2>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  {story.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* 風景イラスト */}
            {/* 画像プレースホルダー - 実画像配置時は next/image の <Image> に差し替え */}
            <div className="relative w-full h-40 md:h-64 bg-gradient-to-b from-sky-200 via-green-300 to-green-500">
              <span className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
                about-landscape-{i + 1}.jpg
              </span>
            </div>
          </section>
        ))}

        {/* Bio */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              {bio.title}
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              {bio.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <SubpageFooter />
    </>
  );
}
