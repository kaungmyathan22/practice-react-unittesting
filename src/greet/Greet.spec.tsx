import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("should renders Greet correctly.", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  test("should renders Greet correctly with a name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText("Hello John");
    expect(textElement).toBeInTheDocument();
  });
});
