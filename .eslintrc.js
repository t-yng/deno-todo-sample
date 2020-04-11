module.exports = {
    extends: [
        "eslint:recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
    },
    globals: {
        "Deno": "readonly",
        "console": "readonly",
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                semi: true,
            },
        ],
    },
};
