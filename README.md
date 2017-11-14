# prettier-setup

> Basic configuration for [Prettier](https://github.com/prettier/prettier), [ESLint](https://eslint.org/), [Husky](https://github.com/typicode/husky) and [Travis CI](https://travis-ci.org/).

This project is an example on how you could integrate Prettier, ESLint, Husky and Travis CI in your new or old project. The setup is very trivial and you will never argue again about the code format.

## Table of contents

* [Install ESLint and Prettier](#install-eslint-and-prettier)
* [Install Husky and commit hooks](#install-husky-and-commit-hooks)
* [Prettier rules](#prettier-rules)
* [ESLint rules](#eslint-rules)
* [Dependencies](#dev-dependencies)

## Install ESLint and Prettier

### Install them using `npm` or `yarn`

```bash
npm install --save-dev --save-exact eslint-config-prettier eslint-plugin-prettier eslint prettier
# OR
yarn add eslint-config-prettier eslint-plugin-prettier eslint prettier --dev --exact
```

### Setup the scripts

Open the [`package.json`](/package.json) and add these to the `scripts`:

```json
"scripts": {
  "fix:config": "prettier --print-width=200 --ignore-path .gitignore --write '**/*.json'",
  "fix:docs": "prettier --ignore-path .gitignore --write '**/*.md'",
  "fix:script": "npm run test:script -- --fix",
  "fix:style": "prettier --ignore-path .gitignore --write '**/*.scss'",
  "fix": "npm run fix:script && npm run fix:config && npm run fix:style && npm run fix:docs",
  "test:script": "eslint --ignore-path .gitignore '**/*.js'",
  "test": "npm run test:script"
}
```

## Install Husky and commit hooks

In order to make sure that all the files will be formatted correctly before commiting to the repo, you will have to setup the commit hooks.

### Install them using `npm` or `yarn`

```bash
npm install --save-dev --save-exact husky lint-staged
# OR
yarn add husky lint-staged --dev --exact
```

### Setup the rules

Open the [`package.json`](/package.json) and add these to the `scripts`:

```json
"lint-staged": {
  "*.js": ["eslint --fix", "git add"],
  "*.json": ["prettier --print-width=200 --write", "git add"],
  "*.md": ["prettier --write", "git add"],
  "*.scss": ["prettier --write", "git add"]
},
"scripts": {
  "precommit": "lint-staged"
}
```

---

## Prettier rules

> Adjust your own rules in by updating the [`.prettierrc.yaml`](/.prettierrc.yaml).

| Rule                                                                          | Value\*     |
| ----------------------------------------------------------------------------- | ----------- |
| [`bracketSpacing`](https://prettier.io/docs/en/options.html#bracket-spacing)  | **`false`** |
| [`jsxBracketSameLine`](https://prettier.io/docs/en/options.html#jsx-brackets) | `false`     |
| [`printWidth`](https://prettier.io/docs/en/options.html#print-width)          | `80`        |
| [`proseWrap`](https://prettier.io/docs/en/options.html#prose-wrap)            | **`false`** |
| [`requirePragma`](https://prettier.io/docs/en/options.html#require-pragma)    | `false`     |
| [`semi`](https://prettier.io/docs/en/options.html#semicolons)                 | `true`      |
| [`singleQuote`](https://prettier.io/docs/en/options.html#quotes)              | **`true`**  |
| [`tabWidth`](https://prettier.io/docs/en/options.html#tab-width)              | `2`         |
| [`trailingComma`](https://prettier.io/docs/en/options.html#trailing-commas)   | **`all`**   |
| [`useTabs`](https://prettier.io/docs/en/options.html#tabs)                    | `false`     |

\* Values in **bold** are not the default ones.

## ESLint rules

> Adjust your own rules in by updating the [`.eslintrc.yaml`](/.eslintrc.yaml).

* [`curly`](https://eslint.org/docs/rules/curly)
* [`dot-notation`](https://eslint.org/docs/rules/dot-notation)
* [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)
* [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)
* [`no-else-return`](https://eslint.org/docs/rules/no-else-return)
* [`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)
* [`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)
* [`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)
* [`no-shadow`](https://eslint.org/docs/rules/no-shadow)
* [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)
* [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)
* [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)
* [`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)
* [`no-var`](https://eslint.org/docs/rules/no-var)
* [`one-var`](https://eslint.org/docs/rules/one-var)
* [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)
* [`prefer-const`](https://eslint.org/docs/rules/prefer-const)
* [`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)
* [`sort-imports`](https://eslint.org/docs/rules/sort-imports)
* [`sort-keys`](https://eslint.org/docs/rules/sort-keys)
* [`sort-vars`](https://eslint.org/docs/rules/sort-vars)
* [`strict`](https://eslint.org/docs/rules/strict)

## Dependencies

* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint](https://github.com/eslint/eslint)
* [husky](https://github.com/typicode/husky)
* [lint-staged](https://github.com/okonet/lint-staged)
* [prettier](https://github.com/prettier/prettier)
