import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header fixed />
      <main>
        <section className="min-h-screen pt-32 pb-24 pl-18 pr-6 bg-white">
          <div>
            <p className="text-[1.33rem] text-gray-900 mb-2">お問い合わせ</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Contact</h1>
            <form className="space-y-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-8">
                <label className="text-2xl font-normal text-gray-800 w-72 shrink-0">会社・団体名（必須）</label>
                <input
                  type="text"
                  className="flex-1 border border-gray-300 px-4 py-4 text-lg rounded-lg"
                />
              </div>
              <div className="flex items-center gap-8">
                <label className="text-2xl font-normal text-gray-800 w-72 shrink-0">ご担当者名（必須）</label>
                <input
                  type="text"
                  className="flex-1 border border-gray-300 px-4 py-4 text-lg rounded-lg"
                />
              </div>
              <div className="flex items-center gap-8">
                <label className="text-2xl font-normal text-gray-800 w-72 shrink-0">メールアドレス（必須）</label>
                <input
                  type="email"
                  className="flex-1 border border-gray-300 px-4 py-4 text-lg rounded-lg"
                />
              </div>
              <div className="flex items-center gap-8">
                <label className="text-2xl font-normal text-gray-800 w-72 shrink-0">電話番号（必須）</label>
                <input
                  type="tel"
                  className="flex-1 border border-gray-300 px-4 py-4 text-lg rounded-lg"
                />
              </div>
              <div>
                <label className="block text-2xl font-normal text-gray-800 mb-4">お問い合わせ内容（必須）</label>
                <textarea
                  className="w-full border border-gray-300 px-4 py-4 text-lg h-48 rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="border-2 border-black px-12 py-8 text-[1.625rem] font-bold text-black inline-flex items-center gap-4 transition-transform duration-200 hover:scale-95"
                >
                  送信する
                  <span className="bg-black rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                    <span className="text-white text-3xl font-bold leading-none" style={{ WebkitTextStroke: "2px white" }}>→</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
