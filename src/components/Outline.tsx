export default function Outline() {
  return (
    <section id="outline" className="relative min-h-screen flex items-center px-6 bg-white">
      <h2 className="absolute top-[5vh] left-18 text-2xl font-bold text-gray-800">Outline</h2>
      <div className="max-w-3xl mx-auto">
        <table className="w-full">
          <tbody>
            <tr>
              <th className="py-8 pr-8 text-left text-[30px] font-bold text-gray-900 w-56 align-top">
                会社名
              </th>
              <td className="py-8 text-[30px] font-bold text-gray-800">C.I.E.P</td>
            </tr>
            <tr>
              <th className="py-8 pr-8 text-left text-[30px] font-bold text-gray-900 w-56 align-top">
                設立
              </th>
              <td className="py-8 text-[30px] font-bold text-gray-800">2025年4月3日</td>
            </tr>
            <tr>
              <th className="py-8 pr-8 text-left text-[30px] font-bold text-gray-900 w-56 align-top">
                代表
              </th>
              <td className="py-8 text-[30px] font-bold text-gray-800">本多 真雄人</td>
            </tr>
            <tr>
              <th className="py-8 pr-8 text-left text-[30px] font-bold text-gray-900 w-56 align-top">
                連絡先
              </th>
              <td className="py-8 text-[30px] font-bold text-gray-800">
                <div className="flex flex-col gap-16">
                  <span>070-3794-4181</span>
                  <span>ciep.maoto@gmail.com</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
