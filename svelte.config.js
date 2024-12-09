import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),

	compilerOptions: {
		runes: true
	},

	kit: {
		adapter: adapter(),
		alias: {
			'@componets': path.resolve('./src/componets')
		},
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/camgo' : '',
        }
	},

	extensions: ['.svelte', '.svx']
};
