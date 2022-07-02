export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62c08598f83fa369d4f231ad",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3io3o187",
                  apiId: "df7dc78b-dc84-4635-9853-90c73bf101a1",
                },
                {
                  buildHookId: "62c0859816537f6b8daf0f2b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-t144b46k",
                  apiId: "ee0764e7-f5dd-4782-bfe2-b67a543d18bb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/arne90/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-t144b46k.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
