import Image from "next/image";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative h-screen flex items-center px-6 overflow-hidden">
      <Image
        src="/images/philosophy-bg.jpg"
        alt="歩く人々のイラスト"
        fill
        className="object-cover object-bottom"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-[22px] md:text-[40px] leading-relaxed text-white tracking-wide font-bold">
          人の手で「表現」と「挑戦」に革新を。
        </p>
        <div className="mt-24 text-base md:text-xl leading-relaxed text-white tracking-wide font-bold">
          <p>そこにいるの「本物」なのか</p>
          <p className="mt-6">
            自分の考え、自分の感情<br />
            それらを押し殺して他人を立てる世の中。
          </p>
          <p className="mt-6">
            他人に合わせて、他人と揃えて生きているうちは<br />
           「本物のあなた」ではない。
          </p>
          <p className="mt-6">
            あなたの中にある<br />
            伝えたい・届けたいもの・手に取りたいもの
          </p>
          <p className="mt-6">
            これに嘘をつかず、ひた隠しにせず、目の前の世界に発信してほしい。<br />
            あなたに全力で伴走します。
          </p>
        </div>
      </div>
    </section>
  );
}
