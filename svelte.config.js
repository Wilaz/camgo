import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

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
			base: process.env.NODE_ENV === 'production' ? '/camgo' : ''
		}
	},

	extensions: ['.svelte', '.svx']
};
