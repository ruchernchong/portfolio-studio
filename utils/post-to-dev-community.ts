export const postToDevCommunity = (content) => {
  fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": import.meta.env.SANITY_STUDIO_DEV_TO_API_KEY,
    },
    body: JSON.stringify({
      article: {
        title: content.title,
        body_markdown: content.content,
        published: true,
        ...content,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res)));
};
