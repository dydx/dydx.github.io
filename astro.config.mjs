// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://dydx.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Choose a dark theme for code highlighting
			theme: 'one-dark-pro',
			// Enable word wrapping for better readability
			wrap: true,
		},
	},
});
