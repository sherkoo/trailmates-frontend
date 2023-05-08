import { render, screen } from "@testing-library/react";
import Events from "./index";

test("renders empty div", () => {
  render(<Events />);
  const divElement = screen.getByTestId("events");
  expect(divElement).not.toBeEmptyDOMElement();
});
