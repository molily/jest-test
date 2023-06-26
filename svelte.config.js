// This Svelte config is for Jest only. The Svelte config for vite is in vite.config.js.

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
};
