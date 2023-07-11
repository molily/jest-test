import { render, screen } from "@testing-library/svelte";

import HelloWorld from "./HelloWorld.svelte";

it("renders", () => {
  render(HelloWorld);
  const element = screen.getByText("Hello world!");
  expect(element).toBeDefined();
});
