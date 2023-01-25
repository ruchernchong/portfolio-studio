export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      readOnly: true,
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      title: "Content",
      type: "markdown",
    },

    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
  ],
  orderings: [
    {
      title: "Published Date, Desc",
      name: "publishedDateDesc",
      by: [
        {
          field: "date",
          direction: "desc",
        },
      ],
    },
  ],
};
