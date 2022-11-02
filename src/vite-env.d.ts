/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GH_PAGES: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
