import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();
    const nameElement = screen.getByLabelText("Name");
    expect(nameElement).toBeInTheDocument();
    const bioElement = screen.getByLabelText("Bio");
    expect(bioElement).toBeInTheDocument();
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();
  });
});
