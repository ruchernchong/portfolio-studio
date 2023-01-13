import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { markdownSchema } from "sanity-plugin-markdown";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { SetAndPublishAction } from "./actions/SetAndPublishAction";

export default defineConfig({
  name: "default",
  title: "portfolio-studio",
  projectId: "sg29f8lf",
  dataset: "production",
  plugins: [deskTool(), markdownSchema(), visionTool()],
  document: {
    actions: (prev) =>
      prev.map((originalAction) =>
        originalAction.action === "publish"
          ? SetAndPublishAction
          : originalAction
      ),
  },
  schema: {
    types: schemaTypes,
  },
});
