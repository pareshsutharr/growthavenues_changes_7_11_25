import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import os from 'node:os';
import path from 'node:path';

const cacheDir = path.join(os.tmpdir(), 'vite-cache');

export default defineConfig({
  plugins: [react()],
  base: '/', // important for absolute asset paths on Vercel
  build: {
    outDir: 'dist'
  },
  cacheDir, // move vite cache to local temp dir to avoid network drive rename issues
  server: {
    host: '0.0.0.0', // listen on all network interfaces
    port: 5173,      // or any free port
    watch: {
      usePolling: true, // fall back to polling to avoid network drive watcher errors
      interval: 100,
    },
    proxy: {
      // Forward API calls to the backend during development
      '/api': (() => {
        const target = process.env.VITE_API_PROXY || 'http://localhost:3000';
        return {
          target,
          changeOrigin: true,
          secure: false,
        };
      })(),
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
