import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContentPage({ title, label, children }: {
  title: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header fixed />
      <main className="content-page">
        <div className="content-page-heading">
          <nav aria-label="パンくずリスト" className="content-breadcrumb">
            <Link href="/">Top</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span>
          </nav>
          <p>{label}</p>
          <h1>{title}</h1>
        </div>
        {children}
        <div className="content-contact">
          <Link href="/contact"><span>お問い合わせはこちら</span><span aria-hidden="true">→</span></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
