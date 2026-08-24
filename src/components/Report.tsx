"use client";

import { useRef } from "react";

const reports = [
  {
    id: 1,
    title: "レポートタイトル1",
    image: "report-1.jpg",
    description: "プロジェクトの進捗と成果についてのレポートです。",
  },
  {
    id: 2,
    title: "レポートタイトル2",
    image: "report-2.jpg",
    description: "市場調査の結果をまとめたレポートです。",
  },
  {
    id: 3,
    title: "レポートタイトル3",
    image: "report-3.jpg",
    description: "新規事業の戦略提案レポートです。",
  },
  {
    id: 4,
    title: "レポートタイトル4",
    image: "report-4.jpg",
    description: "クライアント満足度調査の結果レポートです。",
  },
  {
    id: 5,
    title: "レポートタイトル5",
    image: "report-5.jpg",
    description: "年間活動の振り返りと展望レポートです。",
  },
];

export default function Report() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    // 後半セットに到達したら先頭にリセット
    if (el.scrollLeft >= halfWidth) {
      el.scrollLeft -= halfWidth;
    }
    // 先頭より前にスクロールしたら後半へ
    if (el.scrollLeft <= 0) {
      el.scrollLeft += halfWidth;
    }
  };

  // ループ用に3セット分レンダリング（前後に余白を持たせる）
  const loopedReports = [...reports, ...reports, ...reports];

  return (
    <section id="report" className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h2 className="absolute top-[10vh] left-24 flex items-baseline gap-20 text-2xl font-bold text-gray-800">Report <span className="text-xl font-normal text-gray-900">これまでの実績を掲載いたします。</span></h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-16 px-6 w-max">
          {loopedReports.map((report, index) => (
            <article key={`${report.id}-${index}`} className="w-[415px] shrink-0">
              <div className="relative aspect-[16/10] bg-gray-300 mb-4">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  {report.image}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{report.title}</h3>
              <p className="text-base text-gray-500">{report.description}</p>
            </article>
          ))}
        </div>
      </div>
      <a
        href="/interview"
        className="absolute bottom-[10vh] text-gray-800 text-lg hover:text-gray-500 transition-colors"
      >
        Read all Interview →
      </a>
    </section>
  );
}
