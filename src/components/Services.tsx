import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import type { SanityService } from "@/sanity/queries";

export default function Services({ services, listing = false }: {
  services: SanityService[];
  listing?: boolean;
}) {
  return (
    <section id="services" aria-label="事業内容" className={`home-services section-divider relative min-h-screen flex flex-col justify-center px-6 max-md:px-4 bg-gray-50 ${listing ? "content-listing" : ""}`}>
      {!listing && <h2 className="absolute top-[5vh] left-18 max-md:left-4 text-2xl font-bold text-gray-800">Service</h2>}
      <div className="services-content max-w-5xl mx-auto w-full">
        {services.length ? <div className="services-grid grid md:grid-cols-2 gap-12 max-md:gap-16">
          {services.map((service) => (
            <article key={service._id} id={`service-${service._id}`} className="service-card flex flex-col items-center scroll-mt-28">
              <div className="service-image relative aspect-[3/2] w-[96%] max-md:w-full bg-gray-300">
                {service.image ? (
                  <Image src={urlFor(service.image).width(800).height(533).url()} alt={service.title} fill sizes="(max-width: 767px) calc(100vw - 32px), 480px" className="object-cover" />
                ) : <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">No Image</span>}
              </div>
              <h3 className="mt-16 max-md:mt-6 text-[31px] max-md:text-xl font-bold text-gray-800 text-center">{service.title}</h3>
              {listing ? (
                <>
                  {service.description && <p className="service-description">{service.description}</p>}
                  <Link href="/contact" className="service-detail mt-6 border border-black px-6 py-2 text-lg text-gray-600 hover:bg-gray-800 hover:text-white transition-colors">この事業について相談する →</Link>
                </>
              ) : <Link href={`/service#service-${service._id}`} className="service-detail mt-16 max-md:mt-4 text-xl max-md:text-base text-gray-500 hover:text-gray-800 border border-black px-6 py-2 transition-colors">詳細を確認する→</Link>}
            </article>
          ))}
        </div> : <p className="content-empty">事業内容は準備中です。</p>}
      </div>
    </section>
  );
}
