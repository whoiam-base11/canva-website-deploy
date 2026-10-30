import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="home-hero relative h-screen flex items-end bg-navy overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="群衆の写真"
        fill
        className="object-cover object-center scale-110"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="hero-copy relative z-10 px-16 pb-24 md:px-24 md:pb-36 max-md:px-6 max-md:pb-28">
        <p className="mb-12 max-md:mb-6 -ml-4 max-md:ml-0 text-[24px] sm:text-[27px] max-md:text-lg font-bold text-white tracking-widest">
          「感情」と「欲」の
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-[109px] max-md:text-5xl font-bold text-white tracking-wider">
          頂へ
        </h1>
        <p className="mt-12 max-md:mt-6 text-[14px] sm:text-[19px] max-md:text-sm text-white tracking-widest">
          A top Emotion and Desire
        </p>
        <a href="/mission" className="hero-about block mt-12 max-md:mt-8 text-[24px] sm:text-[27px] max-md:text-lg text-white tracking-widest">
          About C.I.E.P →
        </a>
      </div>
      <div className="hero-scroll absolute bottom-8 max-md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[36px] max-md:text-base text-white tracking-widest">Scroll</span>
        <ChevronDown size={32} className="text-white animate-bounce max-md:!w-6 max-md:!h-6" />
      </div>
    </section>
  );
}
