export default function Message() {
  return (
    <section id="message" className="section-divider relative min-h-screen flex items-end px-6 max-md:px-4 pb-[15vh] bg-white">
      <h2 className="absolute top-[5vh] left-18 max-md:left-4 text-2xl font-bold text-gray-800">Message</h2>
      <div className="w-full max-w-5xl mx-auto flex max-md:block">
        <div className="w-1/2 max-md:hidden" />
        <div className="w-1/2 max-md:w-full">
          <p className="text-base max-md:text-sm text-gray-800 leading-loose text-right max-md:text-left">
            挑戦とは、特別な誰かに与えられた特権ではありません。<br />
            <br />
            一歩踏み出す勇気、自分を偽らない表現。その積み重ねが、<br />
            日常を、そして人生を彩っていく。<br />
            <br />
            私たちはSNSという手段を通じて、<br />
            全人類が表現者となれる舞台を整えます。<br />
            <br />
            正解をなぞるのではなく、<br />
            あなたの「哲学・本音・思想」が真っ直ぐに届く仕組みを。<br />
            <br />
            「挑戦」することが特別なことではなく、<br />
            呼吸をするように「常態化」している世界。<br />
            それが、私たちの目指す到達点です。
          </p>
        </div>
      </div>
    </section>
  );
}
