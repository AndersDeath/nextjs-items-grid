import React from "react";
import { render, screen } from "@testing-library/react";
import {App} from "./App";

jest.mock("./Components/Header/Header", () => () => (
  <div data-testid="header">Header Component</div>
));
jest.mock("./Components/Content/Content", () => () => (
  <div data-testid="content">Content Component</div>
));

test("renders App component with Header and Content components", () => {
  render(<App />);

  const headerElement = screen.getByTestId("header");
  const contentElement = screen.getByTestId("content");

  expect(headerElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
