/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: { "^.+\\.svelte$": "svelte-jester" },
  extensionsToTreatAsEsm: [".svelte"],
  testEnvironment: "jsdom",
  clearMocks: true,
  restoreMocks: true,
};

export default config;
