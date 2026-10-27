export default function Message() {
  return (
    <section id="message" className="home-message section-divider relative min-h-screen max-md:min-h-0 max-md:py-16 flex items-end max-md:items-start px-6 max-md:px-6 pb-[15vh] max-md:pb-0 bg-white">
      <h2 className="absolute max-md:relative top-[5vh] max-md:top-0 left-18 max-md:left-0 text-2xl font-bold text-gray-800 max-md:mb-8">Message</h2>
      <div className="message-content w-full max-w-5xl mx-auto flex max-md:flex-col">
        <div className="w-1/2 max-md:hidden" />
        <div className="message-copy w-1/2 max-md:w-full text-base text-gray-800 leading-loose text-right max-md:text-left">
          <p>挑戦とは、特別な誰かに与えられた<br className="mobile-break" />特権ではありません。</p>
          <p>一歩踏み出す勇気、自分を偽らない表現。<br className="mobile-break" />その積み重ねが、<br />日常を、そして人生を彩っていく。</p>
          <p>私たちはSNSという手段を通じて、<br />全人類が表現者となれる舞台を整えます。</p>
          <p>正解をなぞるのではなく、<br />あなたの「哲学・本音・思想」が<br className="mobile-break" />真っ直ぐに届く仕組みを。</p>
          <p>「挑戦」することが特別なことではなく、<br />呼吸をするように「常態化」している世界。<br />それが、私たちの目指す到達点です。</p>
        </div>
      </div>
    </section>
  );
}
