import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Resolve path alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
