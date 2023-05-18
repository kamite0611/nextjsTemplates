module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'import'],
  extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'no-var': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'method',
        format: ['camelCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        // TODO: どこかのタイミングで適応して一括修正
        // custom: {
        //   regex: '^I[A-Z]',
        //   match: true,
        // },
      },
    ],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/order': 0,
    'arrow-body-style': 0,
    'react/display-name': 0,
    'import/no-duplicates': 1,
    'react/no-children-prop': 0,
    'react/self-closing-comp': 0,
    'react-hooks/exhaustive-deps': 0,
    '@next/next/no-img-element': 0,
    'react/no-unescaped-entities': 0,
    'import/no-useless-path-segments': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/ban-types': 0,
  },
  overrides: [
    {
      // TypeScript 用に設定を上書く
      files: ['*.ts', '*.tsx'],
      rules: {
        'unused-imports/no-unused-imports': 'warn',
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling'],
              'index',
              'object',
              'type',
            ],
            pathGroups: [
              { pattern: '**/devtools', group: 'type', position: 'after' },
              { pattern: '{@/common,@/common/**}', group: 'type', position: 'before' },
              { pattern: '{@/routes,@/config}', group: 'type', position: 'after' },
              { pattern: '@/**', group: 'internal', position: 'after' },
              { pattern: '@/models', group: 'object' },
              {
                pattern: '{@hui/types,@hui/types/**}',
                group: 'internal',
              },
              {
                pattern: '{@hui/utils,@hui/utils/**}',
                group: 'internal',
              },
              {
                pattern: '{@hui/libs,@hui/libs/**}',
                group: 'internal',
              },
              {
                pattern: '{@hui/hooks,@hui/hooks/**}',
                group: 'internal',
              },
              {
                pattern: '{@hui/contexts,@hui/contexts/**}',
                group: 'internal',
              },
              {
                pattern: '{@hui/components,@hui/components/**}',
                group: 'internal',
              },
              { pattern: '{@mui/**,mdi-material-ui}', group: 'external', position: 'after' },
              { pattern: '{next,next/**}', group: 'builtin' },
              { pattern: '{react,react**}', group: 'builtin' },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: { order: 'asc', caseInsensitive: false },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
