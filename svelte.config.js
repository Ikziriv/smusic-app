import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: {
            plugins: [
                cssnano({
                    preset: 'cssnano-preset-default'
                }),
                autoprefixer({})
            ]
        },
    }),

    kit: {
        adapter: adapter(),
        vite: {
            optimizeDeps: {
                include: ["svelte/internal"],
                exclude: ["svelte/animate"],
            },
            resolve: {
                alias: {
                    "@": resolve("src"),
                    "$styles": resolve("src/styles"),
                    "$stores": resolve("src/libs/stores"),
                    "$utils": resolve("src/libs/utils"),
                    "$components": resolve("src/libs/components"),
                    "$cshared": resolve("src/libs/components/shared"),
                },
            },
        },
    }
};

export default config;