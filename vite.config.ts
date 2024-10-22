import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [sveltekit(), visualizer({ open: true })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ['legacy-js-api']
			}
		}
	}
});
