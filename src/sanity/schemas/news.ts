import { defineType } from "sanity";
import clientId from "./fields/clientId";

export default defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    clientId,
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "href",
              title: "URL",
              type: "url",
              validation: (rule) =>
                rule.uri({ allowRelative: true, scheme: ["http", "https"] }),
            },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Date (Newest)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "date" },
  },
});
