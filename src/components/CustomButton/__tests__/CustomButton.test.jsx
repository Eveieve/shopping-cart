import userEvent from "@testing-library/user-event";
import CustomButton from "../CustomButton";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";

describe("CustomButton", () => {
  it("should render a button with the text 'Click me'", () => {
    render(<CustomButton onClick={() => {}} />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    // mock a function , doesn't do anything
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);
    const button = screen.getByRole("button", { name: "Click me" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(onClick).not.toHaveBeenCalled();
  });
});

// setting up mocks in beforeEach block
