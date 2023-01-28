import { useMemo } from "react";
import { MarkdownInput, MarkdownInputProps } from "sanity-plugin-markdown";
import DOMPurify from "dompurify";
import { marked } from "marked";

const CustomMarkdownInput = (props) => {
  const reactMdeProps: MarkdownInputProps["reactMdeProps"] = useMemo(() => {
    return {
      options: {
        previewRender: (markdownText) =>
          DOMPurify.sanitize(marked.parse(markdownText)),
        spellChecker: true,
      },
    };
  }, []);

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />;
};

export default CustomMarkdownInput;
