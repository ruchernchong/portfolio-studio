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
      name: "slug",
      title: "Slug",
      type: "slug",
      hidden: true,
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
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      hidden: true,
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
};
