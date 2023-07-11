import HelloWorld from '../HelloWorld.svelte';

/**
 * @param {HTMLElement} element
 */
// eslint-disable-next-line import/prefer-default-export
export const renderHelloWorld = (element) => {
  // Preload
  import("../Hi.svelte");

  return new HelloWorld({ target: element });
};
