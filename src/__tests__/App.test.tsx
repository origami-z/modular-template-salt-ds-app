import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders welcome text", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to your new app/i);
  expect(welcomeElement).toBeInTheDocument();
});
