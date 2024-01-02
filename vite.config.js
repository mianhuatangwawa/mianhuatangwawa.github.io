// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        default: './index.html',
        gallery: './gallery.html'
      }
    }
  },
});
