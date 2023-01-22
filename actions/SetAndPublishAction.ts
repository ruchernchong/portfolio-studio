import { useDocumentOperation } from "sanity";
import { postToDevCommunity } from "../utils/post-to-dev-community";

export const CustomPublishAction = (originalPublishAction) => {
  const SetAndPublishAction = (props) => {
    const { id, type, draft, published } = props;
    const originalResult = originalPublishAction(props);

    const { patch } = useDocumentOperation(id, type);

    // published && postToDevCommunity(published);

    return {
      ...originalResult,
      onHandle: () => {
        patch.execute(
          [
            {
              set: {
                slug: {
                  _type: "slug",
                  current: draft.title?.replace(/\s+/g, "-").toLowerCase(),
                },
              },
            },
            { setIfMissing: { _createdAt: new Date().toISOString() } },
            { set: { excerpt: draft.content?.substring(0, 255) } },
          ],
          {}
        );

        originalResult.onHandle();
      },
    };
  };

  return SetAndPublishAction;
};
