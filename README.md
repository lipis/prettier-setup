# prettier-setup

This project sets up formatting and linting tools to keep your code clean and consistent, so you never have to argue about style again:

- [Prettier](https://prettier.io) is an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.
- [ESLint](https://eslint.org) checks JavaScript code for stylistic or programming errors.
- [Husky](https://github.com/typicode/husky) uses Git hooks to ensure that **Prettier** and **ESLint** run on all staged changes to fix files before committing.

The setup described here will format JavaScript, JSON, Sass, Markdown, and YAML files, but you can adjust the settings to your own needs.

## Installing ESLint and Prettier

This step adds ESLint and Prettier to your project's dependencies so they're available locally regardless of the system configuration.

### Install with `yarn`

```bash
yarn add eslint-{config,plugin}-prettier eslint prettier --dev --exact
```

<details><summary>Install with <code>npm</code></summary><p>

```bash
npm install eslint-{config,plugin}-prettier eslint prettier --save-dev --save-exact
```

</p></details>

### Set up the scripts

Open the [`package.json`](/package.json) file in your project and add the following `scripts`\* entries:

```json
"scripts": {
  "fix:other": "yarn prettier --write",
  "fix:js": "yarn test:js --fix",
  "fix": "yarn fix:js && yarn fix:other",
  "prettier": "prettier \"**/*.{json,md,scss,yaml,yml}\"",
  "test:other": "yarn prettier --list-different",
  "test:js": "eslint --ignore-path .gitignore --ignore-path .prettierignore \"**/*.{js,jsx}\"",
  "test": "yarn test:other && yarn test:js"
}
```

\* If you are using `npm`, replace `yarn` with `npm run` in the above section.

## Installing Husky and commit hooks

Set up Husky and the `lint-staged` commit hooks to format changed files before each commit.

### Install with `yarn`

```bash
yarn add husky lint-staged --dev --exact
```

<details><summary>Install with <code>npm</code></summary><p>

```bash
npm install husky lint-staged --save-dev --save-exact
```

</p></details>

### Set up the rules

Add the `lint-staged` and `husky` rules to the [`package.json`](/package.json) file in your project:

```json
"lint-staged": {
  "*.{js,jsx}": ["eslint --fix", "git add"],
  "*.{json,md,scss,yaml,yml}": ["prettier --write", "git add"]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
```

---

<details><summary>Prettier rules</summary><p>

This project defines the following settings in the [`.prettierrc.json`](/.prettierrc.json) file. You can adjust these values according to your own preferences.

| Rule                                                                                 | Value\*     |
| ------------------------------------------------------------------------------------ | ----------- |
| [`arrowParens`](https://prettier.io/docs/en/options.html#arrow-function-parentheses) | `avoid`     |
| [`bracketSpacing`](https://prettier.io/docs/en/options.html#bracket-spacing)         | **`false`** |
| [`jsxBracketSameLine`](https://prettier.io/docs/en/options.html#jsx-brackets)        | `false`     |
| [`printWidth`](https://prettier.io/docs/en/options.html#print-width)                 | `80`        |
| [`proseWrap`](https://prettier.io/docs/en/options.html#prose-wrap)                   | `preserve`  |
| [`requirePragma`](https://prettier.io/docs/en/options.html#require-pragma)           | `false`     |
| [`semi`](https://prettier.io/docs/en/options.html#semicolons)                        | `true`      |
| [`singleQuote`](https://prettier.io/docs/en/options.html#quotes)                     | **`true`**  |
| [`tabWidth`](https://prettier.io/docs/en/options.html#tab-width)                     | `2`         |
| [`trailingComma`](https://prettier.io/docs/en/options.html#trailing-commas)          | **`all`**   |
| [`useTabs`](https://prettier.io/docs/en/options.html#tabs)                           | `false`     |

\* Values in **bold** differ from the Prettier defaults.

</p></details>

<details><summary>ESLint rules</summary><p>

Adjust your own rules by updating the [`.eslintrc.yaml`](/.eslintrc.yaml).

- [`curly`](https://eslint.org/docs/rules/curly)
- [`dot-notation`](https://eslint.org/docs/rules/dot-notation)
- [`id-length`](https://eslint.org/docs/rules/id-length)
- [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)
- [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)
- [`no-else-return`](https://eslint.org/docs/rules/no-else-return)
- [`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)
- [`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)
- [`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)
- [`no-shadow`](https://eslint.org/docs/rules/no-shadow)
- [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)
- [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)
- [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)
- [`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)
- [`no-var`](https://eslint.org/docs/rules/no-var)
- [`one-var`](https://eslint.org/docs/rules/one-var)
- [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)
- [`prefer-const`](https://eslint.org/docs/rules/prefer-const)
- [`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)
- [`sort-imports`](https://eslint.org/docs/rules/sort-imports)
- [`sort-keys`](https://eslint.org/docs/rules/sort-keys)
- [`sort-vars`](https://eslint.org/docs/rules/sort-vars)
- [`strict`](https://eslint.org/docs/rules/strict)
  </p></details>

<details><summary>Dependencies</summary><p>

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint](https://github.com/eslint/eslint)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [prettier](https://github.com/prettier/prettier)
  </p></details>
