import { renderHelloWorld } from './renderHelloWorld.js';

it("works", () => {
  const element = document.createElement("div");
  const component = renderHelloWorld(element);
  expect(component).toBeDefined();
  expect(element.textContent).toBe("Hello world!");
  component.$destroy();
});
