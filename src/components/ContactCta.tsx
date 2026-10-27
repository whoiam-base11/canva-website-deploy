import { ArrowRight } from "lucide-react";

export default function ContactCta({ mobileOnly = false }: { mobileOnly?: boolean }) {
  return (
    <section aria-label="お問い合わせ" className={`shared-contact-cta ${mobileOnly ? "mobile-only-contact-cta" : ""} section-divider min-h-screen flex items-center px-6 bg-white`}>
      <div className="max-w-3xl mx-auto">
        <a
          href="/contact"
          className="flex items-center justify-between border-2 border-gray-900 p-6 hover:bg-gray-50 transition-colors group"
        >
          <div>
            <span className="text-xl font-bold text-gray-900 tracking-wider">
              contact
            </span>
            <p className="text-xs text-gray-500 mt-1">
              お問い合わせはこちら
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600 hidden md:block">
              企業様や取材のご依頼は
              <br />
              こちらより気軽にお問い合わせください。
            </p>
            <span className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </a>
      </div>
      <a href="/contact" className="mobile-contact-link">
        <span className="mobile-contact-heading"><strong>contact</strong><span>お問い合わせはこちら</span></span>
        <span className="mobile-contact-bottom"><span>企業様や取材のご依頼は<br />こちらより気軽にお問い合わせください。</span><span className="mobile-contact-arrow"><ArrowRight aria-hidden="true" /></span></span>
      </a>
    </section>
  );
}
