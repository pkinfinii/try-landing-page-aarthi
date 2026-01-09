
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are loaded correctly on sub-paths
  define: {
    // This allows process.env.API_KEY to be available in the browser
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
});
