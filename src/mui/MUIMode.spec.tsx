import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import { MuiMode } from "./MUIMode";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
