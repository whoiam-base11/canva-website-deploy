import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { SanityService } from "@/sanity/queries";

type Props = {
  services: SanityService[];
};

export default function Services({ services }: Props) {
  return (
    <section id="services" className="section-divider relative min-h-screen flex flex-col justify-center px-6 max-md:px-4 bg-gray-50">
      <h2 className="absolute top-[5vh] left-18 max-md:left-4 text-2xl font-bold text-gray-800">Service</h2>
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service._id} className="flex flex-col items-center">
              <div className="relative aspect-[3/2] w-[96%] bg-gray-300">
                {service.image ? (
                  <Image
                    src={urlFor(service.image).width(800).height(533).url()}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </span>
                )}
              </div>
              <h3 className="mt-16 max-md:mt-8 text-[31px] max-md:text-xl font-bold text-gray-800 text-center">
                {service.title}
              </h3>
              <a href="/service" className="mt-16 text-xl text-gray-500 hover:text-gray-800 border border-black px-6 py-2 transition-colors">
                詳細を確認する→
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
