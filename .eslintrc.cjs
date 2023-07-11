/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['plugin:import/recommended', 'plugin:svelte/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      // Disable some rules for .svelte files
      rules: {
        // Allow props to have `export let`
        'import/no-mutable-exports': 'off',
        // Disable line length check since Prettier formats the markup with long lines.
        'max-len': 'off',
        // `export let foo = undefined` is necessary to suppress the Svelte warning
        // "Component was created without expected prop 'foo'".
        'no-undef-init': 'off',
      },
    },
  ],
  rules: {
    // Prefer named exports
    'import/prefer-default-export': 'off',

    // Use file extensions because they are mandatory in Node.js ESM
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    // https://nodejs.org/api/esm.html#esm_mandatory_file_extensions
    'import/extensions': ['warn', 'ignorePackages'],
  },
};

module.exports = config;
