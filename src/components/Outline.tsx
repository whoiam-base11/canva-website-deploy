export default function Outline({ listing = false }: { listing?: boolean }) {
  return (
    <section id="outline" className={`home-outline section-divider relative min-h-screen max-md:min-h-0 max-md:py-16 flex items-center px-6 max-md:px-4 bg-white ${listing ? "content-listing" : ""}`}>
      <h2 className="absolute max-md:relative top-[5vh] max-md:top-0 left-18 max-md:left-0 text-2xl font-bold text-gray-800 max-md:mb-8">Outline</h2>
      <div className="outline-content max-w-3xl mx-auto">
        <table className="w-full">
          <tbody>
            {[["会社名", "C.I.E.P"], ["設立", "2025年4月3日"], ["代表", "本多 真雄人"]].map(([label, value]) => (
              <tr key={label}>
                <th scope="row" className="py-8 max-md:py-4 pr-8 max-md:pr-4 text-left text-[30px] max-md:text-base font-bold text-gray-900 w-56 max-md:w-24 align-top">{label}</th>
                <td className="py-8 max-md:py-4 text-[30px] max-md:text-base font-bold text-gray-800">{value}</td>
              </tr>
            ))}
            <tr>
              <th scope="row" className="py-8 max-md:py-4 pr-8 max-md:pr-4 text-left text-[30px] max-md:text-base font-bold text-gray-900 w-56 max-md:w-24 align-top">連絡先</th>
              <td className="py-8 max-md:py-4 text-[30px] max-md:text-base font-bold text-gray-800">
                <div className="outline-contact flex flex-col gap-16 max-md:gap-4">
                  <a href="tel:07037944181">070-3794-4181</a>
                  <a href="mailto:ciep.maoto@gmail.com">ciep.maoto@gmail.com</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
