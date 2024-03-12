import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // https://vitejs.dev/config/#using-environment-variables-in-config
  // @ts-expect-error Exception for missing `process` type in Node environment.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    css: {
      modules: {
        // Adjust SCSS Module generated class names.
        // https://github.com/madyankin/postcss-modules/blob/325f0b33f1b746eae7aa827504a5efd0949022ef/README.md#generating-scoped-names
        generateScopedName: '[name]__[local]__[hash:base64:5]',
      },
    },
  }
})
