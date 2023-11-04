module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript の基本的なルール
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // ここでJavaScriptファイル用に特定のルールを無効にできます。
        // TypeScript固有のルールをここでオフにすることをお勧めします。
      },
    },
  ],
};
