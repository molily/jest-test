import HelloWorld from './HelloWorld.svelte';

/**
 * @param {HTMLElement} element
 */
export const renderHelloWorld = (element) =>
  new HelloWorld({ target: element });
