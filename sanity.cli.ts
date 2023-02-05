import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "sg29f8lf",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
});
