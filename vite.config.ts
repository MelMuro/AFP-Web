import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@vis.gl/react-google-maps': '@vis.gl/react-google-maps'
		}
	}
});
