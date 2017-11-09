# prettier-setup

> Basic configuration for [Prettier](https://github.com/prettier/prettier),
> [ESLint](https://eslint.org/) and [Travis CI](https://travis-ci.org/).

## Dev dependencies

* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint](https://github.com/eslint/eslint)
* [husky](https://github.com/typicode/husky)
* [lint-staged](https://github.com/okonet/lint-staged)
* [prettier](https://github.com/prettier/prettier)

### Install dependecies

Using `npm`:

```bash
npm install --save-dev --save-exact eslint-config-prettier eslint-plugin-prettier eslint husky lint-staged prettier
```

Using `yarn`:

```bash
yarn add eslint-config-prettier eslint-plugin-prettier eslint husky lint-staged prettier --dev --exact
```

## Prettier rules

> Change them in: [`.prettierrc.yaml`](/.prettierrc.yaml)

| Rule                                                                          | Value   |
| ----------------------------------------------------------------------------- | ------- |
| [`bracketSpacing`](https://prettier.io/docs/en/options.html#bracket-spacing)  | `false` |
| [`jsxBracketSameLine`](https://prettier.io/docs/en/options.html#jsx-brackets) | `false` |
| [`printWidth`](https://prettier.io/docs/en/options.html#print-width)          | `80`    |
| [`proseWrap`](https://prettier.io/docs/en/options.html#prose-wrap)            | `true`  |
| [`requirePragma`](https://prettier.io/docs/en/options.html#require-pragma)    | `false` |
| [`semi`](https://prettier.io/docs/en/options.html#semicolons)                 | `true`  |
| [`singleQuote`](https://prettier.io/docs/en/options.html#quotes)              | `true`  |
| [`tabWidth`](https://prettier.io/docs/en/options.html#tab-width)              | `2`     |
| [`trailingComma`](https://prettier.io/docs/en/options.html#trailing-commas)   | `all`   |
| [`useTabs`](https://prettier.io/docs/en/options.html#tabs)                    | `false` |

## ESLint rules

> Change them in: [`.eslintrc.yaml`](/.eslintrc.yaml)

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

## Install

```bash
npm install
```

## Test

```
npm test
```

## Tasks

```
npm run fix
npm run fix:config
npm run fix:docs
npm run fix:script
npm run fix:style
```
