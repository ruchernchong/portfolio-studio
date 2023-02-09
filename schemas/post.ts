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
      title: "Body",
      type: "markdown",
      options: {
        imageUrl: (imageAsset) => imageAsset.url,
      },
    },

    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "publishedDate",
      title: "Date",
      type: "datetime",
    },
    {
      name: "featured",
      title: "Featured Post",
      description: "Set if the post should be a featured post",
      type: "boolean",
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: "Published Date",
      name: "publishedDateDesc",
      by: [
        {
          field: "publishedDate",
          direction: "desc",
        },
      ],
    },
  ],
};
