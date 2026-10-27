import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import Outline from "@/components/Outline";

export const metadata: Metadata = { title: "Company | C.I.E.P" };

export default function CompanyPage() {
  return (
    <ContentPage title="Company" label="会社概要">
      <Outline listing />
    </ContentPage>
  );
}
