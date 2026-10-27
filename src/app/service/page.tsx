import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CircleCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import { getServices } from "@/sanity/queries";
import styles from "./service.module.css";

export const metadata: Metadata = { title: "Service | 株式会社C.I.E.P" };

const supportItems = [
  { title: "コンサル", description: "課題を抽出し、抱える課題に対して戦略立案から実行までを提案します。" },
  { title: "コーチング", description: "実装していくうえでのマインドセットを行います。不安・悩みの解消、挑戦する時のマインドセットなど心理的解決を行います。" },
  { title: "実装移行", description: "目的に対してのアクションを、行動計画に移します。日々の動きを明確にしながら、的確なフィードバックを行います。" },
];
const snsSteps = [
  { title: "認知", tiktok: "継続的な投稿\n視聴者数の獲得", instagram: "継続的な投稿\n閲覧者数の獲得" },
  { title: "興味", tiktok: "共感の発信\nファンの獲得", instagram: "ブランディング\nプロフィール\nファンの獲得" },
  { title: "フォロー・保存", tiktok: "継続的視聴\n他者への拡散", instagram: "継続的視聴\n他者への拡散" },
  { title: "来店・購入", tiktok: "ネット検索\nインスタへの移行\n訪問", instagram: "マップ検索\nHP閲覧\n訪問" },
];

function DownLink() {
  return <span className={styles.more}>詳しく見る<span className={styles.arrow}><ArrowDown aria-hidden="true" /></span></span>;
}
function Platforms() {
  return <span className={styles.platforms}><span>Instagram</span><span>TikTok</span></span>;
}

export default async function ServicePage() {
  const items = await getServices(process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep");
  return (
    <div id="top" className={styles.page}>
      <Header fixed />
      <main>
        <section className={`${styles.intro} section-divider`} aria-labelledby="service-title">
          <p className={styles.label}>サービス</p>
          <h1 id="service-title">Service</h1>
          <div className={styles.introduction}>
            <p>人の手で”表現”と”挑戦”に革新を起こすために、対「人」というサービスを大切に。</p>
            <p>コーチング・メンタリングやSNSという世の中に表現を産みだすものへの構築・運用サポートを展開中。</p>
          </div>
          <div className={styles.cards}>
            <a href="#coaching" className={styles.card}>
              <div className={styles.cardPhoto}><Image src="/images/service/coaching.jpg" alt="面談でのコーチングの様子" fill sizes="(max-width: 767px) calc(100vw - 36px), 484px" className={styles.photo} /></div>
              <div className={styles.cardBody}>
                <span className={styles.number}>01</span>
                <h2>コーチング・サポート</h2>
                <p>学生から社会人まで<br />キャリア形成や目標達成など幅広く対応</p>
                <DownLink />
              </div>
            </a>
            <a href="#sns" className={styles.card}>
              <div className={styles.cardVisual}><span>世の中が ”目を止める”</span><Platforms /></div>
              <div className={styles.cardBody}>
                <span className={styles.number}>02</span>
                <h2>SNS構築・運用サポート</h2>
                <span className={styles.mobileCardCatch}>世の中が ”目を止める”</span>
                <p>理想のアカウント<br />理想の投稿を追及して伴走します</p>
                <span className={styles.mobilePlatforms}><Platforms /></span>
                <DownLink />
              </div>
            </a>
          </div>
        </section>
        <section id="coaching" className={`${styles.detail} ${styles.coaching} section-divider`} aria-labelledby="coaching-title">
          {items.filter(item => !/SNS/i.test(item.title)).map(item => <span key={item._id} id={`service-${item._id}`} className={styles.anchor} />)}
          <p className={styles.eyebrow}>-COACHING</p>
          <h2 id="coaching-title" className={styles.detailTitle}>コーチング・サポート</h2>
          <p className={styles.catch}>理想実現のための伴走者</p>
          <div className={styles.coachingVisual}>
            <Image src="/images/service/coaching.jpg" alt="" fill sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1440px) 84vw, 1200px" className={styles.photo} />
            <div className={styles.visualContent}>
              <div>進路選択<br />自己表現<br />キャリア形成</div><span aria-hidden="true">×</span><div>コーチング<br />サポート<br />（面談による）</div>
            </div>
          </div>
          <h3 className={styles.supportHeading}>あなたに眠る”これだ！”を<span>手掛ける</span></h3>
          <div className={styles.supportList}>
            {supportItems.map(item => <div key={item.title} className={styles.supportItem}><h4><CircleCheck aria-hidden="true" />{item.title}</h4><p>{item.description}</p></div>)}
          </div>
        </section>
        <section id="sns" className={`${styles.detail} ${styles.sns} section-divider`} aria-labelledby="sns-title">
          {items.filter(item => /SNS/i.test(item.title)).map(item => <span key={item._id} id={`service-${item._id}`} className={styles.anchor} />)}
          <p className={styles.eyebrow}>-SNS</p>
          <h2 id="sns-title" className={styles.detailTitle}>SNS構築・運用サポート</h2>
          <p className={styles.catch}>世の中が ”目を止める”</p>
          <p className={styles.snsSubtitle}>アカウント・PRへと貢献します。</p>
          <div className={styles.commitment}><p>ブランディング<small>や</small>認知拡大<br className={styles.mobileBreak} /><small>にコミットした</small></p><p>伴走型コンサルティングサポート</p></div>
          <div className={styles.process} aria-label="SNS運用支援の4ステップ">
            <div className={styles.goals}><span>ブランディング定着・認知拡大</span><div><span>新規獲得</span><span>フォロワー・ファン増加</span></div></div>
            <div className={styles.platformLabel}>TikTok</div><div className={styles.platformLabel}>Instagram</div>
            {snsSteps.map((step, i) => <div className={styles.step} key={step.title}>
              <h3><small>STEP {i + 1}</small><span>{step.title.includes("・") ? <>{step.title.split("・")[0]}<br className={styles.desktopBreak} /><span className={styles.mobileDot}>・</span>{step.title.split("・")[1]}</> : step.title}</span></h3>
              <div className={styles.stepContent}><div><span>TikTok</span><p>{step.tiktok}</p></div><div><span>Instagram</span><p>{step.instagram}</p></div></div>
            </div>)}
          </div>
        </section>
        <section className={styles.message}>
          <h2>人のみが知る<span>”内側の頂”へあなたと。</span></h2>
          <p>人間の”感情”が見える瞬間、<br className={styles.mobileBreak} />”挑戦”に向かう瞬間。<br />この全てを人の手で手掛ける組織に。</p>
        </section>
        <section className={`${styles.contact} desktop-contact-cta section-divider`} aria-label="お問い合わせ">
          <Link href="/contact" className={styles.contactLink}>
            <span className={styles.contactTitle}><strong>contact</strong><span>お問い合わせはこちら</span></span>
            <span className={styles.contactCopy}>企業様や取材のご依頼は<br />こちらより気軽にお問い合わせください。</span>
            <span className={styles.arrow}><ArrowRight aria-hidden="true" /></span>
          </Link>
        </section>
        <ContactCta mobileOnly />
      </main>
      <Footer />
    </div>
  );
}
