import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import Report from "@/components/Report";
import { getReports } from "@/sanity/queries";

export const metadata: Metadata = { title: "Report | C.I.E.P" };

export default async function ReportPage() {
  const items = await getReports(process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep");
  return (
    <ContentPage title="Report" label="実績紹介">
      <Report reports={items} listing />
    </ContentPage>
  );
}
