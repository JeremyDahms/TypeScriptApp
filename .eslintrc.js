'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ['@typescript-eslint', 'prettier', 'react', 'import'],
    root: true,
    rules: {
        eqeqeq: [ERROR, 'allow-null'],
        'import/dynamic-import-chunkname': ERROR,
        'import/no-unresolved': ERROR,
        indent: OFF,
        'linebreak-style': OFF,
        'no-console': WARN,
        'no-shadow': ERROR,
        'no-unused-expressions': ERROR,

        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'prettier/prettier': 'error',

        // React and JSX
        'react/jsx-boolean-value': [ERROR, 'always'],
        'react/jsx-no-undef': ERROR,
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './webpack.config.js',
            },
        },
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
