export const postToDevCommunity = (content) => {
  fetch(import.meta.env.SANITY_STUDIO_DEV_TO_API_URL, {
    method: "POST",
    body: JSON.stringify(content),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
};
