import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { markdownSchema } from "sanity-plugin-markdown";
import { schemaTypes } from "./schemas";
import { CustomPublishAction } from "./actions/SetAndPublishAction";
import CustomMarkdownInput from "./components/CustomMarkdownInput";

export default defineConfig({
  name: "default",
  title: "Portfolio Studio",
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET || "production",
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
