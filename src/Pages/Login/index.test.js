import { render, screen } from "@testing-library/react";
import Login from "./index";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Login component", () => {
  it("should render the login form wrapped in the provider component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const emailLabels = screen.getAllByText("Email", { exact: false });
    expect(emailLabels.length).toBe(2);
  });
});
