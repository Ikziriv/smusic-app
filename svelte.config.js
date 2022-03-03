import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'path';

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
		adapter: adapter()
	}
};

export default config;
