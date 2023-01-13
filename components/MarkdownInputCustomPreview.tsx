import { useMemo } from "react";
import { MarkdownInput, MarkdownInputProps } from "sanity-plugin-markdown";
import DOMPurify from "dompurify";
import { marked } from "marked";

export const CustomMarkdownInput = (props) => {
  const reactMdeProps: MarkdownInputProps["reactMdeProps"] = useMemo(
    () => ({
      options: {
        previewRender: (markdownText) => {
          return DOMPurify.sanitize(marked.parse(markdownText));
        },
      },
    }),
    []
  );

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />;
};
