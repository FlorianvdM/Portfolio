import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap gebruikt nog een oude SASS-schrijfwijze.
        // Dit verbergt de waarschuwingen daarover in de terminal.
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
})