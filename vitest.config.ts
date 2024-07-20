import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// Ensure Vitest uses Vite configuration
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        '**/*.config.ts', 
        '**/*.config.js', 
        '**/*.eslintrc.cjs', 
        '**/*.ts', 
      ],
    },
  },
  
});
