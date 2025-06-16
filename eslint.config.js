import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default defineConfig([
    {
        files: ['**/*.js', '**/*.ts'],
        languageOptions: {
            parser: tsparser,
        },
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/block-spacing': ['error', 'always'],
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/computed-property-spacing': ['error', 'never'],
            '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/type-annotation-spacing': ['error', { before: false, after: true }],
            '@stylistic/type-generic-spacing': ['error'],
            '@stylistic/type-named-tuple-spacing': ['error'],
        },
    },
]);
