import { useEffect, useState } from "react";
import { useDocumentOperation } from "sanity";
import { PublishIcon } from "@sanity/icons";

export const SetAndPublishAction = (props) => {
  const { id, type, draft, onComplete } = props;

  const { patch, publish } = useDocumentOperation(id, type);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    if (isPublishing && !draft) {
      setIsPublishing(false);
    }
  }, [isPublishing, draft]);

  return {
    disabled: publish.disabled,
    label: "Publish",
    icon: PublishIcon,
    onHandle: () => {
      setIsPublishing(true);

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
          { setIfMissing: { date: new Date().toISOString() } },
          { setIfMissing: { excerpt: draft.content?.substring(0, 255) } },
        ],
        {}
      );

      publish.execute();
      onComplete();
    },
  };
};
