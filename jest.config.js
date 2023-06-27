/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    "^.+\\.svelte$": [
      "./node_modules/svelte-jester/dist/transformer.mjs",
      { preprocess: true },
    ],
  },
  extensionsToTreatAsEsm: [".svelte"],
  testEnvironment: "jsdom",
  clearMocks: true,
  restoreMocks: true,
};

export default config;
