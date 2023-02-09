interface ImportMetaEnv {
  SANITY_STUDIO_PROJECT_ID: string;
  SANITY_STUDIO_DATASET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
