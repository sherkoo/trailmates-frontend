import { render, screen } from "@testing-library/react";
import Newsfeed from "./index";

test("Testing newsfeed", () => {
  render(<Newsfeed />);
  console.log("test case running");
  const headline = screen.getByText("Newsfeed");
  expect(headline).toBeInTheDocument();
});
