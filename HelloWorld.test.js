import HelloWorld from './HelloWorld.svelte';

it("renders", () => {
  const element = document.createElement("div");
  console.log("HelloWorld", HelloWorld);
  const component = new HelloWorld({ target: element });
  expect(component).toBeDefined();
  expect(element.textContent).toBe("Hello world!");
  component.$destroy();
});
