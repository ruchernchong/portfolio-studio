import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";

export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Should be something catchy, descriptive and not too long.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "The slug is auto-generated from the title and is for reference only.",
      type: "slug",
      readOnly: true,
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        source: (_, context) => context.parent.title,
      },
    },
    {
      name: "content",
      title: "Body",
      description: "Editor supports markdown.",
      type: "markdown",
      validation: (Rule) => Rule.required(),
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
      title: "Date & Time",
      description:
        "This field is auto-populated. You may set a custom value to publish on a backdate.",
      type: "datetime",
    },
    {
      name: "featured",
      title: "Featured Post",
      description: "Set if the post should be a featured post.",
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
