module.exports = {

    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        'import/prefer-default-export': 0,
        'no-unused-vars': 0,
        'import/no-mutable-exports': 0
    },
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
};