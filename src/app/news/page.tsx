import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import News from "@/components/News";
import { getNews } from "@/sanity/queries";

export const metadata: Metadata = { title: "News | C.I.E.P" };

export default async function NewsPage() {
  const items = await getNews(process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep");
  return (
    <ContentPage title="News" label="お知らせ">
      <News newsItems={items} listing />
    </ContentPage>
  );
}
