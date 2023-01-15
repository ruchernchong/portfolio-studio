export const postToDevCommunity = (content) => {
  fetch(
    "https://kqx0owm4v5.execute-api.ap-southeast-1.amazonaws.com/post-to-dev-community",
    {
      method: "POST",
      body: JSON.stringify(content),
    }
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => console.error(e));

  // fetch("https://dev.to/api/articles", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "api-key": import.meta.env.SANITY_STUDIO_DEV_TO_API_KEY,
  //   },
  //   body: JSON.stringify({
  //     article: {
  //       title: content.title,
  //       body_markdown: content.content,
  //       published: true,
  //       ...content,
  //     },
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(JSON.stringify(res)))
  //   .catch((e) => console.error(e));
};
