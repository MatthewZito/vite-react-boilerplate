import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const r = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
	base: '/',

	build: {
		assetsInlineLimit: 10000
	},

	css: {
		// preprocessorOptions: {
		//   scss: {
		//     // additionalData: "@import '@/styles/tailwind';"
		//   },
		// }
	},

	plugins: [react()],

	resolve: {
		alias: {
			'@': r('./src')
		}
	},

	server: {
		open: false
	}
});
