/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  // setupFilesAfterEnv: ["<rootDir>/setupTestFramework.js"],
  transform: {},
  testEnvironment: "jsdom",
  clearMocks: true,
  restoreMocks: true,
};

// eslint-disable-next-line import/no-default-export
export default config;
