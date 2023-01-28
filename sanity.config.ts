import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { markdownSchema } from "sanity-plugin-markdown";
import { schemaTypes } from "./schemas";
import { CustomPublishAction } from "./actions/SetAndPublishAction";
import CustomMarkdownInput from "./components/CustomMarkdownInput";

export default defineConfig({
  name: "default",
  title: "Portfolio Studio",
  projectId: "sg29f8lf",
  dataset: "production",
  plugins: [deskTool(), markdownSchema({ input: CustomMarkdownInput })],
  document: {
    actions: (prev) =>
      prev.map((originalAction) =>
        originalAction.action === "publish"
          ? CustomPublishAction(originalAction)
          : originalAction
      ),
  },
  schema: {
    types: schemaTypes,
  },
});
