/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
  },
  extensionsToTreatAsEsm: [".svelte"],
  testEnvironment: "jsdom",
  clearMocks: true,
  restoreMocks: true,
};

export default config;
