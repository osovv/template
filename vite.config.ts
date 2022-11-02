import react from '@vitejs/plugin-react';
import path from 'node:path';
import { packageDirectorySync } from 'pkg-dir';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const packageRoot = packageDirectorySync();
const ghPages = process.env.GH_PAGES;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      src: path.resolve(packageRoot, './src'),
    },
  },
  base: ghPages ? '/template/' : '/',
});
