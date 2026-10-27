import { ArrowRight } from "lucide-react";

export default function ContactCta({ mobileOnly = false }: { mobileOnly?: boolean }) {
  return (
    <>
      {!mobileOnly && (
        <section aria-label="お問い合わせ" className="desktop-contact-cta section-divider py-12 px-6 max-md:px-4 bg-white flex justify-center">
          <a
            href="/contact"
            className="border-2 border-black w-[59.4rem] max-md:w-full h-[11rem] max-md:h-auto max-md:py-6 pl-12 pr-12 max-md:pl-4 max-md:pr-4 text-black bg-gray-100 inline-flex max-md:flex-col items-center gap-6 max-md:gap-4 transition-transform duration-200 hover:scale-95"
          >
            <div className="flex flex-col gap-4 max-md:gap-2">
              <span className="text-5xl max-md:text-2xl font-bold">contact</span>
              <span className="text-2xl max-md:text-base">お問い合わせはこちら</span>
            </div>
            <span className="text-2xl max-md:text-sm text-left self-end mb-10 max-md:self-auto max-md:mb-0">企業様や取材のご依頼は<br />こちらより気軽にお問い合わせください。</span>
            <span className="ml-auto max-md:ml-0 bg-black rounded-full w-14 h-14 max-md:w-10 max-md:h-10 flex items-center justify-center shrink-0">
              <span className="text-white text-3xl max-md:text-xl font-bold leading-none" style={{ WebkitTextStroke: "2px white" }}>→</span>
            </span>
          </a>
        </section>
      )}
      <section aria-label="お問い合わせ" className="shared-contact-cta mobile-only-contact-cta section-divider bg-white">
        <a href="/contact" className="mobile-contact-link">
          <span className="mobile-contact-heading"><strong>contact</strong><span>お問い合わせはこちら</span></span>
          <span className="mobile-contact-bottom"><span>企業様や取材のご依頼は<br />こちらより気軽にお問い合わせください。</span><span className="mobile-contact-arrow"><ArrowRight aria-hidden="true" /></span></span>
        </a>
      </section>
    </>
  );
}
