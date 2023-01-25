import { useDocumentOperation } from "sanity";
import { postToDevCommunity } from "../utils/post-to-dev-community";

export const CustomPublishAction = (originalPublishAction) => {
  const SetAndPublishAction = (props) => {
    const { id, type, draft } = props;
    const originalResult = originalPublishAction(props);

    const { patch } = useDocumentOperation(id, type);

    return {
      ...originalResult,
      onHandle: () => {
        patch.execute(
          [
            { setIfMissing: { excerpt: draft.content?.substring(0, 255) } },
            {
              set: {
                slug: {
                  _type: "slug",
                  current: draft.title?.replace(/\s+/g, "-").toLowerCase(),
                },
              },
            },
            { setIfMissing: { date: new Date().toISOString() } },
          ],
          {}
        );

        originalResult.onHandle();
      },
    };
  };

  return SetAndPublishAction;
};
