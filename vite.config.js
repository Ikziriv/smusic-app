import { sveltekit } from '@sveltejs/kit/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(
    fileURLToPath(
        import.meta.url)
); // jshint ignore:line
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      // throws an error without this when importing Fira font
      allow: ['..']
    },
    proxy: {},
    port: 5174,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  },
  optimizeDeps: {
      include: ["svelte/internal"],
      exclude: ["svelte/animate"],
  },
  resolve: {
      alias: {
          "@": resolve("src"),
          "$styles": resolve("src/styles"),
          "$stores": resolve("src/lib/stores"),
          "$utils": resolve("src/lib/utils"),
          "$components": resolve("src/lib/components"),
          "$cshared": resolve("src/lib/components/shared"),
      },
  },
  define: {
    '__SERVER_VERSION__': JSON.stringify(process.env.npm_package_version),
  }
};

export default config;