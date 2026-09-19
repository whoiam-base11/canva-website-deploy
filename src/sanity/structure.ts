import type { StructureResolver } from "sanity/structure";

const CLIENT_ID = process.env.NEXT_PUBLIC_SANITY_CLIENT_ID || "ciep";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Services")
        .schemaType("service")
        .child(
          S.documentList()
            .title("Services")
            .filter('_type == "service" && clientId == $clientId')
            .params({ clientId: CLIENT_ID })
            .initialValueTemplates([
              S.initialValueTemplateItem("service-by-client", {
                clientId: CLIENT_ID,
              }),
            ])
        ),
      S.listItem()
        .title("Reports")
        .schemaType("report")
        .child(
          S.documentList()
            .title("Reports")
            .filter('_type == "report" && clientId == $clientId')
            .params({ clientId: CLIENT_ID })
            .initialValueTemplates([
              S.initialValueTemplateItem("report-by-client", {
                clientId: CLIENT_ID,
              }),
            ])
        ),
      S.listItem()
        .title("News")
        .schemaType("news")
        .child(
          S.documentList()
            .title("News")
            .filter('_type == "news" && clientId == $clientId')
            .params({ clientId: CLIENT_ID })
            .initialValueTemplates([
              S.initialValueTemplateItem("news-by-client", {
                clientId: CLIENT_ID,
              }),
            ])
        ),
    ]);

export default structure;
