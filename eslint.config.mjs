import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import cspellESLintPluginRecommended from '@cspell/eslint-plugin/recommended'

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    cspellESLintPluginRecommended,
    eslintPluginPrettierRecommended,
  ],
  files: ['**/*.{ts,tsx,js,jsx}'],
  ignores: [
    'dist/**/*',
    'coverage/**/*',
    'scripts/**/*',
    'public/mockServiceWorker.js',
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,

    // These parserOptions are for typescript-eslint
    // https://typescript-eslint.io/getting-started/typed-linting
    parserOptions: {
      project: './tsconfig.app.json',
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
})
