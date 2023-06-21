import { jest } from '@jest/globals';

import { sayHello } from './sayHello.js';

it("says Hello", () => {
  const mock = jest.fn();
  sayHello(mock);
  expect(document.body.textContent).toBe("Hello world!");
  expect(mock).toHaveBeenCalledTimes(1);
});
