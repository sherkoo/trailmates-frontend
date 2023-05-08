import { render, screen } from "@testing-library/react";
import Header from "./index";
import { MemoryRouter } from "react-router-dom";

test("renders TrailMates link", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const linkElement = screen.getByText("TrailMates");
  expect(linkElement).toBeInTheDocument();
});
