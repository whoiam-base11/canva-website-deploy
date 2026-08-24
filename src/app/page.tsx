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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Gallery />
        <Services />
        <Member />
        <Report />
        <News />
        <Outline />
        <Message />
      </main>
      <Footer />
    </>
  );
}
