import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    // use 'toMatchSnapshot' to check whether all nodes render
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    // simulate a click event
    // setting up an user event
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    // simulates asynchronous user interaction
    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
