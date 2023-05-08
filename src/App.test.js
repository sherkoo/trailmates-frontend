import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
// import store from "./Redux/store";
import rootReducer from "./Redux/reducers";
import App from "./App";

describe("App", () => {
  it("renders login page when loggedIn is false", () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        user: {
          loggedIn: false,
        },
      },
    });

    const { screen } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen && screen.getByTestId("login-page")).toBeInTheDocument();
  });
});
