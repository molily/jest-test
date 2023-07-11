import { setImmediate } from 'timers';

import { renderHelloWorld } from './renderHelloWorld.js';

/**
 * Testing helper for waiting for a Promise to be resolved that we cannot access directly.
 * Waits for the microtask queue to be exhausted.
 *
 * For use in the Jest Node.js environment.
 */
const flushMicrotasksQueue = () =>
  new Promise((resolve) => {
    // We need setImmediate here, queueMicrotask won't suffice
    setImmediate(() => {
      Promise.resolve().then(() => resolve(undefined));
    });
  });

it("works", async () => {
  const element = document.createElement("div");
  const component = renderHelloWorld(element);
  expect(component).toBeDefined();
  expect(element.textContent).toBe("Hello world! Hi");

  await flushMicrotasksQueue();

  component.$destroy();
});
