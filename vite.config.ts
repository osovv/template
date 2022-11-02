import react from '@vitejs/plugin-react';
import path from 'node:path';
import { packageDirectorySync } from 'pkg-dir';
import { defineConfig } from 'vite';

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(packageRoot, './src'),
    },
  },
});
