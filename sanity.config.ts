"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";
import structure from "@/sanity/structure";

const CLIENT_ID = process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep";

export default defineConfig({
  name: "default",
  title: "CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: "service-by-client",
        title: "Service",
        schemaType: "service",
        parameters: [{ name: "clientId", type: "string" }],
        value: (params: { clientId: string }) => ({
          clientId: params.clientId,
        }),
      },
      {
        id: "report-by-client",
        title: "Report",
        schemaType: "report",
        parameters: [{ name: "clientId", type: "string" }],
        value: (params: { clientId: string }) => ({
          clientId: params.clientId,
        }),
      },
      {
        id: "news-by-client",
        title: "News",
        schemaType: "news",
        parameters: [{ name: "clientId", type: "string" }],
        value: (params: { clientId: string }) => ({
          clientId: params.clientId,
        }),
      },
    ],
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.map((item) => {
          if (["service", "report", "news"].includes(item.templateId)) {
            return {
              ...item,
              parameters: { clientId: CLIENT_ID },
            };
          }
          return item;
        });
      }
      return prev;
    },
  },
});
