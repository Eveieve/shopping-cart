import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartPage from "./CartPage";

describe("CartPage UI", () => {
  render(<CartPage/>);

  it("should render correct textContent ", () => {
    expect(screen.getByRole("heading").textContent).toMatch(/review your bag./i);
    expect(screen.getByRole("button", {name: 'Sign out'}).textContent).toMatch(/sign out/i);
    expect(screen.getByRole("notice").textContent).toMatch(/Free delivery and free returns./i);
    expect(screen.getByRole("subtotal").textContent).toMatch(/Subtotal/i)
    expect(screen.getByRole("shipping").textContent).toMatch(/shipping/i)
    expect(screen.getByRole("total").textContent).toMatch(/total/i)
    expect(screen.getByRole("checkout").textContent).toMatch(/checkout/i)

  });
})
  // it("should render correct sign out button", () => {
  // })

