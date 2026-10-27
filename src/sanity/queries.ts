import { cacheLife, cacheTag } from "next/cache";
import { client } from "./client";

export type SanityService = {
  _id: string;
  title: string;
  description: string;
  image: { asset: { _ref: string }; hotspot?: { x: number; y: number } } | null;
  order: number;
};

export type SanityReport = {
  _id: string;
  title: string;
  description: string;
  image: { asset: { _ref: string }; hotspot?: { x: number; y: number } } | null;
  order: number;
};

export type SanityNews = {
  _id: string;
  date: string;
  title: string;
  body: string;
  links: { label: string; href: string }[] | null;
};

export async function getServices(clientId: string): Promise<SanityService[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("services");

  return client.fetch(
    `*[_type == "service" && clientId == $clientId] | order(order asc) {
      _id, title, description, image, order
    }`,
    { clientId }
  );
}

export async function getReports(clientId: string): Promise<SanityReport[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("reports");

  return client.fetch(
    `*[_type == "report" && clientId == $clientId] | order(order asc) {
      _id, title, description, image, order
    }`,
    { clientId }
  );
}

export async function getNews(clientId: string): Promise<SanityNews[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("news");

  return client.fetch(
    `*[_type == "news" && clientId == $clientId] | order(date desc) {
      _id, date, title, body, links[]{ label, href }
    }`,
    { clientId }
  );
}
