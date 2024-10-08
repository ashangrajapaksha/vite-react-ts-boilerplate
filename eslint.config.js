import { ESLint } from 'eslint';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist', '.eslintrc.cjs'], // Specify directories to ignore
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      'react-refresh': eslintPluginReactRefresh,
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'error', // Disallow any type
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
      ],

      // Core ESLint rules
      semi: ['error', 'always'], // Enforce semicolon usage
      quotes: ['error', 'single'], // Enforce single quotes

      // Manually include recommended rules for TypeScript
      ...eslintPluginTypescript.configs.recommended.rules,

      // Manually include recommended rules for React Hooks
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
    files: ['src/**/*.ts', 'src/**/*.tsx'],
  },
];
