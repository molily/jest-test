import HelloWorld from './HelloWorld.svelte';

/**
 * @param {HTMLElement} element
 */
export const renderHelloWorld = (element) => {
  // Preload
  import("./Hi.svelte");

  return new HelloWorld({ target: element });
};
