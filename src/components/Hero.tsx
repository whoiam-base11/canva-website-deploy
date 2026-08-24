import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end bg-navy overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="群衆の写真"
        fill
        className="object-cover object-center scale-110"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-16 pb-24 md:px-24 md:pb-36">
        <p className="mb-12 -ml-4 text-[24px] sm:text-[27px] font-bold text-white tracking-widest">
          「感情」と「欲」の
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-[109px] font-bold text-white tracking-wider">
          頂へ
        </h1>
        <p className="mt-12 text-[14px] sm:text-[19px] text-white tracking-widest">
          A top Emotion and Desire
        </p>
        <p className="mt-12 text-[24px] sm:text-[27px] text-white tracking-widest">
          About C.E.I.P →
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[36px] text-white tracking-widest">Scroll</span>
        <ChevronDown size={32} className="text-white animate-bounce" />
      </div>
    </section>
  );
}
