import { jest } from '@jest/globals';

import { sayHello } from './index.js';

describe("Hello world", () => {
  it("says Hello", () => {
    const mock = jest.fn();
    sayHello(mock);
    expect(document.body.textContent).toBe("Hello world!");
    // expect(document.body).toHaveTextContent("Hello world!");
    // expect(document.body).toHaveAttribute("title", "Hello world!");
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
