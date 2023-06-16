import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./testSetup.ts'],
    include: ['./src/**/*.test.tsx'],
    globals: true
  }
})