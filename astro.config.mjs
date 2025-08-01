import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://joker-casino.com',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  },
  compressHTML: true
});