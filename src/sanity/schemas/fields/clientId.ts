import { defineField } from "sanity";

const clientId = defineField({
  name: "clientId",
  title: "Client ID",
  type: "string",
  validation: (rule) => rule.required(),
  initialValue: () =>
    typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep"
      : "ciep",
  options: {
    list: [{ title: "C.E.I.P", value: "ciep" }],
    layout: "dropdown",
  },
});

export default clientId;
