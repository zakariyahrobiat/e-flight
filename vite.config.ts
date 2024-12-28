
import {defineConfig as defineTestConfig} from "vitest/config"
import react from '@vitejs/plugin-react'

export default defineTestConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles:"./src/setupTest.ts"
  },
})
