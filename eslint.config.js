import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default defineConfig([
    {
        files: ['*.js', 'src/**/*.ts'],
        languageOptions: {
            parser: tsparser,
        },
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],
        }
    }
]);
