module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    // semi: 0,
    // 'react/jsx-indent': ['error', 2],
    'max-len': [2, 80, 2],
    // 'no-console': 'warn',
    // 'react/prop-types': [2, { ignore: ['history'] }],
    // 'jsx-a11y/label-has-associated-control': 'off',
    // 'react/jsx-filename-extension': [
    //   1,
    //   { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    // ],
    // 'react/no-set-state': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'prefer-promise-reject-errors': 'off',
    // camelcase: 'off',
  },
};
