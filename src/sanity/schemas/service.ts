import { defineType } from "sanity";
import clientId from "./fields/clientId";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    clientId,
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
