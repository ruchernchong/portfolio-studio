import { useDocumentOperation } from "sanity";
import slugify from "../lib/slugify";

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
                  current: slugify(draft.title),
                },
              },
            },
            { setIfMissing: { publishedDate: new Date().toISOString() } },
          ],
          {}
        );

        originalResult.onHandle();
      },
    };
  };

  return SetAndPublishAction;
};
