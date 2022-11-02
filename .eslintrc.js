module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'react-hooks', 'eslint-plugin-import-helpers'],
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'no-console': ['warn'],
        'sort-imports': ['off'],
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'block', 'block-like', 'case', 'default', 'directive'],
            },
        ],
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'always',
                groups: [
                    '/^((react)|(react-router)|(react-redux))$/',
                    'module',
                    '/^@src/',
                    'parent',
                    'sibling',
                    '/scss/',
                ],
                alphabetize: {
                    order: 'asc',
                    ignoreCase: true,
                },
            },
        ],
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
        'import/resolver': {
            alias: [['@src/*', './src/*']],
        },
    },
};
