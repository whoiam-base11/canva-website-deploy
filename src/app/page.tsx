import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Member from "@/components/Member";
import Report from "@/components/Report";
import News from "@/components/News";
import Outline from "@/components/Outline";
import Message from "@/components/Message";
import Footer from "@/components/Footer";
import { getServices, getReports, getNews } from "@/sanity/queries";

const CLIENT_ID = process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep";

export default async function Home() {
  const [services, reports, newsItems] = await Promise.all([
    getServices(CLIENT_ID),
    getReports(CLIENT_ID),
    getNews(CLIENT_ID),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Gallery />
        <Services services={services} />
        <Member />
        <Report reports={reports} />
        <News newsItems={newsItems} />
        <Outline />
        <Message />
      </main>
      <Footer />
    </>
  );
}
