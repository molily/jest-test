/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.svelte$": "svelte-jester",
  },
  moduleFileExtensions: ["js", "svelte"],
  testEnvironment: "jsdom",
  clearMocks: true,
  restoreMocks: true,
};

export default config;
