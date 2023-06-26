// This Svelte config is for Jest only. The Svelte config for vite is in vite.config.js.

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const preprocess = require("svelte-preprocess");

module.exports = {
  preprocess:
    // @ts-ignore "This expression is not callable"
    preprocess(),
};
