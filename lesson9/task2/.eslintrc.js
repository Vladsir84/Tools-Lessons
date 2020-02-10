module.exports = {

    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        'import/prefer-default-export': 0,
        'no-unused-vars': 0,
        'import/no-mutable-exports': 0,
        'no-alert': 0,
        'no-plusplus': 0,
        'no-use-before-define': 0,
        'no-restricted-globals': 0,
        'import/no-cycle': 0,
        'array-callback-return': 0,
        'no-restricted-syntax': 0,
        'no-unused-expressions': 0,
        'no-return-assign': 0,
        'func-names': 0,
        'consistent-return': 0
    },
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
};