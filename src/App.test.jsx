import { render, screen } from "@testing-library/react";
//import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    // why not just toMatch()?
    expect(container).toMatchSnapshot();
  });

  // it("renders radical rhinos after button click", async () => {
  //   const user = userEvent.setup();

  //   render(<App />);
  //   const button = screen.getByRole("button", { name: "Click Me" });
  // });
});