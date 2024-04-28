import { defineConfig } from "sanity";
import { RobotIcon } from "@sanity/icons";
import { structureTool } from "sanity/structure";
import { markdownSchema } from "sanity-plugin-markdown";
import { schemaTypes } from "./schemas";
import { CustomPublishAction } from "./actions/SetAndPublishAction";
import CustomMarkdownInput from "./components/CustomMarkdownInput";
import { media } from "sanity-plugin-media";

export default defineConfig({
  name: "default",
  title: "Portfolio Studio",
  icon: RobotIcon,
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET || "production",
  plugins: [
    structureTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    media(),
  ],
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
