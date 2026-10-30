import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import News from "@/components/News";
import ContactCta from "@/components/ContactCta";
import { getNews } from "@/sanity/queries";

export const metadata: Metadata = { title: "News | C.I.E.P" };

export default async function NewsPage() {
  const items = await getNews(process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep");
  return (
    <ContentPage title="News" label="お知らせ" contactSection={<ContactCta />}>
      <News newsItems={items} listing />
    </ContentPage>
  );
}
