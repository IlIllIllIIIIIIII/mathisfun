import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { defineConfig } from 'vite';

// Render serves this browser-only build; Sites keeps its own Worker build.
export default defineConfig({
  root: fileURLToPath(new URL('./render', import.meta.url)),
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  css: { postcss: { plugins: [tailwindcss()] } },
  build: {
    outDir: fileURLToPath(new URL('./dist-render', import.meta.url)),
    emptyOutDir: true,
  },
});
