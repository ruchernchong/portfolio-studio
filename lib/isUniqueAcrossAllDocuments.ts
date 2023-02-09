// Source: https://www.sanity.io/docs/slug-type#d5066a58b95a

/**
 * Note: this assumes that every document that has a slug field have it on the `slug` field at the root
 *
 * @param slug
 * @param context
 */
export const isUniqueAcrossAllDocuments = async (slug, context) => {
  const { document, getClient } = context;
  const client = getClient({ apiVersion: "2021-03-25" });
  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;

  return client.fetch(query, params);
};
